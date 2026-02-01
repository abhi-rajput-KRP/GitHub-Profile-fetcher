import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Hero  from './components/hero.jsx'
import Login from './components/login.jsx'
import Register from './components/register.jsx'
import Profile from './components/profile.jsx'
import {RouterProvider, createBrowserRouter} from 'react-router'

let router = createBrowserRouter([
  {
    path: "/",
    Component:App,
    children: [
      {
        path: "",
        Component: Hero
      },
      {
        path: "login",
        Component: Login
      },
      {
        path: "register",
        Component: Register
      },
      {
        path: "login",
        Component: Login
      },
      {
        path: "profile",
        Component: Profile
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)