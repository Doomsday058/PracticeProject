export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group bg-gray-800 rounded-lg shadow-2xl hover:shadow-indigo-500/20 overflow-hidden transform hover:scale-[1.02] transition-all duration-300 ease-out h-full flex flex-col">
      <div className="relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-xl font-russo mb-2 text-indigo-400">{product.title}</h3>
        <p className="text-gray-300 mb-4 flex-1">{product.description}</p>
        <a 
          href="#contact"
          className="mt-auto w-full py-2 bg-indigo-600/50 hover:bg-indigo-600 rounded-md transition-colors duration-300 text-center block"
        >
          Подробнее
        </a>
      </div>
    </div>
  );
}
