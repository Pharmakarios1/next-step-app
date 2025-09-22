import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./layout/RootLayout.js"
import Home from "./pages/Home.js"
import About from "./pages/About.js"


const router = createBrowserRouter([{
  path: "/",
  element:<RootLayout/>,
  children:[
   { index: true, element: <Home/>},
   {path: "about", element: <About/>}
  ]
}])


export default function App() {
  return <RouterProvider router={router}/>
}
