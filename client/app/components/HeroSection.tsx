// app/components/HeroSection.tsx
export default function HeroSection() {
    return (
      <section
        id="hero"
        className="h-screen bg-hero-pattern flex items-center justify-center relative"
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold font-russo mb-4">
            Добро пожаловать в VOSTOK TRADE COMPANY
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Оптовая продажа напитков: пиво, соки, лимонады и многое другое
          </p>
          <a
            href="#products"
            className="inline-block px-8 py-4 bg-indigo-600 hover:bg-indigo-700 transition-colors rounded-lg text-white text-lg font-semibold"
          >
            Наш ассортимент
          </a>
        </div>
      </section>
    );
  }
  