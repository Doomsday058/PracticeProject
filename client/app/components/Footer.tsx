import { FaFacebook, FaInstagram, FaTelegram, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="py-6 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h3 className="text-xl font-russo mb-2">VOSTOK TRADE COMPANY</h3>
            <p className="text-gray-400 text-sm">Ваш надежный партнер в оптовой торговле напитками</p>
          </div>
          
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <FaInstagram size={20} />
            </a>
            <a href="https://t.me/vostoktrade" className="text-gray-400 hover:text-white transition-colors">
              <FaTelegram size={20} />
            </a>
            <a href="https://wa.me/+77779887045" className="text-gray-400 hover:text-white transition-colors">
              <FaWhatsapp size={20} />
            </a>
          </div>
          
          <div className="text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} VOSTOK TRADE COMPANY. Все права защищены.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}