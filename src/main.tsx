import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home/index.tsx'
import Error from './pages/Error/index.tsx'
import AsobiArticles from './pages/AsobiArticles'
import { asobiArticlesLoader } from './pages/AsobiArticles/loader.ts'
import CrowdfundingArticles from './pages/CrowdfundingArticles/index.tsx'
import { crowdfundingArticlesLoader } from './pages/CrowdfundingArticles/loader.ts'
import Asobi from './pages/Asobi/index.tsx'
import { asobiLoader } from './pages/Asobi/loader.ts'
import Crowdfunding from './pages/Crowdfunding/index.tsx'
import { crowdfundingLoader } from './pages/Crowdfunding/loader.ts'
import GlobalLayout from './pages/GlobalLayout/index.tsx'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <GlobalLayout />,
      errorElement: <Error />,
      children: [
        {
          path: '/',
          element: <Home />,
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
          path: '/asobi/draft/:id',
          element: <Asobi />,
          loader: async ({ params }) => {
            return asobiLoader(params.id ?? '', params.draftKey ?? '')
          },
        },
        {
          path: '/asobi/draft/:id/:draftKey',
          element: <Asobi />,
          loader: async ({ params }) => {
            return asobiLoader(params.id ?? '', params.draftKey ?? '')
          },
        },
        {
          path: '/crowdfunding',
          element: <CrowdfundingArticles />,
          loader: crowdfundingArticlesLoader,
        },
        {
          path: '/crowdfunding/:id',
          element: <Crowdfunding />,
          loader: async ({ params }) => {
            return crowdfundingLoader(params.id ?? '')
          },
        },
        {
          path: '/crowdfunding/draft/:id',
          element: <Crowdfunding />,
          loader: async ({ params }) => {
            return crowdfundingLoader(params.id ?? '', params.draftKey ?? '')
          },
        },
        {
          path: '/crowdfunding/draft/:id/:draftKey',
          element: <Crowdfunding />,
          loader: async ({ params }) => {
            return crowdfundingLoader(params.id ?? '', params.draftKey ?? '')
          },
        },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL }
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
