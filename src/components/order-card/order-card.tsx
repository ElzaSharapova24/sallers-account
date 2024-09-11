import {Button, Card, CardContent, Grid, ListItemButton, Typography} from '@mui/material';
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
            <Grid container spacing={2}>
                {orders?.map((order) => (
                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                <Typography variant="h5">Заказ #{order.id}</Typography>
                                <Typography variant="body2">Дата: {order.createdAt}</Typography>
                                <Typography variant="body2">Статус: {order.status}</Typography>
                                {/*<Typography variant="body2">Количество товаров: {order.items}</Typography>*/}
                                <Typography variant="body2">Сумма: {order.total}</Typography>
                                <Typography variant="body2">Сумма: {order.deliveryWay}</Typography>
                                <ListItemButton component={RouterLink} to="/announcements">
                                    <Button variant="contained">Показать все товары</Button>
                                </ListItemButton>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
    );
}

export default OrderCard;
