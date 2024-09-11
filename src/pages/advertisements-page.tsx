import {
    Box,
    Button,
    FormControl,
    MenuItem,
    Pagination,
    Select,
    SelectChangeEvent,
    TextField,
    Typography
} from '@mui/material';
import {getAdvertisements} from "../utils/api.ts";
import {Advertisement} from "../utils/types.ts";
import {ChangeEvent, useEffect, useState} from "react";
import CreateProductModal from "../components/create-advertisement-modal/create-product-modal.tsx";
import AdvertisementCard from "../components/advertisement-card/advertisement-card.tsx";
import BackButton from "../components/back-button/back-button.tsx";

function AdvertisementsPage() {
    const [advertisements, setAdvertisements] = useState<Advertisement[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [page, setPage] = useState<number>(1); // Текущая страница
    const [limit, setLimit] = useState<number>(12); // Количество объявлений на странице
    const [filterLikes, setFilterLikes] = useState<number>(0); // Минимум лайков
    const [filterViews, setFilterViews] = useState<number>(0); // Минимум просмотров

    const fetchAdvertisements = async () => {
        const start = (page - 1) * limit;
        const response = await getAdvertisements(start, limit, 'price', filterLikes, filterViews);
        setAdvertisements(response.advertisements);
    };

    useEffect(() => {
        fetchAdvertisements();
    }, [page, limit, filterLikes, filterViews]); // Обновляем объявления при изменении страницы, лимита или фильтров

    const addAdvertisement = (advertisement: Advertisement) => {
        setAdvertisements(old => [...old, advertisement]); // Обновление с новым объявлением
    };

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const handleLimitChange = (e: SelectChangeEvent<number>) => {
        setLimit(Number(e.target.value)); // Приведение значения к числу
        setPage(1); // Сбрасываем на первую страницу при изменении лимита
    };

    // Обработка изменения фильтров
    const handleFilterLikesChange = (e: SelectChangeEvent<number>) => {
        setFilterLikes(Number(e.target.value));
        setPage(1); // Сбрасываем на первую страницу при изменении фильтра
    };

    const handleFilterViewsChange = (e: SelectChangeEvent<number>) => {
        setFilterViews(Number(e.target.value));
        setPage(1); // Сбрасываем на первую страницу при изменении фильтра
    };

    // Применяем фильтрацию только для отображения
    const filteredAdvertisements = advertisements.filter(ad =>
        ad.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handlePageChange = (_: ChangeEvent<unknown>, value: number) => {
        console.log(value)
        setPage(value); // Обновляем текущую страницу
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
            <Typography variant="h2" color="primary" textAlign={'left'} fontSize={20}>Сортировка</Typography>
            <Box sx={{display: 'flex', paddingTop: '20px'}}>

                {/* Элементы управления для фильтрации по лайкам */}
                <FormControl sx={{minWidth: 120, mr: 2}}>
                    <Typography component={'span'}>По лайкам</Typography>
                    <Select
                        labelId="likes-filter-label"
                        value={filterLikes}
                        onChange={handleFilterLikesChange}
                    >
                        <MenuItem value={0}>0</MenuItem>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={20}>20</MenuItem>
                    </Select>
                </FormControl>

                {/* Элементы управления для фильтрации по просмотрам */}
                <FormControl sx={{minWidth: 120}}>
                    <Typography component={'span'}>По просмотрам</Typography>
                    <Select
                        labelId="views-filter-label"
                        value={filterViews}
                        onChange={handleFilterViewsChange}
                    >
                        <MenuItem value={0}>0</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={50}>50</MenuItem>
                        <MenuItem value={100}>100</MenuItem>
                    </Select>
                </FormControl>
            </Box>

            {/* Отображение объявлений с учетом фильтрации */}
            <AdvertisementCard advertisements={filteredAdvertisements}/>
            <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <Pagination
                    count={advertisements.length < limit ? page : page + 1} // Общее количество страниц
                    page={page} // Текущая страница
                    onChange={handlePageChange} // Обработчик изменения страницы
                    color="primary"
                    sx={{mt: 2}} // Отступ сверху
                />

                {/* Элементы управления для выбора количества объявлений */}
                <FormControl sx={{minWidth: 120, mt: 3}}>
                    <Typography component={'span'} gutterBottom>Выберите количество товаров</Typography>
                    <Select
                        labelId="limit-label"
                        value={limit}
                        onChange={handleLimitChange}
                    >
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={12}>12</MenuItem>
                        <MenuItem value={18}>18</MenuItem>
                    </Select>
                </FormControl>
            </Box>

            <CreateProductModal open={openModal} onClose={() => setOpenModal(false)}
                                addAdvertisement={addAdvertisement}/>
        </Box>
    );
}

export default AdvertisementsPage;
