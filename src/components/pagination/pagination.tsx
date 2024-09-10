import {Box, MenuItem, Pagination, Select, Typography} from '@mui/material';

interface PaginationComponentProps {
    totalItems: number;
    itemsPerPage: number;
    currentPage: number;
    onPageChange: (page: number) => void;
    onItemsPerPageChange: (itemsPerPage: number) => void;
}

const PaginationComponent = ({
                                 totalItems,
                                 itemsPerPage,
                                 currentPage,
                                 onPageChange,
                                 onItemsPerPageChange,
                             }: PaginationComponentProps) => {

    const totalPages = Math.ceil(totalItems / itemsPerPage);

    return (
        <Box display="flex" justifyContent="space-between" alignItems="center" my={2}>
            <Box>
                <Typography variant="body2">Товаров на странице:</Typography>
                <Select
                    value={itemsPerPage}
                    onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
                    size="small"
                >
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                </Select>
            </Box>

            <Pagination
                count={totalPages}
                page={currentPage}
                onChange={(_, value) => onPageChange(value)}
                color="primary"
            />
        </Box>
    );
};

export default PaginationComponent;
