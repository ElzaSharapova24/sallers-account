import {Box, Button, Card, CardContent, CardMedia, Grid, Typography} from '@mui/material';
import {Advertisement} from "../../utils/types.ts";
import {Link as RouterLink, useNavigate} from "react-router-dom";

interface AdvertisementsCardProps {
    advertisements?: Advertisement[],
}

function AdvertisementCard({advertisements,}: AdvertisementsCardProps) {
    const navigate = useNavigate();

    const handleViewProduct = (advertisementId: string) => {
        navigate(`/advertisements/${advertisementId}`);
    };


    return (
        <Grid container spacing={2} pt={'20px'}>
            {
                advertisements?.map((advertisement) => (
                    <Grid item xs={12} sm={6} md={4} key={advertisement.id}>
                        <RouterLink to={`/advertisements/${advertisement.id}`}
                                    style={{textDecoration: 'none', color: 'inherit'}}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={advertisement.imageUrl}
                                    alt={advertisement.name}
                                />
                                <CardContent sx={{
                                    minHeight: '150px',
                                    height: '200px',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}>
                                    <Typography variant="h5">{advertisement.name}</Typography>
                                    <Typography variant="body2">Цена: {advertisement.price}</Typography>
                                    <Typography variant="body2">Просмотры: {advertisement.views}</Typography>
                                    <Typography variant="body2">Лайки: {advertisement.likes}</Typography>
                                    <Box mt={'auto'}>
                                        <Button variant="contained" onClick={() => handleViewProduct(advertisement.id)}>
                                            Посмотреть
                                        </Button>
                                    </Box>
                                </CardContent>
                            </Card>
                        </RouterLink>
                    </Grid>
                ))
            }
        </Grid>
    );
}

export default AdvertisementCard;
