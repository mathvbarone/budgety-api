import { Schema, model } from 'mongoose'
import { BudgetInterface } from '../interfaces/BudgetInterface'

const BudgetSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  initialValue: {
    type: Number,
    required: true
  },
  currentValue: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
})

export default model<BudgetInterface>('Budget', BudgetSchema)
