import { useEffect, useState } from "react";
 

const Products = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchProducts = async () => {
        try {
            setIsLoading(true);
            setError(null);
            const response = await fetch("https://fakestoreapi.com/products");
            
            if (!response.ok) throw new Error('Failed to fetch products');
            
            const data = await response.json();
            setProducts(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(()=>{
          fetchProducts()
    },[])

    return (
        <div>
            {/* ✅ Button that triggers fetchProducts */}
            {/* <button 
                onClick={fetchProducts}
                disabled={isLoading}
            >
                {isLoading ? "Loading..." : "Fetch Products"}
            </button> */}

            {/* Display error if any */}
            {error && <p style={{ color: "red" }}>{error}</p>}

            {/* Display products */}
            <div className="grid">
                {products.map((product) => (
                    <div  key={product.id}>
                        <h3>{product.title}</h3>
                        <p>${product.price}</p>
                        <img src={product.image} alt={product.title} width={100} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;