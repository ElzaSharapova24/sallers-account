import {Box, Button, MenuItem, Select, Typography} from '@mui/material';
import {useEffect, useState} from "react";
import {getOrders} from "../utils/api";
import {Order, OrderStatus} from "../utils/types";
import OrderCard from "../components/order-card/order-card";

function OrdersPage() {
    const [orders, setOrders] = useState<Order[]>([]);
    const [statusFilter, setStatusFilter] = useState('');
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const data = await getOrders(statusFilter);
                setOrders(data);
            } catch (error) {
                console.error('Error fetching orders:', error);
            }
        };

        fetchOrders();
    }, [statusFilter]);

    // Сортировка на клиенте по полю total
    const sortedOrders = [...orders].sort((a, b) => {
        return sortOrder === 'asc' ? a.total - b.total : b.total - a.total;
    });

    return (
        <Box component="section">
            <Typography variant="h1" gutterBottom>Заказы</Typography>
            <Box sx={{display: 'flex', justifyContent: 'space-between'}} mb={1}>
                <Box>
                    <Typography component={'p'} gutterBottom>Сортировка по статусу</Typography>
                    <Select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
                        <MenuItem value="">Все</MenuItem>
                        <MenuItem value={OrderStatus.Created}>Создан</MenuItem>
                        <MenuItem value={OrderStatus.Paid}>Оплачен</MenuItem>
                        <MenuItem value={OrderStatus.Transport}>В пути</MenuItem>
                        <MenuItem value={OrderStatus.DeliveredToThePoint}>Доставлен в пункт</MenuItem>
                        <MenuItem value={OrderStatus.Received}>Получен</MenuItem>
                        <MenuItem value={OrderStatus.Archived}>Архивирован</MenuItem>
                        <MenuItem value={OrderStatus.Refund}>Возврат</MenuItem>
                    </Select>
                </Box>
                <Button onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}>
                    Сортировать по сумме ({sortOrder === 'asc' ? 'по возрастанию' : 'по убыванию'})
                </Button>
            </Box>
            <OrderCard orders={sortedOrders}/>
        </Box>
    );
}

export default OrdersPage;
