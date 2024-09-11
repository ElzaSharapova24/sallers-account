import {Box, Button, TextField, Typography} from '@mui/material';
import {getAdvertisements} from "../utils/api.ts";
import {Advertisement} from "../utils/types.ts";
import {ChangeEvent, useEffect, useState} from "react";

import CreateProductModal from "../components/create-advertisement-modal/create-product-modal.tsx";
import AdvertisementCard from "../components/advertisement-card/advertisement-card.tsx";
import Pagination from "../components/pagination/pagination.tsx";


function AdvertisementsPage() {
    const [advertisements, setAdvertisements] = useState<Advertisement[]>([]);

    useEffect(() => {
        getAdvertisements().then((advertisements: Advertisement[]) => setAdvertisements(advertisements));
    }, []);

    const [searchTerm, setSearchTerm] = useState<string>('');
    const [itemsPerPage, setItemsPerPage] = useState<number>(10);
    const [openModal, setOpenModal] = useState<boolean>(false);

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    return (
        <Box>
            <Typography variant="h1" gutterBottom>Все объявления</Typography>
            <TextField
                label="Поиск"
                value={searchTerm}
                onChange={handleSearch}
                fullWidth
                margin="normal"
            />
            <Button variant="contained" color="primary" onClick={() => setOpenModal(true)}>
                Создать новое объявление
            </Button>

            <AdvertisementCard advertisements={advertisements} />

            <Pagination
                totalItems={advertisements.length}
                itemsPerPage={itemsPerPage}
                onPageChange={(page) => console.log(page)}
                onItemsPerPageChange={(value) => setItemsPerPage(value)} currentPage={0}/>

            <CreateProductModal open={openModal} onClose={() => setOpenModal(false)}/>
        </Box>
    );
}

export default AdvertisementsPage;
