// app/components/ReviewsSection.tsx
'use client';
import { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaQuoteLeft } from 'react-icons/fa';

export default function ReviewsSection() {
  const reviews = [
    { id: 1, name: 'Иван Иванов', role: 'Менеджер по продажам', text: 'Отличный сервис и большой выбор продукции! Работать с VOSTOK TRADE COMPANY - одно удовольствие.' },
    { id: 2, name: 'Мария Петрова', role: 'Закупщик', text: 'Очень довольны качеством напитков. Все всегда вовремя, с хорошими ценами. Рекомендуем!' },
    { id: 3, name: 'Дмитрий Сидоров', role: 'Клиент', text: 'Всегда лучшая продукция на рынке! Пивной ассортимент - просто супер.' },
    { id: 4, name: 'Елена Смирнова', role: 'Директор кафе', text: 'Наладили сотрудничество в прошлом году, и с тех пор ни разу не пожалели. Надежный партнер с отличным сервисом.' },
    { id: 5, name: 'Алексей Попов', role: 'Владелец магазина', text: 'Высокое качество продукции и отличный клиентский сервис. Всем рекомендую данную компанию!' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const showPreviousReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const showNextReview = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  // Расчет индексов видимых отзывов для слайдера
  const visibleReviews = () => {
    let result = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % reviews.length;
      result.push(reviews[index]);
    }
    return result;
  };

  return (
    <section id="reviews" className="py-20 common-bg-section">
      <div className="max-w-7xl mx-auto px-4 text-center text-white">
        <h2 className="text-4xl font-russo mb-8">Что говорят наши клиенты</h2>
        
        <div className="relative">
          <div className="overflow-hidden py-6">
            <div 
              className="flex gap-5 px-12 transition-transform duration-300 ease-in-out"
            >
              {visibleReviews().map((review) => (
                <div 
                  key={review.id} 
                  className="bg-gray-900 border border-gray-800 rounded-lg p-6 shadow-lg flex-1 min-w-[300px] max-w-md transform transition-all duration-300 hover:shadow-blue-900/10 hover:shadow-lg"
                >
                  <FaQuoteLeft className="text-blue-500 opacity-30 text-4xl mb-4" />
                  <p className="text-lg font-montserrat italic mb-6">"{review.text}"</p>
                  <div className="mt-auto">
                    <div className="font-semibold text-white font-montserrat">{review.name}</div>
                    <div className="text-gray-400 text-sm font-montserrat">{review.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Индикаторы и кнопки навигации размещены в одной строке */}
          <div className="flex justify-center items-center mt-6 space-x-4">
            <button 
              onClick={showPreviousReview} 
              className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full shadow-lg transition-all duration-300"
              aria-label="Предыдущий отзыв"
            >
              <FaArrowLeft />
            </button>
            
            {/* Индикаторы */}
            <div className="flex space-x-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-blue-600 w-6' : 'bg-gray-600'
                  }`}
                  aria-label={`Перейти к отзыву ${index + 1}`}
                ></button>
              ))}
            </div>
            
            <button 
              onClick={showNextReview}
              className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full shadow-lg transition-all duration-300"
              aria-label="Следующий отзыв"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}