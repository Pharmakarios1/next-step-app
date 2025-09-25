import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './layout/RootLayout.js'
import Home from './pages/Home.js'
import About from './pages/About.js'
import Bidboard from './pages/Bidboard.js'
import Lotmatch from './pages/Lotmatch.js'
import Login from './pages/auth/Login.js'
import Signup from './pages/auth/Signup.js'
import Dashboard from './pages/Dashboard.js'
import { SignedIn, SignedOut } from '@clerk/clerk-react'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: '/bidboard', element: <Bidboard /> },
      { path: '/lotmatch', element: <Lotmatch /> },
      {
        path: '/login',
        element: (
          <SignedOut>
            {' '}
            <Login />
          </SignedOut>
        ),
      },
      {
        path: '/signup',
        element: (
          <SignedOut>
            <Signup />
          </SignedOut>
        ),
      },
      {
        path: '/dashboard',
        element: (
          <SignedIn>
            {' '}
            <Dashboard />
          </SignedIn>
        ),
      },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
