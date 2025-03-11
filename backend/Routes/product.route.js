import express from 'express';
import { addProduct, deleteProduct, getProducts, getSingleProduct, updateProduct } from '../controllers/product.controller.js';

const router = express.Router();

router.post('/products',addProduct);
router.delete('/products/:id',deleteProduct);
router.get('/products',getProducts);
router.get('/products/:id',getSingleProduct);
router.put('/products/:id',updateProduct);

export default router;