// Return the dollar amount that a product is taxed at
const GROCERIES = "groceries";
const TAX_RATES = {
    groceries: 3,
    standard: 4.75,
}

export const calculateTax = (price: number, category: string): number => {
    if (category === GROCERIES) {
        return price * (TAX_RATES.groceries / 100);
    }
    return price * (TAX_RATES.standard / 100);
}