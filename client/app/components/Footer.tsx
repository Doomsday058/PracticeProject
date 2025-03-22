// app/components/Footer.tsx
import { FaFacebook, FaInstagram, FaTelegram, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="py-6 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h3 className="text-xl font-russo mb-2">VOSTOK TRADE COMPANY</h3>
            <p className="text-gray-400 text-sm font-montserrat">Ваш надежный партнер в оптовой торговле напитками</p>
          </div>
          
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
              <FaFacebook size={22} />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
              <FaInstagram size={22} />
            </a>
            <a href="https://t.me/vostoktrade" className="text-gray-400 hover:text-blue-500 transition-colors">
              <FaTelegram size={22} />
            </a>
            <a href="https://wa.me/+77779887045" className="text-gray-400 hover:text-blue-500 transition-colors">
              <FaWhatsapp size={22} />
            </a>
          </div>
          
          <div className="text-sm text-gray-400 font-montserrat">
            <p>&copy; {new Date().getFullYear()} VOSTOK TRADE COMPANY. Все права защищены.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}