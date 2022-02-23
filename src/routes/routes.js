import { lazy } from 'react'

const routes = [
    {
        path: '',
        element: lazy(() => import('../pages/AllTodoItems'))
    }, {
        path: 'active',
        element: lazy(() => import('../pages/ActiveItems'))
    }, {
        path: 'completed',
        element: lazy(() => import('../pages/CompletedItems'))
    }
]

export default routes