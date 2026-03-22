// Return a dollar amount that a product is discounted by
const calculateDiscount = (price:number, discountPercentage: number): number => {
    return price * (discountPercentage / 100);
}