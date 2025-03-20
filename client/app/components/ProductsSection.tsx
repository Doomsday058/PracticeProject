// app/components/ProductsSection.tsx
import ProductCard from './ProductCard';

const products = [
  { id: 1, title: "Павлодарское светлое", image: "/beer.jpg", description: "Светлое нефильтрованное пиво с нотами свежего хлеба и лайма" },
  { id: 2, title: "Kral Апельсин", image: "/juice.jpg", description: "Освежающий сок прямого отжима" },
  { id: 3, title: "Sprint", image: "/lemonade.jpg", description: "Газировка с натуральным соком лайма и мятным послевкусием" },
  { id: 4, title: "Квас Жана-Роса", image: "/kvas.jpg", description: "Тёмный хлебный квас двойного брожения с хрустящей пенкой" },
  { id: 5, title: "Минеральная вода", image: "/mineralka.jpg", description: "Лечебно-столовая вода с магнием и кремнием из артезианских скважин" },
  { id: 6, title: "Тархун Жана-Роса", image: "/tarxyn.jpg", description: "Легендарная газировка на экстракте эстрагона с лёгкой терпкостью" },
];

export default function ProductsSection() {
  return (
    <section id="products" className="py-20 common-bg-section">
      <div className="max-w-7xl mx-auto px-4 text-white">
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
