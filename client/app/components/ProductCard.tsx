// app/components/ProductCard.tsx
import Link from 'next/link'
import styles from './ProductCard.module.css'

type Product = {
  _id: string
  name: string
  price: number
  description?: string
  image?: string
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product._id}`} className={styles.cardLink}>
      <div className={styles.card}>
        <img
          src={product.image || '/placeholder.png'}
          alt={product.name}
          className={styles.cardImage}
        />
        <h3 className={styles.cardTitle}>{product.name}</h3>
        <p className={styles.cardPrice}>Цена: {product.price} руб.</p>
        <p className={styles.cardDescription}>{product.description}</p>
      </div>
    </Link>
  )
}
