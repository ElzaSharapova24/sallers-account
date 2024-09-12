import {Box, Card, CardContent, Grid, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {Order} from "../utils/types.ts";
import {getOrderById} from "../utils/api.ts";
import {Link as RouterLink, useParams} from "react-router-dom";
import BackButton from "../components/back-button/back-button.tsx";

function OrderDetailPage() {
    const {orderId} = useParams<{ orderId: string }>(); // Извлекаем orderId из параметров маршрута
    const [order, setOrder] = useState<Order | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchOrderDetails = async () => {
            try {
                const fetchedOrder = await getOrderById(orderId);
                setOrder(fetchedOrder);
            } catch (error) {
                setError((error as Error).message); // Обработка ошибки
            }
        };

        fetchOrderDetails();
    }, [orderId]);

    if (error) {
        return <Typography variant="h6" color="error">Ошибка: {error}</Typography>;
    }

    if (!order) {
        return <Typography variant="h6">Загрузка...</Typography>;
    }

    return (
        <Box sx={{p: 4}}>
            <BackButton/>
            <Typography variant="h4" gutterBottom mt={1}>
                Детали заказа #{order?.id}
            </Typography>
            <Typography variant="body1">Статус: {order?.status}</Typography>
            <Typography variant="body1">Создан: {new Date(order?.createdAt).toLocaleDateString()}</Typography>
            <Typography variant="body1">Всего товаров: {order?.items.length}</Typography>
            <Typography variant="body1">Итоговая стоимость: {order?.total} ₽</Typography>

            <Typography variant="h5" sx={{mt: 3, mb: 2}}>
                Товары в заказе:
            </Typography>
            <Grid container spacing={2}>
                {order?.items.map((item) => ( // Используем order.items
                    <Grid item xs={12} sm={6} md={6} key={item.id}>
                        <Card sx={{boxShadow: '-1px 0px 10px 4px rgba(0,0,0,0.74)'}}>
                            <CardContent sx={{height: '200px', display: 'flex', flexDirection: 'column',}}>
                                <Typography variant="h6">{item.name}</Typography>
                                <Typography variant="body2">Цена: {item.price} ₽</Typography>
                                <Typography variant="body2">Осталось: {item.count} ₽</Typography>
                                <Box mt={'auto'}>
                                    <RouterLink to={`/advertisements/${item.id}`}
                                                style={{textDecoration: 'none', color: 'inherit'}}>
                                        <Typography variant="body2" color="primary">
                                            Перейти к объявлению
                                        </Typography>
                                    </RouterLink>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default OrderDetailPage;
