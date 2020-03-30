import { Request, Response } from 'express'

import Historic from '../schemas/Historic'

class HistoricController {
  public async index (req: Request, res: Response): Promise<Response> {
    try {
      const { page = 1 } = req.query
      const historics = await Historic.paginate({}, { page, limit: 10 })

      return res.json(historics)
    } catch (err) {
      return res.status(500).send(err.message)
    }
  }

  public async show (req: Request, res: Response): Promise<Response> {
    try {
      const historic = await Historic.findById(req.params.id)
      return res.json(historic)
    } catch (err) {
      return res.status(500).send(err.message)
    }
  }

  public async update (req: Request, res: Response): Promise<Response> {
    try {
      const historic = await Historic.findByIdAndUpdate(req.params.id, req.body, { new: true })
      return res.json(historic)
    } catch (err) {
      return res.status(400).send(err.message)
    }
  }

  public async create (req: Request, res: Response): Promise<Response> {
    try {
      const historic = await Historic.create(req.body)
      return res.json(historic)
    } catch (err) {
      return res.status(400).send(err.message)
    }
  }

  public async destroy (req: Request, res: Response): Promise<Response> {
    try {
      await Historic.findByIdAndRemove(req.params.id)
      return res.send()
    } catch (err) {
      return res.status(400).send(err.message)
    }
  }
}

export default new HistoricController()
