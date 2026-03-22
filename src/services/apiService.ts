import { Product } from '../models/Product.js';

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
        console.error('Error fetching products:', error instanceof Error ? error.message : error);
    }
}

const fetchGroceries = async (): Promise<Product[] | undefined> => {
    try {
        const response = await fetch(API_GROCERIES_URL);
        if (response.ok) {
            const data = await response.json() as DummyJsonProducts;
            const products: Product[] = data.products;
            return products;
    } 
    } catch (error) {
        console.error('Error fetching groceries:', error instanceof Error ? error.message : error);
    }
}



export const apiService = {
    fetchAllProducts, 
    fetchGroceries
};  