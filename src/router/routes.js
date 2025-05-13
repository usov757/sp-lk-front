import { shared_routes } from './routes/shared.routes'

import ErrorNotFound from '../views/ErrorNotFound.vue'
import ErrorForbidden from '../views/ErrorForbidden.vue'

const routes = [
  ...shared_routes,
  {
    path: '/forbidden',
    name: 'forbidden',
    component: ErrorForbidden,
  },
  {
    path: '/:catchAll(.*)*',
    name: 'NotFound',
    component: ErrorNotFound,
  },
]

export default routes
