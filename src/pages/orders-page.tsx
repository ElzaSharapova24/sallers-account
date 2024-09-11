import {Box, Typography} from '@mui/material';
import {useEffect, useState} from "react";
import {getOrders} from "../utils/api.ts";
import {Order} from "../utils/types.ts";
import OrderCard from "../components/order-card/order-card.tsx";


function OrdersPage() {
    const [orders, setOrders] = useState<Order[]>([]);

    useEffect(() => {
        getOrders().then((orders: Order[]) => setOrders(orders));
    }, []);

    return (
        <Box>
            <Typography variant="h4" gutterBottom>Заказы</Typography>
            <OrderCard orders={orders}/>
        </Box>
    );
}

export default OrdersPage;
