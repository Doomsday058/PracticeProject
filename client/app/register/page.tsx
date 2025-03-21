// app/register/page.tsx
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const [form, setForm] = useState({ companyName: '', email: '', password: '', inn: '' });
  const [error, setError] = useState('');
  const router = useRouter();
  
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    
    if (response.ok) {
      router.push('/account');
    } else {
      const data = await response.json();
      setError(data.message);
    }
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-russo text-white mb-6">Регистрация</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <label className="block text-white mb-2">Название компании</label>
          <input 
            name="companyName" 
            type="text" 
            value={form.companyName} 
            onChange={handleChange} 
            className="w-full p-2 rounded bg-gray-700 text-white" 
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block text-white mb-2">Email</label>
          <input 
            name="email" 
            type="email" 
            value={form.email} 
            onChange={handleChange} 
            className="w-full p-2 rounded bg-gray-700 text-white" 
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block text-white mb-2">ИНН</label>
          <input 
            name="inn" 
            type="text" 
            value={form.inn} 
            onChange={handleChange} 
            className="w-full p-2 rounded bg-gray-700 text-white" 
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block text-white mb-2">Пароль</label>
          <input 
            name="password" 
            type="password" 
            value={form.password} 
            onChange={handleChange} 
            className="w-full p-2 rounded bg-gray-700 text-white" 
            required 
          />
        </div>
        <button type="submit" className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 rounded transition-colors text-white">
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
}
