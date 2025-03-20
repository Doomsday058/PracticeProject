// app/components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-70 backdrop-blur-lg shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold font-russo text-white">
          VOSTOK TRADE COMPANY
        </div>
        <nav>
          {/* Меню для всех экранов */}
          <ul className="flex space-x-8 text-lg">
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
            {/* Кнопка отзывов раньше контактов */}
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
          </ul>
        </nav>
      </div>
    </header>
  );
}
