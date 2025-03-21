// components/PriceRequestForm.tsx
'use client'
import { useState } from 'react'
import { useUser } from './UserContext'

export default function PriceRequestForm() {
  const [isLoading, setIsLoading] = useState(false)
  const { user } = useUser()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    try {
      const response = await fetch('/api/request-price', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      })
      
      if (!response.ok) throw new Error('Request failed')
      alert('Прайс-лист отправлен на вашу почту')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-md mx-auto bg-gray-800 p-6 rounded-lg">
      <h3 className="text-xl font-russo mb-4">Получить оптовый прайс</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Компания</label>
          <input 
            type="text" 
            value={user?.companyName}
            disabled
            className="w-full bg-gray-700 rounded p-2"
          />
        </div>
        <button 
          type="submit"
          disabled={isLoading}
          className="w-full bg-indigo-600 hover:bg-indigo-700 py-2 rounded transition-colors"
        >
          {isLoading ? 'Отправка...' : 'Получить прайс'}
        </button>
      </form>
    </div>
  )
}