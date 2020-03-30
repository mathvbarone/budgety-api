import { Request, Response } from 'express'

import Budget from '../schemas/Budget'

class BudgetController {
  public async index (req: Request, res: Response): Promise<Response> {
    const budgets = await Budget.find()

    return res.json(budgets)
  }
}

export default new BudgetController()
