import { Outlet } from 'react-router-dom'
import Footer from '@/components/customs/Footer.js'
import Header from '@/components/customs/Header.js'

const RootLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default RootLayout
