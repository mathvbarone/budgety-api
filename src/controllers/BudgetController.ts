import { Request, Response } from 'express'

import Budget from '../schemas/Budget'

class BudgetController {
  public async index (req: Request, res: Response): Promise<Response> {
    const budgets = await Budget.find()

    return res.json(budgets)
  }

  public async create (req: Request, res: Response): Promise<Response> {
    try {
      const budget = await Budget.create(req.body)
      return res.json(budget)
    } catch (err) {
      return res.status(400).send(err.message)
    }
  }
}

export default new BudgetController()
