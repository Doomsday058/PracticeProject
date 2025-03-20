// app/components/ReviewsSection.tsx
export default function ReviewsSection() {
  const reviews = [
    { id: 1, name: 'Иван Иванов', role: 'Менеджер по продажам', text: 'Отличный сервис и большой выбор продукции! Работать с VOSTOK TRADE COMPANY - одно удовольствие.', image: '/images/review1.jpg' },
    { id: 2, name: 'Мария Петрова', role: 'Закупщик', text: 'Очень довольны качеством напитков. Все всегда вовремя, с хорошими ценами. Рекомендуем!', image: '/images/review2.jpg' },
    { id: 3, name: 'Дмитрий Сидоров', role: 'Клиент', text: 'Всегда лучшая продукция на рынке! Пивной ассортимент - просто супер.', image: '/images/review3.jpg' },
  ];

  return (
    <section id="reviews" className="py-20 common-bg-section">
      <div className="max-w-7xl mx-auto px-4 text-center text-white">
        <h2 className="text-4xl font-russo mb-12">Что говорят наши клиенты</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-gray-700/60 backdrop-blur-sm text-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 hover:border-indigo-400 border border-transparent">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-indigo-600 flex items-center justify-center text-2xl font-bold">
                  {review.name[0]}
                </div>
              </div>
              <p className="text-lg italic mb-4">"{review.text}"</p>
              <div className="font-semibold text-indigo-300">{review.name}</div>
              <div className="text-gray-400 text-sm">{review.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}