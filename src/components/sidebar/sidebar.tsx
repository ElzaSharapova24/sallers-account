import {Drawer, List, ListItemButton, ListItemText} from "@mui/material";
import {Link as RouterLink} from "react-router-dom";

function Sidebar() {
    return (
        <Drawer variant="permanent">
            <List>
                <ListItemButton component={RouterLink} to="/announcements">
                    <ListItemText primary="Объявления"/>
                </ListItemButton>
                <ListItemButton component={RouterLink} to="/orders">
                    <ListItemText primary="Заказы"/>
                </ListItemButton>
            </List>
        </Drawer>
    )
}

export default Sidebar;