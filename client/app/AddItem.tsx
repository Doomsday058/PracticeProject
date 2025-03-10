'use client';

import { useState } from 'react';

export default function AddItem() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/items', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name })
      });

      if (res.ok) {
        const data = await res.json();
        setMessage(`Элемент добавлен: ${data.name}`);
        setName('');
      } else {
        setMessage('Ошибка при добавлении элемента');
      }
    } catch (err) {
      console.error(err);
      setMessage('Ошибка: ' + err.message);
    }
  };

  return (
    <div>
      <h2>Добавить элемент</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Название элемента"
          required
        />
        <button type="submit">Добавить</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
