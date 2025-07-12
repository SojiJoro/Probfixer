import mongoose from 'mongoose'

export interface IUser {
  _id: string
  name: string
  email: string
  phone: string
  password: string
  role: 'customer' | 'artisan' | 'admin'
  isVerified: boolean
  createdAt: Date
  updatedAt: Date
}

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['customer', 'artisan', 'admin'], default: 'customer' },
  isVerified: { type: Boolean, default: false },
}, {
  timestamps: true
})

export default mongoose.models.User || mongoose.model('User', userSchema)