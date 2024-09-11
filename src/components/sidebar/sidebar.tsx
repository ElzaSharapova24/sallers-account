import {Box, Button, Card, CardContent} from "@mui/material";
import {Link as RouterLink} from "react-router-dom";

function Sidebar() {
    return (
        <Box component="section" sx={{display: 'flex', gap: '15px'}}>
            <Card>
              <CardContent>
                  <Button component={RouterLink} to="/advertisements" color="primary">
                     Объявления
                  </Button>
              </CardContent>
            </Card>
            <Card>
               <CardContent>
                   <Button component={RouterLink} to="/orders">
                       Заказы
                   </Button>
               </CardContent>
            </Card>
        </Box>
    )
}

export default Sidebar;