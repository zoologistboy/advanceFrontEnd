import React, { createContext, useState } from 'react';

export const productContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await fetch('http://localhost:4003/api/product');
      if (!res.ok) throw new Error("Can't fetch data");

      const data = await res.json();
      console.log("Fetched data:", data);

      // Use this if the API returns { products: [...] }
      setProducts(data.products);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  return (
    <productContext.Provider value={{ products, fetchProducts }}>
      {children}
    </productContext.Provider>
  );
};

export default ProductProvider;
