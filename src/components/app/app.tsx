import './app.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {Route, Routes} from 'react-router-dom';
import {Box} from "@mui/material";
import Sidebar from "../sidebar/sidebar.tsx";
import Navbar from "../navbar/navbar.tsx";
import ProductsPage from "../../pages/products-page.tsx";
import OrdersPage from "../../pages/orders-page.tsx";
import ProductDetailPage from "../../pages/product-detail-page.tsx";


function App() {

    return (
        <Box display="flex">
            <Sidebar/>
            <Box component="main">
                <Navbar/>
                <Routes>
                    <Route path="/" element={<ProductsPage/>}/>
                    <Route path="/product/:id" element={<ProductDetailPage/>}/>
                    <Route path="/orders" element={<OrdersPage/>}/>
                </Routes>
            </Box>
        </Box>
    )
}

export default App
