import {Box, Button, Card, CardContent} from "@mui/material";
import {Link as RouterLink} from "react-router-dom";

function Navigation() {
    return (
        <Box component="section" sx={{display: 'flex', gap: '15px'}}>
            <Card sx={{boxShadow: '-1px 0px 10px 4px rgba(0,0,0,0.74)'}}>
                <CardContent>
                    <Button component={RouterLink} to="/advertisements" color="primary">
                        Мои объявления
                    </Button>
                </CardContent>
            </Card>
            <Card sx={{boxShadow: '-1px 0px 10px 4px rgba(0,0,0,0.74)'}}>
                <CardContent>
                    <Button component={RouterLink} to="/orders">
                        Мои заказы
                    </Button>
                </CardContent>
            </Card>
        </Box>
    )
}

export default Navigation;