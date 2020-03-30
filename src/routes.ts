import { Router } from 'express'

import BudgetController from './controllers/BudgetController'

const routes = Router()

routes.get('/budgets', BudgetController.index)

export default routes
