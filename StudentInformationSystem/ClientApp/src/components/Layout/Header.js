import React from 'react';
import { NavLink, Outlet } from "react-router-dom";
import { Box, Grid, Typography } from "@mui/material";
import ImgLogo from "../../style/imgs/logo.webp"
import ContactSupportIcon from '@mui/icons-material/ContactSupport';

export const HeaderLayout = () => {

    return (
        <Box sx={{width:"100%"}}>
            <Box
                sx={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 99,
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: "120px",
                    width: "100%",
                    minWidth: '650px'
                }}
            >
                <Grid container sx={{width:"100%"}}>
          
                    <Grid item
                        xs={12}
                        sx={{
                            height: "90px",
                            display: "flex",
                            alignItems: "center",
                            backgroundColor: "#172d56",
                            color: 'white',
                            width: "100%",
                            
                        }}
                        columnSpacing={{ xs: 0 }}
                    >
                        <Grid
                            item
                            xs={2}
                            sx={{
                                paddingLeft: "230px",
                                textAlign: 'right',
                                paddingRight: '10px'
                            }}
                        >
                            <NavLink to="/">
                                <img
                                    src={ImgLogo}
                                    alt="Logo Img"
                                    style={{
                                        objectFit: "cover",
                                        width: "auto",
                                        height: "70px"
                                    }}
                                />
                            </NavLink>
                        </Grid>
                        <Grid item
                            // fontSize="0.875rem"
                            xs={3}
                            sx={{
                                // textTransform: "uppercase",
                                paddingRight:"100px"
                            }}
                        >
                            <Typography style={{ fontSize: '18px' }}>
                                Trường đại học giao thông vận tải
                            </Typography>
                            <Typography style={{ fontSize: '16px' }}>
                                University of transport and communications
                            </Typography>
                        </Grid>
                        <Grid item xs={7}
                        >
                            <Typography style={{ fontSize: '34px' }}>
                                HỆ THỐNG THÔNG TIN SINH VIÊN
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            <Outlet />
        </Box>
    )
}
