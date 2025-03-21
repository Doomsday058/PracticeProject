//app/components/ProductDetailModal
'use client';
import { useState } from 'react';
import Modal from './Modal';
import { useUser } from './UserContext';
import AuthModal from './AuthModal';

type Product = {
  _id: string;
  title: string;
  description: string;
  image: string;
  price?: number;
  details?: string;
};

type ProductDetailModalProps = {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
};

export default function ProductDetailModal({ isOpen, onClose, product }: ProductDetailModalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const { user } = useUser();

  const handleRequestPrice = async () => {
    if (!user) {
      setShowAuthModal(true);
      return;
    }

    setIsLoading(true);
    setSuccess(false);
    
    try {
      const response = await fetch('/api/request-price', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      
      if (!response.ok) throw new Error('Request failed');
      setSuccess(true);
    } catch (error) {
      console.error('Error requesting price:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} title={product.title}>
        <div className="space-y-6">
          <div className="relative overflow-hidden rounded-lg">
            <img 
              src={product.image} 
              alt={product.title} 
              className="w-full h-48 object-cover"
            />
          </div>
          
          <div>
            <h3 className="text-xl font-russo mb-2 text-indigo-400">{product.title}</h3>
            <p className="text-gray-300 mb-4">{product.description}</p>
            
            {product.details && (
              <div className="mt-4">
                <h4 className="text-lg font-semibold mb-2 text-white">Характеристики</h4>
                <p className="text-gray-300">{product.details}</p>
              </div>
            )}
          </div>
          
          {success ? (
            <div className="bg-green-900/50 border border-green-700 text-white p-4 rounded">
              <p className="font-semibold">Прайс-лист отправлен на вашу почту!</p>
              <p className="mt-2 text-sm">Проверьте ваш почтовый ящик.</p>
            </div>
          ) : (
            <div className="flex flex-col space-y-4">
              <p className="text-white">
                {user ? 
                  'Запросите актуальный прайс-лист с оптовыми ценами:' : 
                  'Войдите или зарегистрируйтесь, чтобы запросить прайс-лист:'
                }
              </p>
              
              <button
                onClick={handleRequestPrice}
                disabled={isLoading}
                className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 rounded-md transition-colors duration-300 text-white font-semibold disabled:opacity-70"
              >
                {isLoading ? 'Отправка...' : 'Получить прайс-лист'}
              </button>
              
              {!user && (
                <button
                  onClick={() => setShowAuthModal(true)}
                  className="w-full py-3 bg-gray-700 hover:bg-gray-600 rounded-md transition-colors duration-300 text-white font-semibold"
                >
                  Вход / Регистрация
                </button>
              )}
            </div>
          )}
        </div>
      </Modal>
      
      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </>
  );
}