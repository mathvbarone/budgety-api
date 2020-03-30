import { Request, Response } from 'express'

import Budget from '../schemas/Budget'

class BudgetController {
  public async index (req: Request, res: Response): Promise<Response> {
    try {
      const budgets = await Budget.find()

      return res.json(budgets)
    } catch (err) {
      return res.status(500).send(err.message)
    }
  }

  public async show (req: Request, res: Response): Promise<Response> {
    try {
      const budget = await Budget.findById(req.params.id)
      return res.json(budget)
    } catch (err) {
      return res.status(500).send(err.message)
    }
  }

  public async update (req: Request, res: Response): Promise<Response> {
    try {
      const budget = await Budget.findByIdAndUpdate(req.params.id, req.body, { new: true })
      return res.json(budget)
    } catch (err) {
      return res.status(400).send(err.message)
    }
  }

  public async create (req: Request, res: Response): Promise<Response> {
    try {
      const budget = await Budget.create(req.body)
      return res.json(budget)
    } catch (err) {
      return res.status(400).send(err.message)
    }
  }

  public async destroy (req: Request, res: Response): Promise<Response> {
    try {
      await Budget.findByIdAndRemove(req.params.id)
      return res.send()
    } catch (err) {
      return res.status(400).send(err.message)
    }
  }
}

export default new BudgetController()
