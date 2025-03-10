'use client';

import Head from 'next/head';
import { useEffect, useState } from 'react';
import AddItem from './AddItem'; // если AddItem находится в той же директории

export default function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_URL + '/api/items')
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error('Error fetching items:', err));
  }, []);

  return (
    <div>
      <Head>
        <title>My App</title>
      </Head>
      <h1>Добро пожаловать в My App!</h1>
      <p>Ниже список элементов из базы данных (если есть):</p>
      <ul>
        {items.map((item) => (
          <li key={item._id}>{item.name}</li>
        ))}
      </ul>
      <hr />
      <AddItem />
    </div>
  );
}
