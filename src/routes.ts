import { Router } from 'express'

import BudgetController from './controllers/BudgetController'
import HistoricController from './controllers/HistoricController'

const routes = Router()

routes.get('/budgets', BudgetController.index)
routes.get('/budgets/:id', BudgetController.show)
routes.put('/budgets/:id', BudgetController.update)
routes.post('/budgets', BudgetController.create)
routes.delete('/budgets/:id', BudgetController.destroy)

routes.get('/historic', HistoricController.index)
routes.get('/historic/:id', HistoricController.show)
routes.put('/historic/:id', HistoricController.update)
routes.post('/historic', HistoricController.create)
routes.delete('/historic/:id', HistoricController.destroy)

export default routes
