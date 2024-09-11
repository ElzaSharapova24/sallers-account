import {Modal, Box, TextField, Button} from '@mui/material';
import {useState} from "react";
import {createAdvertisement} from "../../utils/api.ts";
import {Advertisement} from "../../utils/types.ts";

interface CreateProductModalProps {
    open: boolean,
    onClose: () => void,
    addAdvertisement: (advertisement: Advertisement) => void
}

function CreateProductModal({open, onClose, addAdvertisement}: CreateProductModalProps) {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = async () => {
        const newProduct = {
            name: name,
            description: description,
            price: price,
            createdAt: new Date().toISOString(),
            views: 0,
            likes: 0,
            imageUrl: image,
        };

        try {
            const createdAdvertisement = await createAdvertisement(newProduct);
            addAdvertisement(createdAdvertisement);
            console.log('Advertisement created successfully');

            // Очистка формы
            setName('');
            setPrice(0);
            setDescription('');
            setImage('');

            onClose();
        } catch (error) {
            console.error('Failed to create advertisement:', error);
        }
    };


    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={{p: 4, backgroundColor: 'white', margin: 'auto', width: 400}}>
                <TextField
                    label="Название"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Стоимость"
                    type="sting"
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Описание"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="URL изображения"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <Button variant="contained" onClick={handleSubmit}>
                    Создать
                </Button>
            </Box>
        </Modal>
    );
};

export default CreateProductModal;
