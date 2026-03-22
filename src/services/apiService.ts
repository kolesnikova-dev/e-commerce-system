import { Product } from '../models/Product.js';
import { errorHandler as E } from '../utils/errorHandler.js';

const API_BASE_URL = 'https://dummyjson.com/products';
const API_GROCERIES_URL = 'https://dummyjson.com/products/category/groceries';

type DummyJsonProducts = {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
}

const fetchAllProducts = async (): Promise<Product[] | undefined> => {
    try {
        const response = await fetch(API_BASE_URL);
        if (response.ok) {
            const data = await response.json() as DummyJsonProducts;
            const products: Product[] = data.products;
            return products;
    } 
    } catch (error) {
        if (error instanceof TypeError) {
            throw new E.NetworkError('Network error occurred while fetching products.');
        } else {
            throw new E.UnknownError('An unknown error occurred while fetching products.');
        }
    }
}


export const apiService = {
    fetchAllProducts,
};  