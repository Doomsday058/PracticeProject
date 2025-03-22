//app/components/ProductsSection

'use client';
import BlueProductCard from './ProductCard';

// Обновленные данные о продуктах
const products = [
  { 
    _id: "1", 
    title: "Павлодарское светлое", 
    image: "/beer.jpg", 
    description: "Светлое нефильтрованное пиво с нотами свежего хлеба и лайма",
    details: "Алкоголь: 4.5%. Плотность: 11%. Состав: вода, солод ячменный светлый, хмель, дрожжи пивные. Срок годности: 180 дней при температуре от +2 до +25°C."
  },
  { 
    _id: "2", 
    title: "Kral Апельсин", 
    image: "/juice.jpg", 
    description: "Освежающий сок прямого отжима",
    details: "Без добавления сахара. Состав: концентрированный сок апельсина, вода, витамин C. Пищевая ценность на 100 мл: углеводы - 11.5г, белки - 0.5г, жиры - 0г. Энергетическая ценность: 48 ккал/201 кДж."
  },
  { 
    _id: "3", 
    title: "Sprint", 
    image: "/lemonade.jpg", 
    description: "Газировка с натуральным соком лайма и мятным послевкусием",
    details: "Состав: очищенная вода, сахар, натуральный сок лайма (3%), экстракт мяты, лимонная кислота, диоксид углерода. Содержание сахара: 8г/100мл."
  },
  { 
    _id: "4", 
    title: "Квас Жана-Роса", 
    image: "/kvas.jpg", 
    description: "Тёмный хлебный квас двойного брожения с хрустящей пенкой",
    details: "Живой продукт. Состав: вода, ржаной и ячменный солод, сахар, хлебопекарные дрожжи. Содержание алкоголя не более 1.2%. Срок годности: 7 дней при температуре от +2 до +6°C."
  },
  { 
    _id: "5", 
    title: "Минеральная вода", 
    image: "/mineralka.jpg", 
    description: "Лечебно-столовая вода с магнием и кремнием из артезианских скважин",
    details: "Минерализация: 4.5-5.5 г/л. Основной состав: гидрокарбонаты (HCO3-) - 3500-4000 мг/л, сульфаты (SO4--) - 800-1200 мг/л, кальций (Ca++) - 100-150 мг/л, магний (Mg++) - 50-100 мг/л."
  },
  { 
    _id: "6", 
    title: "Тархун Жана-Роса", 
    image: "/tarxyn.jpg", 
    description: "Легендарная газировка на экстракте эстрагона с лёгкой терпкостью",
    details: "Состав: очищенная артезианская вода, сахар, натуральный экстракт эстрагона, лимонная кислота, натуральные ароматизаторы, диоксид углерода. Энергетическая ценность: 42 ккал/100мл."
  },
];

export default function ProductsSection() {
  return (
    <section id="products" className="py-16 common-bg-section">
      <div className="max-w-7xl mx-auto px-4 text-white">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-russo mb-4">Наша продукция</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto font-montserrat">
            Предлагаем широкий ассортимент высококачественных напитков для оптовых закупок. Каждый продукт тщательно отобран для наших клиентов.
          </p>
        </div>
        
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {products.map(product => (
            <BlueProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}