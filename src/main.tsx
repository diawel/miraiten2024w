import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home/index.tsx'
import Error from './pages/Error/index.tsx'
import AsobiArticles from './pages/AsobiArticles'
import { asobiArticlesLoader } from './pages/AsobiArticles/loader.ts'
import CrowdfundingArticles from './pages/CrowdfundingArticles/index.tsx'
import { crowdfundingArticlesLoader } from './pages/CrowdfundingArticles/loader.ts'
import Asobi from './pages/Asobi/index.tsx'
import { asobiLoader } from './pages/Asobi/loader.ts'

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
      element: <Asobi />,
      loader: async ({ params }) => {
        return asobiLoader(params.id ?? '')
      },
    },
    {
      path: '/crowdfunding',
      element: <CrowdfundingArticles />,
      loader: crowdfundingArticlesLoader,
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
