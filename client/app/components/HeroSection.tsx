// app/components/HeroSection.tsx
'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function HeroSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section
      id="hero"
      className="h-screen common-bg-section flex items-center justify-center"
    >
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold font-russo mb-4" data-aos="fade-down">
          Добро пожаловать в VOSTOK TRADE COMPANY
        </h1>
        <p className="text-xl md:text-2xl mb-8" data-aos="fade-up">
          Не просто поставщик — ваш партнер по росту
        </p>
        <a
          href="#products"
          className="inline-block px-8 py-4 bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 rounded-lg text-white text-lg font-semibold transform hover:scale-105"
          data-aos="zoom-in"
        >
          Наш ассортимент
        </a>
      </div>
    </section>
  );
}
