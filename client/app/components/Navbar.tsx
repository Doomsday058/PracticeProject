// app/components/Navbar.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => setIsOpen(!isOpen);
  
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-70 backdrop-blur-lg shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold font-russo">
          VOSTOK TRADE COMPANY
        </div>
        <nav>
          {/* Десктопное меню */}
          <ul className="hidden md:flex space-x-8 text-lg">
            <li><Link href="#hero" scroll={false}>Главная</Link></li>
            <li><Link href="#about" scroll={false}>О компании</Link></li>
            <li><Link href="#products" scroll={false}>Продукция</Link></li>
            <li><Link href="#contact" scroll={false}>Контакты</Link></li>
          </ul>
          {/* Кнопка-гамбургер для мобильных */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white text-2xl">
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </nav>
      </div>
      {/* Мобильное меню */}
      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-90">
          <ul className="flex flex-col space-y-4 p-4">
            <li><Link href="#hero" scroll={false} onClick={toggleMenu}>Главная</Link></li>
            <li><Link href="#about" scroll={false} onClick={toggleMenu}>О компании</Link></li>
            <li><Link href="#products" scroll={false} onClick={toggleMenu}>Продукция</Link></li>
            <li><Link href="#contact" scroll={false} onClick={toggleMenu}>Контакты</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
}
 