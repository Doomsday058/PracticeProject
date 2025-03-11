import mongoose from 'mongoose'

const dbConnect = async () => {
  if (!process.env.MONGODB_URI) {
    throw new Error('Отсутствует переменная окружения MONGODB_URI в .env')
  }

  // Если соединение уже установлено — пропускаем
  if (mongoose.connection.readyState === 1) {
    return
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log('MongoDB успешно подключена')
  } catch (error) {
    console.error('Ошибка подключения к MongoDB:', error)
    throw new Error('Не удалось подключиться к базе данных')
  }
}

export default dbConnect
