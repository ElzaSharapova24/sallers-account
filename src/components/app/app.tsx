import './app.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {Route, Routes} from 'react-router-dom';
import {Box} from "@mui/material";
import Navigation from "../navigation/navigation.tsx";
import AdvertisementsPage from "../../pages/advertisements-page.tsx";
import OrdersPage from "../../pages/orders-page.tsx";
import AdvertisementDetailPage from "../../pages/advertisement-detail-page.tsx";
import OrderDetailPage from "../../pages/order-detail-page.tsx";


function App() {

    return (
        <Box display="flex">
            <Box component="main">
                <Routes>
                    <Route path="/" element={<Navigation/>}/>
                    <Route path="/advertisements" element={<AdvertisementsPage/>}/>
                    <Route path="/advertisements/:id" element={<AdvertisementDetailPage/>}/>
                    <Route path="/orders" element={<OrdersPage/>}/>
                    <Route path="/orders/:orderId" element={<OrderDetailPage/>}/>
                </Routes>
            </Box>
        </Box>
    )
}

export default App;
