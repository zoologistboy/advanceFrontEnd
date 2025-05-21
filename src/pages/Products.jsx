import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../contexts/AuthContext';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { user } = useContext(authContext);

  const fetchProducts = async () => {
    setIsLoading(true);
    setError(null);
    try {
      // const res = await fetch()
      const res = await fetch("https://fakestoreapi.com/products");
      if (!res.ok) {
        throw new Error("Can't fetch products");
      }
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (isLoading) return <p className="text-center text-xl font-semibold">Loading...</p>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <p className="text-lg font-semibold mb-4">Welcome, {user?.name || 'Guest'}!</p>
      {error && <p className="text-red-500 font-medium mb-4">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link
            to={`/products/${product.id}`}
            key={product.id}
            className="border rounded-lg p-4 hover:shadow-md transition"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-40 object-contain mb-4"
            />
            <h3 className="font-semibold text-md truncate">{product.title}</h3>
            <p className="text-indigo-600 font-bold">${product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
