import { useApi } from './api';

export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
}

interface ProductsResponse {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
}

export const useProducts = () => {
    const { get } = useApi();

    const getProducts = async () => {
        return await get<ProductsResponse>('/products');
    };

    const getProductDetails = async (id: number) => {
        return await get<Product>(`/products/${id}`);
    };

    return { getProducts, getProductDetails };
};