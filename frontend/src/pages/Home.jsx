import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Home = () => {
  const [Products, setProducts] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products");
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message);
        }

        setProducts(data.data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Products.map((product) => (
          <div key={product._id}>
            <div className="max-w-sm  overflow-hidden bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <img
                className="rounded-t-lg object-cover w-full h-64"
                src={product.image}
                alt={product.name}
              />

              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Name : {product.name}
                </h5>

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Price : {product.price}$
                </p>
              </div>
           

            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
