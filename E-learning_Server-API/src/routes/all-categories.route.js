import express from 'express';
import { getAllCategories } from '../controllers/categories.controller.js';

const categoryRoute = express.Router();
categoryRoute.get('/', getAllCategories);

export default categoryRoute;