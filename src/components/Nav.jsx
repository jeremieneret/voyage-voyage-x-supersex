import Burger from './Burger'
import { useState } from 'react'
import { Link } from 'react-router-dom'


export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  return <>
    <button onClick={handleClick}>
      <Burger />
    </button>
    <nav className={`menu ${isOpen ? 'open' : ''}`}>
      <ul onClick={handleClick}>
        <li>
          <Link to='/video'>VIDEO</Link>
        </li>
        <li>
          <Link to='/credits'>CREDITS</Link>
        </li>
        <li>
          <Link to='/about'>ABOUT</Link>
        </li>
        <li>
          <Link to='/'>HOME</Link>
        </li>
      </ul>

    </nav>
  </>
}