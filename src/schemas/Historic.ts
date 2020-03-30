import { Schema, model } from 'mongoose'
import { HistoricInterface } from '../interfaces/HistoricInterface'

const HistoricSchema = new Schema({
  expense: {
    type: String,
    required: true
  },
  budget: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
})

export default model<HistoricInterface>('Budget', HistoricSchema)
