import { Button, Drawer, List } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom"; // bạn thiếu navigate nè

export const Sidebar = ({ menuItems }) => {
    const navigate = useNavigate();

    return (
        <Drawer
            sx={{
                width: 240,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: 240,
                    height: '100%',
                    boxSizing: 'border-box',
                    position: 'relative',
                },
            }}
            variant="permanent"
            open
        >
            <List sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {menuItems.map((item, index) => (
                    <Button
                        key={index}
                        variant="text"
                        sx={{ display: 'flex', justifyContent: 'flex-start', padding: 2, textTransform: 'none'}}
                        onClick={() => navigate(item.route)}
                    >
                        {item.text.charAt(0).toUpperCase() + item.text.slice(1).toLowerCase()}
                    </Button>
                ))}
            </List>
        </Drawer>
    )
}
