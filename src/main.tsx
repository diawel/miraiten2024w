import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home/index.tsx'
import Error from './pages/Error/index.tsx'
import AsobiArticles from './pages/AsobiArticles/index.tsx'
import { asobiArticlesLoader } from './pages/AsobiArticles/loader.ts'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Home />,
      errorElement: <Error />,
    },
    {
      path: '/asobi',
      element: <AsobiArticles />,
      loader: asobiArticlesLoader,
    },
    {
      path: '/asobi/:id',
      element: <Home />,
    },
    {
      path: '/crowdfunding',
      element: <Home />,
    },

    {
      path: '/crowdfunding/:id',
      element: <Home />,
    },
  ],
  { basename: import.meta.env.BASE_URL }
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
