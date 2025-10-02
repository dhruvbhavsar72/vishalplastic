export interface Product {
    id: string;
    productTitle: string;
    productImage: string;
}

export interface ProductDetail {
    productName: string;
    productCode: string;
    productSize: string;
    productColor: string;
    productUse: string;
    productMaterial: string;
    productImage: string;
}

export interface DB {
    products: Product[];
    productDetails: {
        [key: string]: ProductDetail[];
    };
}
