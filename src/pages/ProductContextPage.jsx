import React, { useContext, useEffect } from 'react';
import { productContext } from '../contexts/Productcontext';

const ProductContextPage = () => {
  const { fetchProducts, products } = useContext(productContext);

  useEffect(() => {
    console.log("Calling fetchProducts...");
    fetchProducts();
  }, []);

  return (
    <div>
      {Array.isArray(products) && products.length > 0 ? (
        products.map((product) => (
          <div key={product._id}>
            <p>{product._id}</p>
            <p>{product.name}</p>
          </div>
        ))
      ) : (
        <p>Loading or no products available.</p>
      )}
    </div>
  );
};

export default ProductContextPage;
