// app/components/AboutSection.tsx
export default function AboutSection() {
    return (
      <section id="about" className="py-20 bg-gray-800">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <img src="/about.jpg" alt="О компании" className="rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0">
            <h2 className="text-3xl font-russo mb-4">О компании</h2>
            <p className="text-lg leading-relaxed">
              VOSTOK TRADE COMPANY – ваш надежный партнер в оптовой торговле напитками.
              Мы предлагаем широкий ассортимент продукции высокого качества. Наша цель – обеспечить
              наших клиентов лучшими условиями сотрудничества и быстрой доставкой.
            </p>
          </div>
        </div>
      </section>
    );
  }
  