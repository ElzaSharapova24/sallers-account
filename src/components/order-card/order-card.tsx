
import { Card, CardContent,  Button } from '@mui/material';


function OrderCard() {
    return (
        <Card>
            <CardContent>
                {/*<Typography variant="h5">Заказ #{order.id}</Typography>*/}
                {/*<Typography variant="body2">Дата: {order.createdAt}</Typography>*/}
                {/*/!*<Typography variant="body2">Статус: {order.status}</Typography>*!/*/}
                {/*<Typography variant="body2">Количество товаров: {order.items}</Typography>*/}
                {/*<Typography variant="body2">Сумма: {order.total}</Typography>*/}
                {/*<Typography variant="body2">Сумма: {order. deliveryWay}</Typography>*/}
                <Button variant="contained">Показать все товары</Button>
            </CardContent>
        </Card>
    );
};

export default OrderCard;
