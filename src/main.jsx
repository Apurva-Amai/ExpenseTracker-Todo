import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Expense from './Expense.jsx'
import Todo from './Todo.jsx'

const router = createBrowserRouter([
   {
      path: '/',
      element: <App />,
      children: [
         {
            path: "/expense",
            element: <Expense />
         },
         {
            path: "/todo",
            element: <Todo />
         }
      ]
   }
])

createRoot(document.getElementById('root')).render(
 <Provider store={store}>
    <RouterProvider router={router} />
 </Provider> 
)
