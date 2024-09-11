import {Box, Button, Card, CardContent} from "@mui/material";
import {Link as RouterLink} from "react-router-dom";

function Navigation() {
    return (
        <Box component="section" sx={{display: 'flex', gap: '15px'}}>
            <Card>
                <CardContent>
                    <Button component={RouterLink} to="/advertisements" color="primary">
                        Мои объявления
                    </Button>
                </CardContent>
            </Card>
            <Card>
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