// import React from 'react';
// import { Pagination, Select, MenuItem, Box, Typography } from '@mui/material';
//
// interface PaginationComponentProps {
//     totalItems: number; // Общее количество товаров
//     itemsPerPage: number; // Количество товаров на одной странице
//     currentPage: number; // Текущая страница
//     onPageChange: (page: number) => void; // Функция для изменения страницы
//     onItemsPerPageChange: (itemsPerPage: number) => void; // Функция для изменения количества элементов на странице
// }
//
// const PaginationComponent: React.FC<PaginationComponentProps> = ({
//                                                                      totalItems,
//                                                                      itemsPerPage,
//                                                                      currentPage,
//                                                                      onPageChange,
//                                                                      onItemsPerPageChange,
//                                                                  }) => {
//     // Количество страниц
//     const totalPages = Math.ceil(totalItems / itemsPerPage);
//
//     return (
//         <Box display="flex" justifyContent="space-between" alignItems="center" my={2}>
//             <Box>
//                 <Typography variant="body2">Товаров на странице:</Typography>
//                 <Select
//                     value={itemsPerPage}
//                     onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
//                     size="small"
//                 >
//                     <MenuItem value={5}>5</MenuItem>
//                     <MenuItem value={10}>10</MenuItem>
//                     <MenuItem value={20}>20</MenuItem>
//                 </Select>
//             </Box>
//
//             <Pagination
//                 count={totalPages} // Общее количество страниц
//                 page={currentPage} // Текущая страница
//                 onChange={(_, value) => onPageChange(value)} // Изменение страницы
//                 color="primary"
//             />
//         </Box>
//     );
// };
//
// export default PaginationComponent;
