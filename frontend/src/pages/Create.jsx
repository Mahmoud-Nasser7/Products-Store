import { useState } from "react";

const Create = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("")
  const handleInputChange = (e) => {
    setNewProduct({...newProduct, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      });
      if (!response.ok) {
        throw new Error("Server error");

      }
      const data = await response.json();      
      if (data.status === "success") {
        setNewProduct({
          name: "",
          price: "",
          image: "",
        });

        setSuccess("Product created successfully!");
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError("Error creating product. Please try again later.");
    }
  };
  return (
    <div className="flex flex-col h-screen items-center g-5">
      <h1 className="text-2xl mb-5 uppercase font-bold text-gray-900 dark:text-white">
        Create Product
      </h1>
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Product Name
          </label>
          <input 
          onChange = {handleInputChange}
            type="text"
            value={newProduct.name}
            id="name"
            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="price"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Product Price
          </label>
          <input 
          onChange = {handleInputChange}
            type="number"
            value={newProduct.price}
            id="price"
            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="image"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Image URL
          </label>
          <input 
          onChange = {handleInputChange}
            type="text"
            value={newProduct.image}
            id="image"
            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
            required
          />
        </div>

        <button
          type="submit"
          className="text-white mb-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add Product
        </button>
        {error && <p className="text-red-500 font-bold">{error}</p>}
        {success && <p className="text-green-500 font-bold">{success
        }</p>}
      </form>
    </div>
  );
};

export default Create;
