import { FiUser } from 'react-icons/fi'
import { SiHandshakeProtocol } from 'react-icons/si'
import { Button } from '../ui/button.js'
import { Gavel, Home, Scale, Trophy } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [active, setActive] = useState('home')

  const tabs = [
    { id: 'home', label: 'Home', icon: <Home size={22} />, href: '/' },
    { id: 'bidboard', label: 'Bidboard', icon: <Trophy size={22} />, href: '/bidboard' },
    { id: 'lotmatch', label: 'Compare', icon: <Scale size={22} />, href: '/lotmatch' },
  ]
  return (
    <header className="h-16 sticky z-1 top-0 shadow-sm border-b border-gray-200 ">
      <div className="header-layout">
        <div className="logo flex place-items-center gap-2">
          <span className="w-6 h-6 md:w-8 md:h-8 border-[1px] rounded-full grid place-content-center">
            <SiHandshakeProtocol className="text-green-400 text-md md:text-2xl" />
          </span>{' '}
          <p className="text-gradient text-responsive ">NextLot</p>
        </div>
        <nav className="hidden text-responsive md:block">
          <ul className="header-layout gap-3 p-2 ">
            {tabs.map((tab) => (
              <li key={tab.id}>
                <Link
                  to={tab.href}
                  onClick={() => setActive(tab.id)}
                  className={`flex flex-col items-center text-sm ${
                    active === tab.id ? 'text-blue-600 ' : 'text-gray-500 hover:text-blue-600'
                  }`}
                >
                  <span>{tab.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="fixed bottom-0 left-0 w-full text-responsive header-layout md:hidden">
          <ul className="header-layout gap-3 p-2 ">
            {tabs.map((tab) => (
              <li key={tab.id}>
                <Link
                  to={tab.href}
                  onClick={() => setActive(tab.id)}
                  className={`flex flex-col items-center text-[8px] font-bold font-head ${
                    active === tab.id
                      ? 'bg-gradient min-w-[50px] w-fit h-fit rounded-md p-1 text-white '
                      : 'text-gray-500'
                  }`}
                >
                  <div className="text-[6px]"> {tab.icon}</div>
                  <span>{tab.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Button variant="ghost">
          <FiUser />
          <p className="hidden md:block">Sign In</p>
        </Button>
      </div>
    </header>
  )
}

export default Header
