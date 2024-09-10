import {Box, Button, Grid, TextField, Typography} from '@mui/material';
import {getProducts} from "../utils/api.ts";
import {Product} from "../utils/types.ts";
import {ChangeEvent, useEffect, useState} from "react";

import CreateProductModal from "../components/create-product-modal/create-product-modal.tsx";
import ProductCard from "../components/product-card/product-card.tsx";


function ProductsPage() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        getProducts().then((products: Product[]) => setProducts(products));
    }, []);

    const [searchTerm, setSearchTerm] = useState('');
    // const [itemsPerPage, setItemsPerPage] = useState(10);
    const [openModal, setOpenModal] = useState(false);

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    // const filteredProducts = products.filter((product) =>
    //     product.title.toLowerCase().includes(searchTerm.toLowerCase())
    // );

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

            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductCard products={products}/>
                </Grid>
            </Grid>

            {/*<Pagination*/}
            {/*    totalItems={filteredProducts.length}*/}
            {/*    itemsPerPage={itemsPerPage}*/}
            {/*    onPageChange={(page) => console.log(page)}*/}
            {/*    onItemsPerPageChange={(value) => setItemsPerPage(value)} currentPage={0}/>*/}

            <CreateProductModal open={openModal} onClose={() => setOpenModal(false)}/>
        </Box>
    );
}

export default ProductsPage;
