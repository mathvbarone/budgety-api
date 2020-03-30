import { Document } from 'mongoose'

export interface HistoricInterface extends Document {
    expense: string,
    budget: string,
    date: number,
    value: number,
    plugin(): void;
}
