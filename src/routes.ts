import { Router } from 'express'

import BudgetController from './controllers/BudgetController'

const routes = Router()

routes.get('/budgets', BudgetController.index)
routes.post('/budgets', BudgetController.create)

export default routes
