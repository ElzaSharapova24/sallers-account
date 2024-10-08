import {Advertisement} from "./types.ts";

const BaseUrl = 'http://localhost:3000';

// Получение всех объявлений с опциональной пагинацией, сортировкой и фильтрацией
export const getAdvertisements = async (
    start: number = 0,
    limit: number = 12,
    sortBy: string = 'price',
    filterLikes: number = 0,
    filterViews: number = 0 // Добавляем новый параметр для фильтрации по просмотрам
): Promise<{ advertisements: Advertisement[] }> => {
    try {
        const response = await fetch(`${BaseUrl}/advertisements?_start=${start}&_limit=${limit}&_sort=${sortBy}&likes_gte=${filterLikes}&views_gte=${filterViews}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const advertisements = await response.json();
        return {advertisements};
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Could not fetch Advertisements');
    }
};


// Получение конкретного объявления по ID
export const getAdvertisementById = async (id: string | undefined) => {
    try {
        const response = await fetch(`${BaseUrl}/advertisements/${id}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Could not fetch Advertisement');
    }
};

// Создание нового объявления
export const createAdvertisement = async (data: Partial<Advertisement>): Promise<Advertisement> => {
    try {
        const response = await fetch(`${BaseUrl}/advertisements`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Could not create Advertisement');
    }
};

// Изменение объявления по ID (PUT)
export const updateAdvertisement = async (id: string | undefined, data: Partial<Advertisement>) => {
    try {
        const response = await fetch(`${BaseUrl}/advertisements/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Could not update Advertisement');
    }
};

// Частичное изменение объявления (PATCH)
export const patchAdvertisement = async (id: string | undefined, data: Advertisement[]) => {
    try {
        const response = await fetch(`${BaseUrl}/advertisements/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Could not patch Advertisement');
    }
};

// Удаление объявления по ID
export const deleteAdvertisement = async (id: string | undefined) => {
    try {
        const response = await fetch(`${BaseUrl}/advertisements/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Could not delete Advertisement');
    }
};

// Получение всех заказов
export const getOrders = async (statusFilter = '') => {
    try {
        const statusQuery = statusFilter !== '' ? `&status=${statusFilter}` : '';
        const response = await fetch(`${BaseUrl}/orders?${statusQuery}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching orders:', error);
        throw new Error('Could not fetch Orders');
    }
};


// Получение конкретного заказа по ID
export const getOrderById = async (id: string | undefined) => {
    try {
        const response = await fetch(`${BaseUrl}/orders/${id}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Could not fetch Order');
    }
};


