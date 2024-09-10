import {Card, CardContent, CardMedia, Grid, Typography} from '@mui/material';
import {Product} from "../../utils/types.ts";


interface ProductCardProps {
    products?: Product[]
}

function ProductCard({products}: ProductCardProps) {
    // const navigate = useNavigate();
    //
    // const handleViewProduct = () => {
    //     navigate(`/product/${product.id}`);
    // };

    return (
        <Grid container spacing={2}>

            {
                products?.map((product) => (
                    <> <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="140"
                                image={product.image}
                                alt={product.title}/>
                            <CardContent key={product.id}>
                                <Typography variant="h5">{product.title}</Typography>
                                <Typography variant="body2">Цена: {product.price}</Typography>
                                {/*<Typography variant="body2">Просмотры: {product.views}</Typography>*/}
                                <Typography variant="body2">Лайки: {product.likes}</Typography>
                                {/*<Button variant="contained" onClick={handleViewProduct}>*/}
                                {/*    Посмотреть*/}
                                {/*</Button>*/}
                            </CardContent>
                        </Card>
                    </Grid>
                    </>
                ))
            }
        </Grid>
    );
}

export default ProductCard;
