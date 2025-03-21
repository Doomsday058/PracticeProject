// app/account/page.tsx
'use client';
import { useEffect } from 'react';
import { useUser } from '../components/UserContext';

export default function AccountPage() {
  const { user, logout } = useUser();
  
  useEffect(() => {
    if (!user) {
      window.location.href = '/login';
    }
  }, [user]);
  
  if (!user) return null;
  
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-russo mb-4">Личный кабинет</h1>
      <p className="mb-2">Компания: {user.companyName}</p>
      <p className="mb-2">Email: {user.email}</p>
      <p className="mb-2">ИНН: {user.inn}</p>
      <button onClick={logout} className="mt-4 py-2 px-4 bg-red-600 hover:bg-red-700 rounded">
        Выйти
      </button>
    </div>
  );
}
