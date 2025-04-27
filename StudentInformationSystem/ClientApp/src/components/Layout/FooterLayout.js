import { Box, Typography } from "@mui/material"
import { NavLink, Outlet } from "react-router-dom"

export const FooterLayout = () => {
    return (
        <Box>
            <Outlet />
            <Box
                sx={{
                    display: "flex",
                    height: "40px",
                    padding: "0 150px",
                    width: "100%",
                    color: "white",
                    alignItems: 'center',
                    backgroundColor: "#172d56",
                    position: "fixed",
                    bottom: 0,
                    left: 0,
                }}
            >
                <Typography style={{ fontSize: '14px' }}>
                    2019 UTC | By :
                </Typography>
                <NavLink to="#">
                    <Typography
                        // sx={{
                        //     color: "white",
                        //     size: '14px'
                        // }}
                        style={{ fontSize: '14px', color: "white", }}
                    >
                        Trung tâm ứng dụng CNTT - ĐH GTVT
                    </Typography>
                </NavLink>
            </Box>
        </Box>
    )
}
