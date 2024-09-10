import {Box, Button, TextField, Typography} from '@mui/material';
import {getProducts} from "../utils/api.ts";
import {Product} from "../utils/types.ts";
import {ChangeEvent, useEffect, useState} from "react";

import CreateProductModal from "../components/create-product-modal/create-product-modal.tsx";
import ProductCard from "../components/product-card/product-card.tsx";
import Pagination from "../components/pagination/pagination.tsx";


function ProductsPage() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        getProducts().then((products: Product[]) => setProducts(products));
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

            <ProductCard products={products} />

            <Pagination
                totalItems={products.length}
                itemsPerPage={itemsPerPage}
                onPageChange={(page) => console.log(page)}
                onItemsPerPageChange={(value) => setItemsPerPage(value)} currentPage={0}/>

            <CreateProductModal open={openModal} onClose={() => setOpenModal(false)}/>
        </Box>
    );
}

export default ProductsPage;
