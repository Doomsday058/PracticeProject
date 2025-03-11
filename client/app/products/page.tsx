import ProductCard from '../components/ProductCard';

async function getProducts() {
  const res = await fetch('http://localhost:3001/api/products', { next: { revalidate: 60 } });
  if (!res.ok) {
    throw new Error('Не удалось загрузить список товаров');
  }
  return res.json();
}

export default async function HomePage() {
  const products = await getProducts();

  return (
    <section style={{ padding: '20px' }}>
      <h1>Добро пожаловать в VOSTOK TRADE COMPANY</h1>
      <p>Оптовая продажа высококачественных напитков</p>

      <div style={{ marginTop: '2rem' }}>
        <h2>Наша продукция</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {products.map((product: any) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
