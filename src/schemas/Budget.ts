import { Schema, model } from 'mongoose'

const BudgetSchema = new Schema({
  name: String,
  initialValue: Number,
  currentValue: Number
}, {
  timestamps: true
})

export default model('Budget', BudgetSchema)
