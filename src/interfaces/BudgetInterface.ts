import { Document } from 'mongoose'

export interface BudgetInterface extends Document {
    name: string,
    initialValue: number,
    currentValue: number
}
