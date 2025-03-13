// app/components/ProductsSection.tsx
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    title: "Пиво Светлое",
    image: "/beer.jpg",
    description: "Качественное светлое пиво",
  },
  {
    id: 2,
    title: "Сок Апельсиновый",
    image: "/orange-juice.jpg",
    description: "Натуральный апельсиновый сок",
  },
  {
    id: 3,
    title: "Лимонад",
    image: "/lemonade.jpg",
    description: "Освежающий лимонад",
  },
];

export default function ProductsSection() {
  return (
    <section id="products" className="py-20 bg-gray-700">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-russo text-center mb-12">Наша продукция</h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
