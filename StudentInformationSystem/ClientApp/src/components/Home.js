import { Grid } from "@mui/material";
import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import PollIcon from '@mui/icons-material/Poll';
import QrCodeIcon from '@mui/icons-material/QrCode';

const gridItemStyled = {
    height: "200px",
    backgroundColor: "#f0f0f0",
    color: "#333",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "5px",
    boxShadow: "0 5px 10px rgba(0, 0, 0, 0.15)",
    transition: "transform 0.2s ease",
    cursor: "pointer",
    ":hover": {
        transform: "scale(1.05)",
    },
};

const LinkItemStyled = {
    textDecoration: "none",
}

export const Home = () => {
    return (
        <Box>
                <Box
                sx={{
              
                    mb: "30px",
                    px: "150px",
                    height: "100%"
                }}
            >
                <Typography
                    variant="h5"
                    sx={{
                        margin: "20px 0 30px 60px",
                        fontWeight: 600
                    }}
                >
                    Hệ thống hỗ trợ sinh viên
                </Typography>
                <Grid
                    container
                    spacing={4}
                    sx={{display:"flex",alignItems:"center",marginLeft:"55px"}}
                >
                    {/* Row 1 */}
                    <Grid item xs={3} style={{ width: 250, minWidth: 250, maxWidth: 250 }}>
                        <NavLink style={LinkItemStyled} to="/dich-vu-truc-tuyen/dang-ky-ve-xe-buyt">
                            <Box style={gridItemStyled}>
                                <DirectionsBusIcon fontSize="large" />
                                <Typography>
                                    Đăng ký vé xe buýt
                                </Typography>
                            </Box>
                        </NavLink>
                    </Grid>
                    <Grid item xs={3} style={{ width: 250, minWidth: 250, maxWidth: 250 }}>
                        <NavLink style={LinkItemStyled} to="/dich-vu-truc-tuyen/giay-xac-nhan-sinh-vien">
                            <Box style={gridItemStyled}>
                                <NewspaperIcon fontSize="large" />
                                <Typography>
                                    Giấy xác nhận sinh viên
                                </Typography>
                            </Box>
                        </NavLink>
                    </Grid>
                    <Grid item xs={3} style={{ width: 250, minWidth: 250, maxWidth: 250 }}>
                        <NavLink style={LinkItemStyled} to="/dich-vu-truc-tuyen/tuyen-xe-buyt">
                            <Box style={gridItemStyled}>
                                <DirectionsBusIcon fontSize="large" />
                                <Typography>
                                    Bài thu hoạch 
                                </Typography>
                            </Box>
                        </NavLink>
                    </Grid>
                    <Grid item xs={3} style={{ width: 250, minWidth: 250, maxWidth: 250 }}>
                        <NavLink style={LinkItemStyled} to="/ky-tuc-xa/cong-no">
                            <Box style={gridItemStyled}>
                                <QrCodeIcon />
                                <Typography>
                                    Khảo sát sinh viên
                                </Typography>
                            </Box>
                        </NavLink>
                    </Grid>

                    {/* Row 2 */}
                    <Grid item xs={3} style={{ width: 250, minWidth: 250, maxWidth: 250 }}>
                        <NavLink style={LinkItemStyled} to="#">
                            <Box style={gridItemStyled}>
                                <PollIcon fontSize="large" />
                                <Typography>
                                    Khai báo y tế COVID-19
                                </Typography>
                            </Box>
                        </NavLink>
                    </Grid>
                    <Grid item xs={3} style={{ width: 250, minWidth: 250, maxWidth: 250 }}>
                        <NavLink style={LinkItemStyled} to="#">
                            <Box style={gridItemStyled}>
                                <CoronavirusIcon fontSize="large" />
                                <Typography>
                                    Tình trạng tiêm vaccine
                                </Typography>
                            </Box>
                        </NavLink>
                    </Grid>
                    <Grid item xs={3} style={{ width: 250, minWidth: 250, maxWidth: 250 }}>
                        <NavLink style={LinkItemStyled} to="#">
                            <Box style={gridItemStyled}>
                                <SupportAgentIcon fontSize="large" />
                                <Typography>
                                    Đăng ký tiêm vaccine
                                </Typography>
                            </Box>
                        </NavLink>
                    </Grid>
                    <Grid item xs={3} style={{ width: 250, minWidth: 250, maxWidth: 250 }}>
                        <NavLink style={LinkItemStyled} to="#">
                            <Box style={gridItemStyled}>
                                <SupportAgentIcon fontSize="large" />
                                <Typography>
                                    Đăng ký nội trú
                                </Typography>
                            </Box>
                        </NavLink>
                    </Grid>
                    <Grid item xs={3} style={{ width: 250, minWidth: 250, maxWidth: 250 }}>
                        <NavLink style={LinkItemStyled} to="#">
                            <Box style={gridItemStyled}>
                                <SupportAgentIcon fontSize="large" />
                                <Typography>
                                    Hỗ trợ sinh viên / gửi câu hỏi
                                </Typography>
                            </Box>
                        </NavLink>
                    </Grid>
                    <Grid item xs={3} style={{ width: 250, minWidth: 250, maxWidth: 250 }}>
                        <NavLink style={LinkItemStyled} to="#">
                            <Box style={gridItemStyled}>
                                <SupportAgentIcon fontSize="large" />
                                <Typography>
                                    Thông tin đào tạo
                                </Typography>
                            </Box>
                        </NavLink>
                    </Grid>
                    <Grid item xs={3} style={{ width: 250, minWidth: 250, maxWidth: 250 }}>
                        <NavLink style={LinkItemStyled} to="/dich-vu-truc-tuyen/thong-tin-ca-nhan">
                            <Box style={gridItemStyled}>
                                <SupportAgentIcon fontSize="large" />
                                <Typography>
                                    Thông tin cá nhân
                                </Typography>
                            </Box>
                        </NavLink>
                    </Grid>

                </Grid>
            </Box>
        </Box>
    );
}

export default Home