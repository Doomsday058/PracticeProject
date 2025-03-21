// models/PriceRequest.js
import mongoose from 'mongoose'

const PriceRequestSchema = new mongoose.Schema({
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  requestedAt: { 
    type: Date, 
    default: Date.now 
  },
  sentAt: Date,
  downloadLink: String,
  expiresAt: { 
    type: Date, 
    default: () => Date.now() + 3*24*60*60*1000 // 3 дня
  }
})

export default mongoose.models.PriceRequest || 
  mongoose.model('PriceRequest', PriceRequestSchema)