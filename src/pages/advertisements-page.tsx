import {Box, Button, TextField, Typography} from '@mui/material';
import {getAdvertisements} from "../utils/api.ts";
import {Advertisement} from "../utils/types.ts";
import {ChangeEvent, useEffect, useState} from "react";

import CreateProductModal from "../components/create-advertisement-modal/create-product-modal.tsx";
import AdvertisementCard from "../components/advertisement-card/advertisement-card.tsx";
import BackButton from "../components/back-button/back-button.tsx";


function AdvertisementsPage() {
    const [advertisements, setAdvertisements] = useState<Advertisement[]>([]);

    useEffect(() => {
        getAdvertisements().then((advertisements: Advertisement[]) => setAdvertisements(advertisements));
    }, []);

    const addAdvertisement = (advertisement: Advertisement)=> {
        setAdvertisements(old => old.concat(advertisement));
    }

    const [searchTerm, setSearchTerm] = useState<string>('');
    const [openModal, setOpenModal] = useState<boolean>(false);

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    return (
        <Box>
            <BackButton/>
            <Typography variant="h1" gutterBottom>Все объявления</Typography>
            <Button variant="contained" color="primary" onClick={() => setOpenModal(true)}>
                Создать новое объявление
            </Button>
            <TextField
                label="Поиск"
                value={searchTerm}
                onChange={handleSearch}
                fullWidth
                margin="normal"
            />

            <AdvertisementCard advertisements={advertisements} />
            <CreateProductModal open={openModal} onClose={() => setOpenModal(false)} addAdvertisement={addAdvertisement}/>
        </Box>
    );
}

export default AdvertisementsPage;
