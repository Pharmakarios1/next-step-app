import { FiUser } from 'react-icons/fi'
import { SiHandshakeProtocol } from 'react-icons/si'
import { Button } from '../ui/button.js'
import { Home, Scale, Trophy } from 'lucide-react'
import { useState } from 'react'
import {  NavLink } from 'react-router-dom'
import { cn } from '@/lib/utils.js'

const Header = ({ isActive }) => {
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
        <nav className="hidden  md:block">
          <ul className="header-layout gap-3 p-2 ">
            {tabs.map((tab) => (
              <li key={tab.id}>
                <NavLink
                  to={tab.href}
                  onClick={() => setActive(tab.id)}
                  className={({ isActive }) =>
                    isActive
                      ? 'text-blue-600 font-semibold border-b-2 border-blue-600'
                      : 'text-gray-600 hover:text-blue-500'
                  }
                >
                  <span>{tab.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="fixed bottom-0 left-0 w-full header-layout md:hidden shadow-sm border-t border-gray-200 z-1">
          <ul className="header-layout gap-3 p-2 ">
            {tabs.map((tab) => (
              <li key={tab.id}>
                <NavLink
                  to={tab.href}
                  onClick={() => setActive(tab.id)}
                  className={({ isActive }) =>
                    cn(
                      'flex flex-col items-center  text-[10px] font-head transition min-w-[50px] w-fit h-fit rounded-md p-1',
                      isActive ? 'bg-gradient  text-white' : 'text-gray-600 hover:bg-gray-200',
                    )
                  }
                >
                  <div className="text-[6px]"> {tab.icon}</div>
                  <span>{tab.label}</span>
                </NavLink>
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
