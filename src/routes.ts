import { Router } from 'express'

import BudgetController from './controllers/BudgetController'

const routes = Router()

routes.get('/budgets', BudgetController.index)
routes.get('/budgets/:id', BudgetController.show)
routes.put('/budgets/:id', BudgetController.update)
routes.post('/budgets', BudgetController.create)
routes.delete('/budgets/:id', BudgetController.destroy)

export default routes
