interface Dimensions {
    length: number;
    width: number;
    height: number;
}

interface Review {
    rating: number;
    comment: string;
    date: Date;
    reviewerName: string;
    reviewerEmail: string;
}

interface Meta {
    createdAt: Date;
    updatedAt: Date;
    barcode: string;
    qrCode: string;
}

class Product {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    sku: string;
    weight: number;
    dimensions: Dimensions;
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: Review[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: Meta;
    thumbnail: string;
    images: string[];

    constructor(
        product: Product
    ) {
        this.id = product.id;
        this.title = product.title;
        this.description = product.description;
        this.category = product.category;
        this.price = product.price;
        this.discountPercentage = product.discountPercentage;
        this.rating = product.rating;
        this.stock = product.stock;
        this.tags = product.tags;
        this.brand = product.brand;
        this.sku = product.sku;
        this.weight = product.weight;
        this.dimensions = product.dimensions;
        this.warrantyInformation = product.warrantyInformation;
        this.shippingInformation = product.shippingInformation;
        this.availabilityStatus = product.availabilityStatus;
        this.reviews = product.reviews;
        this.returnPolicy = product.returnPolicy;
        this.minimumOrderQuantity = product.minimumOrderQuantity;
        this.meta = product.meta;
        this.thumbnail = product.thumbnail;
        this.images = product.images;
    }

    displayDetails(): Product {
        return this;
    }

    getPriceWithDiscount(): number {
        // Need to divide because discountPercentage is a percentage, not a decimal
        return this.price - (this.price * this.discountPercentage / 100); 
    }
}

export { Product };