import {useNavigate, useParams} from "react-router-dom";
import {ChangeEvent, useEffect, useState} from "react";
import {Advertisement} from "../utils/types.ts";
import {deleteAdvertisement, getAdvertisementById, updateAdvertisement} from "../utils/api.ts";
import {Button, Card, CardContent, CardMedia, Container, Skeleton, Stack, TextField, Typography} from "@mui/material";
import BackButton from "../components/back-button/back-button.tsx";

function AdvertisementDetailPage() {
    const {id} = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [advertisement, setAdvertisement] = useState<Advertisement | null>(null);
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState<Partial<Advertisement>>({});

    useEffect(() => {
        const fetchAdvertisement = async () => {
            const data = await getAdvertisementById(id);
            setAdvertisement(data);
            setFormData(data); // Заполняем форму данными объявления
        };

        fetchAdvertisement();
    }, [id]);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setFormData((prev) => ({...prev, [name]: value}));
    };

    const handleEditToggle = () => {
        setIsEditing((prev) => !prev);
    };

    const handleUpdate = async () => {
        await updateAdvertisement(id, formData);
        setAdvertisement((prev) => (prev ? {...prev, ...formData} : null));
        setIsEditing(false);
    };

    const handleDelete = async () => {
        await deleteAdvertisement(id);
        navigate('/advertisements'); // Перенаправление на страницу всех объявлений после удаления
    };


    return (
        <Container maxWidth="md">
            <BackButton/>

            {!advertisement ? (
                // Скелетон для загрузки названия объявления
                <Skeleton variant="text" width="60%" height={40}/>
            ) : (
                <Typography variant="h4" gutterBottom>
                    {advertisement.name}
                </Typography>
            )}

            <Card>
                {!advertisement ? (
                    // Скелетон для изображения
                    <Skeleton variant="rectangular" height={200} width={300}/>
                ) : (
                    <CardMedia
                        component="img"
                        height="200"
                        image={advertisement.imageUrl}
                        alt={advertisement.name}
                    />
                )}

                <CardContent>
                    {!advertisement ? (
                        // Скелетоны для текстового содержимого
                        <>
                            <Skeleton variant="text" width="40%" height={30}/>
                            <Skeleton variant="text" width="20%" height={30}/>
                            <Skeleton variant="text" width="20%" height={30}/>
                            <Skeleton variant="text" width="100%" height={20}/>
                        </>
                    ) : (
                        <>
                            <Typography variant="h6">Price: {advertisement.price}$</Typography>
                            <Typography variant="body1">Views: {advertisement.views}</Typography>
                            <Typography variant="body1">Likes: {advertisement.likes}</Typography>
                            <Typography variant="body2">{advertisement.description}</Typography>
                        </>
                    )}
                </CardContent>
            </Card>

            <Stack spacing={2} marginTop={2}>
                {!advertisement ? (
                    // Скелетоны для кнопок
                    <>
                        <Skeleton variant="rectangular" height={40}/>
                        <Skeleton variant="rectangular" height={40}/>
                        <Skeleton variant="rectangular" height={40}/>
                    </>
                ) : isEditing ? (
                    <>
                        <TextField
                            label="Name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            fullWidth
                        />
                        <TextField
                            label="Image URL"
                            name="imageUrl"
                            value={formData.imageUrl}
                            onChange={handleInputChange}
                            fullWidth
                        />
                        <TextField
                            label="Price"
                            type="number"
                            name="price"
                            value={formData.price}
                            onChange={handleInputChange}
                            fullWidth
                        />
                        <TextField
                            label="Description"
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            multiline
                            rows={4}
                            fullWidth
                        />
                        <Button variant="contained" color="primary" onClick={handleUpdate}>
                            Save Changes
                        </Button>
                        <Button variant="outlined" onClick={handleEditToggle}>
                            Cancel
                        </Button>
                    </>
                ) : (
                    <>
                        <Button variant="contained" color="secondary" onClick={handleEditToggle}>
                            Edit Advertisement
                        </Button>
                        <Button variant="contained" color="error" onClick={handleDelete}>
                            Delete Advertisement
                        </Button>
                    </>
                )}
            </Stack>
        </Container>
    );
}

export default AdvertisementDetailPage
