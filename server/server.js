import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import dbConnect from './lib/db.js';
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import User from './lib/models/User.js';
import Product from './lib/models/Product.js';   
import PriceRequest from './lib/models/PriceRequest.js'; 
import xlsx from 'xlsx'
import path from 'path'
import { fileURLToPath } from 'url'
import { sendPriceByEmail } from './lib/mailer.js';

dotenv.config() // Подключаем .env

const app = express()
app.use(cors())        // Разрешаем CORS
app.use(express.json()) // Для парсинга JSON

// Маршрут для получения списка товаров
app.get('/api/products', async (req, res) => {
  try {
    await dbConnect() // Устанавливаем соединение с БД
    const products = await Product.find({})
    res.status(200).json(products)
  } catch (error) {
    console.error('Ошибка при получении товаров:', error)
    res.status(500).json({ error: 'Server error' })
  }
})

app.post('/api/products', async (req, res) => {
  try {
    await dbConnect()
    const newProduct = await Product.create(req.body)
    res.status(201).json(newProduct)
  } catch (error) {
    console.error('Ошибка при создании товара:', error)
    res.status(500).json({ error: 'Server error' })
  }
})

// Запуск сервера
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`)
})

// Middleware авторизации
const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]
  if (!token) return res.status(401).json({ message: 'Not authorized' })
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = await User.findById(decoded.id).select('-password')
    next()
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' })
  }
}

// Регистрация
app.post('/api/register', async (req, res) => {
  const { companyName, email, password, inn } = req.body
  
  try {
    const hashedPassword = await bcrypt.hash(password, 12)
    const user = await User.create({
      companyName,
      email,
      password: hashedPassword,
      inn
    })
    
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '30d' })
    res.status(201).json({ user: { ...user._doc, password: null }, token })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// Логин
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body
  
  try {
    const user = await User.findOne({ email })
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Invalid credentials' })
    }
    
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '30d' })
    res.json({ token, user: { ...user._doc, password: null } })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Загрузка прайса из Excel
app.post('/api/upload-price', authMiddleware, async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ message: 'Forbidden' })
  
  try {
    const workbook = xlsx.readFile(path.join(__dirname, 'price.xlsx'))
    const sheet = workbook.Sheets[workbook.SheetNames[0]]
    const data = xlsx.utils.sheet_to_json(sheet)
    
    await Product.deleteMany({})
    await Product.insertMany(data)
    
    res.json({ message: 'Price list updated', count: data.length })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// Запрос прайса
app.post('/api/request-price', authMiddleware, async (req, res) => {
  try {
    const priceRequest = await PriceRequest.create({
      user: req.user._id,
      downloadLink: `/price-${Date.now()}.pdf`,
      expiresAt: new Date(Date.now() + 3*24*60*60*1000)
    })
    
    // Здесь логика генерации PDF и отправки на почту
    sendPriceByEmail(req.user.email, priceRequest.downloadLink)
    
    res.json({ message: 'Price list sent to your email' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})