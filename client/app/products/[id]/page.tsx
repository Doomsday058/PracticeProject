import { notFound } from 'next/navigation';

type Product = {
  _id: string;
  name: string;
  price: number;
  description?: string;
  image?: string;
};

async function getProduct(id: string): Promise<Product> {
  const res = await fetch(`http://localhost:3001/api/products/${id}`);
  if (!res.ok) {
    throw new Error('Не удалось загрузить товар');
  }
  return res.json();
}

export default async function ProductDetailPage({ params }: { params: { id: string } }) {
  let product: Product;
  try {
    product = await getProduct(params.id);
  } catch (error) {
    return notFound();
  }
  
  return (
    <section style={{ padding: '20px' }}>
      <h1>{product.name}</h1>
      <img
        src={product.image || '/placeholder.png'}
        alt={product.name}
        style={{ width: '300px', borderRadius: '0.5rem' }}
      />
      <p style={{ marginTop: '1rem' }}>Цена: {product.price} руб.</p>
      <p>{product.description}</p>
    </section>
  );
}
