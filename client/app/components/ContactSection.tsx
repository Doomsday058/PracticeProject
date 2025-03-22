// app/components/ContactSection.tsx
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaTelegram } from 'react-icons/fa';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 common-bg-section">
    <div className="max-w-5xl mx-auto px-4 text-white">
      <h2 className="text-3xl font-russo text-center mb-8">Свяжитесь с нами</h2>
      <div className="flex flex-col md:flex-row md:space-x-8">
        <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="mb-4">
              <h3 className="text-xl font-semibold">Телефон</h3>
              <p className="flex items-center">
                <FaPhoneAlt className="mr-2 text-blue-400" />
                <a href="tel:+1234567890" className="text-blue-400 hover:text-blue-500">
                  +7 (777) 988-7045
                </a>
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold">Email</h3>
              <p className="flex items-center">
                <FaEnvelope className="mr-2 text-blue-400" />
                <a href="mailto:info@vostoktrade.com" className="text-blue-400 hover:text-blue-500">
                  info@vostoktrade.com
                </a>
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold">WhatsApp</h3>
              <p className="flex items-center">
                <FaWhatsapp className="mr-2 text-green-400" />
                <a href="https://wa.me/+77779887045" target="_blank" className="text-green-400 hover:text-green-500">
                  Написать в WhatsApp
                </a>
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold">Telegram</h3>
              <p className="flex items-center">
                <FaTelegram className="mr-2 text-blue-400" />
                <a href="https://t.me/vostoktrade" target="_blank" className="text-blue-400 hover:text-blue-500">
                  Написать в Telegram
                </a>
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold">Адрес</h3>
              <p>070000, Усть-Каменогорск, ул. Самарское шоссе, 5</p>
            </div>
          </div>
          {/* Карта */}
          <div className="md:w-1/2">
            <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2570.03210210959!2d82.63398387725118!3d49.89820062697212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x42eb4ed1d48c9811%3A0xa1b9c54011f0c3e0!2z0KHQsNC80LDRgNGB0LrQvtC1INGILiA1LCDQo9GB0YLRjC3QmtCw0LzQtdC90L7Qs9C-0YDRgdC6IDA3MDAwMCwg0JrQsNC30LDRhdGB0YLQsNC9!5e0!3m2!1sru!2sru!4v1741958640355!5m2!1sru!2sru"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
