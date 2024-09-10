import {Product} from "./types.ts";

const BaseUrl = 'https://fakestoreapi.com';

export const getProducts = async (): Promise<Product[]> => {
    try {
        const response = await fetch(`${BaseUrl}/products`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data: Product[] = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching countries:', error);
        throw new Error('Could not fetch countries');
    }
};
