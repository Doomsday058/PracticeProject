'use client';

import { useState } from 'react';

export default function AddItemPage() {
  const [form, setForm] = useState({
    name: '',
    price: '',
    description: '',
    image: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const res = await fetch('http://localhost:3001/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          price: Number(form.price),
          description: form.description,
          image: form.image,
        }),
      });

      if (!res.ok) {
        throw new Error('Ошибка при добавлении товара');
      }
      setSuccess(true);
      setForm({ name: '', price: '', description: '', image: '' });
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section style={{ padding: '20px' }}>
      <h1>Добавить товар</h1>
      <form onSubmit={handleSubmit} style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        maxWidth: '400px'
      }}>
        <input
          type="text"
          name="name"
          placeholder="Название товара"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Цена"
          value={form.price}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Описание"
          value={form.description}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="image"
          placeholder="URL изображения"
          value={form.image}
          onChange={handleChange}
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Добавление...' : 'Добавить товар'}
        </button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>Товар успешно добавлен!</p>}
    </section>
  );
}
