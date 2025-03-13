// app/components/ProductCard.tsx
type Product = {
    id: number;
    title: string;
    image: string;
    description: string;
  };
  
  export default function ProductCard({ product }: { product: Product }) {
    return (
      <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform">
        <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-russo mb-2">{product.title}</h3>
          <p className="text-gray-300">{product.description}</p>
        </div>
      </div>
    );
  }
  