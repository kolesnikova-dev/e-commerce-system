import { apiService } from './services/apiService.js';
import { calculateTax, greenConsoleLog, capitalize } from './utils/index.js';
import { Product } from './models/Product.js';

type ProductWithTax =  { product: Product; tax: number };
let productsWithTax: ProductWithTax[] = [];
let readyToDisplay: boolean = false;

try {
    const products = await apiService.fetchAllProducts();
    if (products) {
        products.map((product: Product) => {
            const tax = calculateTax(product.price, product.category);
            const productItem = new Product(product);
            const productItemWithTax: ProductWithTax = { product: productItem, tax };
            productsWithTax.push(productItemWithTax);
            productsWithTax.length === products.length ? readyToDisplay = true : false;
        });
}
} catch (error) {
    console.error('Error fetching products:', error);
}

if (readyToDisplay) {
    greenConsoleLog('================================================');
    greenConsoleLog('==============  Products with Tax  ==============');
    greenConsoleLog('================================================');
        console.table(productsWithTax.map(p => ({
        "Title": p.product.title,
        "Category": capitalize(p.product.category),
        "Tax": p.tax
    })));
}

