'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaBars } from 'react-icons/fa'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div className={`menu ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <FaBars />
      </div>
      <nav className={`navbar ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><Link href="#home">Главная</Link></li>
          <li><Link href="#products">Продукция</Link></li>
          <li><Link href="#about">О нас</Link></li>
          <li><Link href="#contact">Контакты</Link></li>
        </ul>
      </nav>

      <style jsx>{`
        .menu {
          position: absolute;
          top: 20px;
          left: 20px;
          font-size: 30px;
          cursor: pointer;
          z-index: 1000;
        }
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          background: rgba(0, 0, 0, 0.6);
          color: white;
          transition: top 0.3s ease;
          z-index: 1000;
        }
        .navbar ul {
          display: flex;
          justify-content: center;
          padding: 1rem;
          list-style: none;
        }
        .navbar li {
          margin: 0 20px;
        }
        .navbar a {
          color: white;
          text-decoration: none;
          font-weight: bold;
        }
        .navbar.open {
          top: 0;
        }
      `}</style>
    </>
  )
}
