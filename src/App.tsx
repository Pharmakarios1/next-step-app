import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './layout/RootLayout.js'
import Home from './pages/Home.js'
import About from './pages/About.js'
import Bidboard from './pages/Bidboard.js'
import Lotmatch from './pages/Lotmatch.js'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: '/bidboard', element: <Bidboard /> },
      { path: '/lotmatch', element: <Lotmatch /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
