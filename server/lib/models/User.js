import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: String,
  inn: { type: String, required: true }, // ИНН для проверки
  requests: [{
    date: { type: Date, default: Date.now },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
    status: { type: String, enum: ['new', 'processed'], default: 'new' }
  }],
  role: { type: String, enum: ['user', 'admin'], default: 'user' }
})

export default mongoose.model('User', userSchema)