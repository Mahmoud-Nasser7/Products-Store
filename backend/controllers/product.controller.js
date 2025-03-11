import Product from "../models/product.model.js";

export const addProduct = async (req, res) => {
  const { name, image, price } = req.body;
  if (!name || !image || !price) {
    return res.status(400).json({
      status: "fail",
      data: { message: "All fields are required: name, image, and price." },
    });
  }
  const newProduct = new Product({ name, image, price });

  try {
    await newProduct.save();
    return res.status(201).json({
      status: "success",
      data: newProduct,
    });
  } catch (err) {
    return res.status(500).json({
      status: "error",
      message: "An error occurred while saving the product.",
      data: null,
    });
  }
};
export const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({
        status: "fail",
        data: { message: "Product not found." },
      });
    }
    return res.status(200).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    return res.status(500).json({
      status: "error",
      message: "An error occurred while deleting the product.",
      data: null,
    });
  }
};
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    return res.status(200).json({
      status: "success",
      data: products,
    });
  } catch (err) {
    return res.status(500).json({
      status: "error",
      message: "An error occurred while fetching the products.",
      data: null,
    });
  }
};
export const getSingleProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({
        status: "fail",
        data: { message: "Product not found." },
      });
    }
    return res.status(200).json({
      status: "success",
      data: product,
    });
  } catch (err) {
    return res.status(500).json({
      status: "error",
      message: "An error occurred while fetching the products.",
      data: null,
    });
  }
};
 export const updateProduct = async (req, res) => {
    if (!req.body) {
        return res.status(400).json({
            status: "fail",
            data: { message: "Data to update can not be empty." },
        })};
    
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!updatedProduct) {
            return res.status(404).json({
                status: "fail",
                data: { message: "Product not found." },
            });
        }
        return res.status(200).json({
            status: "success",
            data: updatedProduct,
        });
    }
    catch (err) {
        return res.status(500).json({
            status: "error",
            message: "An error occurred while updating the product.",
            data: null,
        });
    }
}
