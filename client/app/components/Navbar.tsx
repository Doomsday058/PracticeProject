//app/components/Navbar.tsx
'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaUser } from 'react-icons/fa';
import { useUser } from './UserContext';
import BlueAuthModal from './AuthModal';

export default function Navbar() {
  const { user } = useUser();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Отслеживание скролла для изменения фона навбара
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const handleProfileClick = () => {
    if (user) {
      // Если пользователь авторизован, перенаправляем на страницу аккаунта
      window.location.href = '/account';
    } else {
      // Если не авторизован, показываем модальное окно авторизации
      setShowAuthModal(true);
    }
  };

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled ? 'bg-black py-2' : 'bg-black bg-opacity-70 backdrop-blur-lg py-4'
      }`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
          <div className="text-2xl font-bold font-russo text-white">
            VOSTOK <span className="text-blue-500">TRADE</span> COMPANY
          </div>
          <nav>
            <ul className="flex space-x-8 text-lg items-center">
              <li>
                <Link href="#hero" className="text-white transition-all duration-300 hover:text-blue-400 font-montserrat">
                  Главная
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-white transition-all duration-300 hover:text-blue-400 font-montserrat">
                  О компании
                </Link>
              </li>
              <li>
                <Link href="#products" className="text-white transition-all duration-300 hover:text-blue-400 font-montserrat">
                  Продукция
                </Link>
              </li>
              <li>
                <Link href="#reviews" className="text-white transition-all duration-300 hover:text-blue-400 font-montserrat">
                  Отзывы
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-white transition-all duration-300 hover:text-blue-400 font-montserrat">
                  Контакты
                </Link>
              </li>
              <li>
                <button 
                  onClick={handleProfileClick}
                  className="text-white transition-all duration-300 hover:text-blue-400 flex items-center"
                  title={user ? "Личный кабинет" : "Вход/Регистрация"}
                  aria-label={user ? "Личный кабинет" : "Вход/Регистрация"}
                >
                  <FaUser size={20} />
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      
      <BlueAuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </>
  );
}