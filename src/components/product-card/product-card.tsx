import {Box, Card, CardContent, CardMedia, Typography} from '@mui/material';
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
        <Card>
            {
                products?.map((product) => (
                    <>
                        <Box key={product.id}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={product.image}
                                alt={product.title}/>
                            <CardContent>
                                <Typography variant="h5">{product.title}</Typography>
                                <Typography variant="body2">Цена: {product.price}</Typography>
                                {/*<Typography variant="body2">Просмотры: {product.views}</Typography>*/}
                                <Typography variant="body2">Лайки: {product.likes}</Typography>
                                {/*<Button variant="contained" onClick={handleViewProduct}>*/}
                                {/*    Посмотреть*/}
                                {/*</Button>*/}
                            </CardContent>
                        </Box>
                    </>
                ))
            }
        </Card>
    );
}

export default ProductCard;
