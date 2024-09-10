import {Drawer, List, ListItemButton, ListItemText} from "@mui/material";
import {Link} from "react-router-dom";

function Sidebar() {
    return (
        <Drawer variant="permanent">
            <List>
                <ListItemButton component={Link} to="/">
                    <ListItemText primary="Объявления"/>
                </ListItemButton>
                <ListItemButton component={Link} to="/orders">
                    <ListItemText primary="Заказы"/>
                </ListItemButton>
            </List>
        </Drawer>
    )
}

export default Sidebar;