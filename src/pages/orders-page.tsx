import {Box, Grid, Typography} from '@mui/material';


function OrdersPage() {
    // const [orders] = useState<Order[]>([]);

    return (
        <Box>
            <Typography variant="h4" gutterBottom>Заказы</Typography>
            <Grid container spacing={2}>
                {/*{orders.map((order) => (*/}
                {/*    <Grid item xs={12} key={order.id}>*/}
                {/*        <OrderCard order={order}/>*/}
                {/*    </Grid>*/}
                {/*))}*/}
            </Grid>
        </Box>
    );
}

export default OrdersPage;
