import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import dbConnect from './lib/db.js'
import Product from './lib/models/Product.js'

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
