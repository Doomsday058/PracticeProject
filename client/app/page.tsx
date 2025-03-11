// app/page.tsx
import Link from 'next/link'
import ProductCard from './components/ProductCard'
import styles from './page.module.css'

async function getProducts() {
  const res = await fetch('http://localhost:3001/api/products', {
    next: { revalidate: 60 }
  })
  if (!res.ok) {
    throw new Error('Не удалось загрузить список товаров')
  }
  return res.json()
}

export default async function HomePage() {
  const products = await getProducts()

  return (
    <>
      {/* Hero-секция */}
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>
          VOSTOK TRADE COMPANY
        </h1>
        <p className={styles.heroSubtitle}>
          Оптовая продажа высококачественных напитков
        </p>
        <Link href="/products" className={styles.heroButton}>
          Посмотреть продукцию
        </Link>
      </section>

      {/* Секция с карточками товаров */}
      <section className={styles.productsSection}>
        <h2 className={styles.productsTitle}>Наша продукция</h2>
        <div className={styles.productsGrid}>
          {products.map((product: any) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </section>
    </>
  )
}
