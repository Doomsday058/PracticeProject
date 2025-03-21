// app/components/Navbar.tsx
'use client';
import Link from 'next/link';
import { FaUser } from 'react-icons/fa';
import { useUser } from './UserContext';

export default function Navbar() {
  const { user } = useUser(); // Можно использовать, чтобы условно отображать иконку

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-70 backdrop-blur-lg shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold font-russo text-white">
          VOSTOK TRADE COMPANY
        </div>
        <nav>
          <ul className="flex space-x-8 text-lg items-center">
            <li>
              <Link href="#hero" className="text-white transition-all duration-300 hover:text-indigo-400 hover:scale-105">
                Главная
              </Link>
            </li>
            <li>
              <Link href="#about" className="text-white transition-all duration-300 hover:text-indigo-400 hover:scale-105">
                О компании
              </Link>
            </li>
            <li>
              <Link href="#products" className="text-white transition-all duration-300 hover:text-indigo-400 hover:scale-105">
                Продукция
              </Link>
            </li>
            <li>
              <Link href="#reviews" className="text-white transition-all duration-300 hover:text-indigo-400 hover:scale-105">
                Отзывы
              </Link>
            </li>
            <li>
              <Link href="#contact" className="text-white transition-all duration-300 hover:text-indigo-400 hover:scale-105">
                Контакты
              </Link>
            </li>
            <li>
              <Link 
                href="/account" 
                className="text-white transition-all duration-300 hover:text-indigo-400 hover:scale-105"
                title="Личный кабинет"
              >
                <FaUser size={20} />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
