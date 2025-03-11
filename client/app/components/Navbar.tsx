'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Перенаправляем на страницу продуктов с параметром поиска
    router.push(`/products?search=${encodeURIComponent(query)}`);
  };

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem',
      backgroundColor: '#1e1e1e'
    }}>
      <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
        <Link href="/">VOSTOK TRADE COMPANY</Link>
      </div>
      <form onSubmit={handleSearch} style={{ flexGrow: 1, marginLeft: '1rem', marginRight: '1rem' }}>
        <input
          type="text"
          placeholder="Поиск товаров..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            width: '100%',
            padding: '0.5rem',
            borderRadius: '0.5rem',
            border: 'none'
          }}
        />
      </form>
      <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none' }}>
        <li>
          <Link href="/">Главная</Link>
        </li>
        <li>
          <Link href="/products">Продукция</Link>
        </li>
        <li>
          <Link href="/about">О нас</Link>
        </li>
        <li>
          <Link href="/contact">Контакты</Link>
        </li>
      </ul>
    </nav>
  );
}
