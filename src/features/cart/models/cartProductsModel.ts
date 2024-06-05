export interface CartProductsModel {
    id: number;
    title: string;
    price: number;
    quantity: number;
    total: number;
    discountPercent: number;
    discountedTotal: number;
    thumbnail: string;
}