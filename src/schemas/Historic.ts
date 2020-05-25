import { Schema, model } from 'mongoose'
import { HistoricInterface } from '../interfaces/HistoricInterface'
import mongoosePaginate from 'mongoose-paginate'

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

HistoricSchema.plugin(mongoosePaginate)

export default model<HistoricInterface>('Historic', HistoricSchema)
