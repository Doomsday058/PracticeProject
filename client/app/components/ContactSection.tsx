// app/components/ContactSection.tsx
'use client';

import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь можно добавить логику отправки данных на сервер или использовать сторонний сервис
    console.log(formData);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-russo text-center mb-8">Свяжитесь с нами</h2>
        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="mb-4">
              <h3 className="text-xl font-semibold">Телефон</h3>
              <p>
                <a href="tel:+1234567890" className="text-indigo-400 hover:text-indigo-500">
                  +1 (234) 567-890
                </a>
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold">Email</h3>
              <p>
                <a href="mailto:info@vostoktrade.com" className="text-indigo-400 hover:text-indigo-500">
                  info@vostoktrade.com
                </a>
              </p>
            </div>
          </div>
          <div className="md:w-1/2">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Ваш email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Ваше сообщение"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    rows={4}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 transition-colors rounded-lg text-white font-semibold">
                  Отправить
                </button>
              </form>
            ) : (
              <div className="text-center text-xl text-green-400">
                Спасибо за обращение! Мы свяжемся с вами в ближайшее время.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
