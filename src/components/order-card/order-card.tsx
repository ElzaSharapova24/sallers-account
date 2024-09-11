import {Button, Card, CardContent, Grid, Typography} from '@mui/material';
import {Order} from "../../utils/types.ts";
import {Link as RouterLink} from "react-router-dom";
import BackButton from "../back-button/back-button.tsx";


interface OrderCardProps {
    orders?: Order[]
}

function OrderCard({orders}: OrderCardProps) {
    return (
        <>
            <BackButton/>
            <Grid container spacing={2} pt={1}>
                {orders?.map((order) => (
                    <Grid item xs={12} sm={6} md={4} key={order.id}>
                        <Card sx={{boxShadow: '-1px 0px 10px 4px rgba(0,0,0,0.74)'}}>
                            <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                <Typography variant="h5">Заказ #{order.id}</Typography>
                                <Typography variant="body2">Дата: {order.createdAt}</Typography>
                                <Typography variant="body2">Статус: {order.status}</Typography>
                                <Typography variant="body2">Количество товаров: {order.items.length}</Typography>
                                <Typography variant="body2">Сумма: {order.total}</Typography>
                                <Typography variant="body2">Сумма: {order.deliveryWay}</Typography>
                                <Button variant="contained" component={RouterLink} to={`/orders/${order.id}`}>
                                    Показать все товары
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
    );
}

export default OrderCard;
