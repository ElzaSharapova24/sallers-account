
import { Modal, Box, TextField, Button } from '@mui/material';
import {useState} from "react";

interface CreateProductModalProps {
    open: boolean;
    onClose: () => void;
}

function CreateProductModal ({ open, onClose }: CreateProductModalProps) {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = () => {
        // Logic for creating a product
        onClose();
    };

    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={{ p: 4, backgroundColor: 'white', margin: 'auto', width: 400 }}>
                <TextField
                    label="Название"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Стоимость"
                    type="number"
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
