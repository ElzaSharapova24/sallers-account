import {Box, Button, Modal, TextField} from '@mui/material';
import React, {useState} from "react";
import {createAdvertisement} from "../../utils/api.ts";
import {Advertisement} from "../../utils/types.ts";

interface CreateProductModalProps {
    open: boolean,
    onClose: () => void,
    addAdvertisement: (advertisement: Advertisement) => void
}

function CreateProductModal({open, onClose, addAdvertisement}: CreateProductModalProps) {
    const [name, setName] = useState<string>('');
    const [price, setPrice] = useState<number | undefined>(undefined);
    const [description, setDescription] = useState<string>('');
    const [image, setImage] = useState<string>('');
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const validate = () => {
        const newErrors: { [key: string]: string } = {};
        if (!name) newErrors.name = 'Введите название';
        if (!price) newErrors.price = 'Введите стоимость';
        if (!description) newErrors.description = 'Введите описание';
        if (!image) newErrors.image = 'Введите URL изображения'
        return newErrors;
    };

    const handleSubmit = async () => {
        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        const newAdvertisement: Partial<Advertisement> = {
            name: name,
            description: description,
            price: price,
            createdAt: new Date().toISOString(),
            views: 0,
            likes: 0,
            imageUrl: image,
        };

        try {
            const createdAdvertisement = await createAdvertisement(newAdvertisement);
            console.log('Advertisement created successfully');

            addAdvertisement(createdAdvertisement);

            // Очистка формы
            setName('');
            setPrice(undefined);
            setDescription('');
            setImage('');
            setErrors({});

            onClose();
        } catch (error) {
            console.error('Failed to create advertisement:', error);
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'Enter') {
            handleSubmit();
        }
    };


    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={{p: 4, backgroundColor: 'white', margin: 'auto', width: 400}} onKeyDown={handleKeyDown}>
                <TextField
                    label="Название"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    fullWidth
                    margin="normal"
                    error={!!errors.name}
                    helperText={errors.name}
                />
                <TextField
                    label="Стоимость"
                    type="number"
                    value={price === undefined ? '' : price}
                    onChange={(e) => {
                        const value = e.target.value;
                        setPrice(value === '' ? undefined : Number(value));
                    }}
                    error={!!errors.price}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Описание"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    fullWidth
                    margin="normal"
                    error={!!errors.description}
                    helperText={errors.description}
                />
                <TextField
                    label="URL изображения"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    fullWidth
                    margin="normal"
                    error={!!errors.image}
                    helperText={errors.image}
                />
                <Button variant="contained" onClick={handleSubmit}>
                    Создать
                </Button>
            </Box>
        </Modal>
    );
};

export default CreateProductModal;
