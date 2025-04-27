import React, {useEffect, useState} from 'react';
import {
    Box,
    Grid,
    Stack,
    Typography,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Divider,
    Button,
    TextField
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import dayjs from 'dayjs';
import {Radio, RadioGroup, FormControlLabel, FormControl} from '@mui/material';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import axios from "axios";
import ThongTinCaNhanModel from '../../models/ThongTinCaNhanModel';

export const ThongTinCaNhan = () => {
    const drawerWidth = 240;
    const navigate = useNavigate();
    const [ThongTinCaNhan, setThongTinCaNhan] = useState(new ThongTinCaNhanModel());
    
    useEffect(() => {
        const fetchThongTinCaNhan = async () => {
            const url = `https://localhost:7045/api/thongtincanhan/get-by-code?code=ACF8C590-ED0B-415C-83AD-33761F938F65`
            const response = await axios.get(url);
            
            console.log(response);
            if (response.data.success) {
                setThongTinCaNhan(response.data.data); 
            }
        }
        fetchThongTinCaNhan();
    },[])
    const updateThongTinCaNhan = async () => {
        try {
            const url = `https://localhost:7045/api/thongtincanhan/update`
            const response = await axios.put(url, ThongTinCaNhan);
            console.log(response);
            if (response.status === 200) {
                Swal.fire({
                    toast: true,
                    text: 'Cập nhật thành công!',
                    icon: "success",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    position: "top",
                });
            }
        }
        catch (error) {
            Swal.fire({
                toast: true,
                text:'Lỗi hệ thống xin vui lòng thử lại sau!',
                icon: "error",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                position: "top",
            });
        }
    }
    return (
        <Box sx={{display: 'flex'}}>
            {/* Sidebar */}
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        height: '100%',
                        boxSizing: 'border-box',
                        position: 'relative',
                    },
                }}
                variant="permanent"
                open
            >
                <List sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {['Thông tin sinh viên', 'Trở lại'].map((text, index) => (
                        <Button
                            key={index}
                            variant="text"
                            sx={{ display: 'flex', justifyContent: 'flex-start', padding: 2 }}
                            onClick={() => {
                                if (text === 'Trở lại') {
                                    navigate('/'); 
                                }
                            }}
                        >
                            {text}
                        </Button>
                    ))}
                </List>
            </Drawer>

            {/* Main Content */}
            <Box
                component="main"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 5,
                    p: 5,
                }}
            >
                <Box sx={{display: "flex", flexDirection: "column", gap: "25px"}}>
                    <Typography variant="h5">
                        Thông tin sinh viên
                    </Typography>

                    <Divider variant="fullWidth" sx={{borderColor: 'black', borderWidth: 2}}/>

                    <Box sx={{
                        backgroundColor: "#d9edf7",
                        height: "105 px", borderColor: "#bce8f1", color: "#31708f",
                        border: "1px solid transparent",
                        borderRadius: "4px",
                        padding: "15px",
                        paddingBottom: "15px"
                    }}>
                        <Typography>
                            <strong>Lưu ý:</strong><br/>
                            - Sinh viên chú ý điền đầy đủ tất cả các thông tin có đánh dấu <span
                            style={{color: 'red'}}>*</span>.<br/>
                            - Sau khi điền đầy đủ thông tin, click vào nút <strong>Cập nhật</strong> ở cuối trang để lưu
                            dữ liệu.
                        </Typography>

                    </Box>
                </Box>


                <Box sx={{padding: "0", border: "1px solid #ccc", borderRadius: "4px", overflow: "hidden"}}>
                    <Box sx={{
                        backgroundColor: "rgba(32, 61, 115, 0.92)",
                        width: "100%",
                        height: "40px",
                        display: "flex",
                        alignItems: "center",
                        paddingLeft: "20px"
                    }}>
                        <Typography sx={{color: "white", fontWeight: "bold"}}>
                            THÔNG TIN CƠ BẢN
                        </Typography>
                    </Box>
                    <Box sx={{padding: "20px"}}>
                        <Grid container spacing={3}>
                            <Grid item size={4}>
                                <TextField label="Họ và tên *" variant="outlined" size="small" InputLabelProps={{ shrink: ThongTinCaNhan.maSinhVien ? true : false }} 
                                           fullWidth 
                                           value={ThongTinCaNhan.hoTen} // Gán giá trị từ state
                                           onChange={(e) => setThongTinCaNhan({ ...ThongTinCaNhan, hoTen: e.target.value })}/>
                            </Grid>
                            <Grid item size={4}>
                                <TextField label="Mã sinh viên *" variant="outlined" size="small" InputLabelProps={{
                                    shrink: ThongTinCaNhan.maSinhVien ? true : false, 
                                }}          fullWidth
                                           value={ThongTinCaNhan.maSinhVien} // Gán giá trị từ state
                                           onChange={(e) => setThongTinCaNhan({ ...ThongTinCaNhan, maSinhVien: e.target.value })}/>
                            </Grid>
                            <Grid item size={4}>
                                <TextField label="Khóa" variant="outlined" size="small" InputLabelProps={{ shrink: ThongTinCaNhan.maSinhVien ? true : false }} 
                                           fullWidth 
                                           value={ThongTinCaNhan.khoa} // Gán giá trị từ state
                                           onChange={(e) => setThongTinCaNhan({ ...ThongTinCaNhan, khoa: e.target.value })}
/>
                            </Grid>
                            <Grid item size={4}>
                                <TextField label="Dân tộc" variant="outlined" size="small" InputLabelProps={{ shrink: ThongTinCaNhan.maSinhVien ? true : false }} 
                                           fullWidth 
                                           value={ThongTinCaNhan.danToc} // Gán giá trị từ state
                                           onChange={(e) => setThongTinCaNhan({ ...ThongTinCaNhan, danToc: e.target.value })}
/>
                            </Grid>
                            <Grid item size={4}>
                                <TextField label="Tôn giáo" variant="outlined" size="small" InputLabelProps={{ shrink: ThongTinCaNhan.maSinhVien ? true : false }} 
                                           fullWidth 
                                           value={ThongTinCaNhan.tonGiao} // Gán giá trị từ state
                                           onChange={(e) => setThongTinCaNhan({ ...ThongTinCaNhan, tonGiao: e.target.value })}
/>
                            </Grid>
                            <Grid item size={4}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker
                                        label="Ngày cấp CMND/Thẻ căn cước"
                                        value={ThongTinCaNhan.cccdNgayCap ? dayjs(ThongTinCaNhan.cccdNgayCap) : null} // Chuyển đổi dữ liệu thành dayjs
                                        onChange={(newValue) => setThongTinCaNhan({ ...ThongTinCaNhan, cccdNgayCap: newValue ? newValue.format('YYYY-MM-DD') : '' })} // Lưu lại dữ liệu ngày theo định dạng 'YYYY-MM-DD'
                                        slotProps={{
                                            textField: {
                                                size: 'small',
                                                fullWidth: true,
                                                sx: {
                                                    fontSize: '12px',
                                                    '& input': { fontSize: '12px', padding: '6px' },
                                                },
                                            },
                                        }}
                                    />
                                </LocalizationProvider>
                            </Grid>
                            <Grid item size={4}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker
                                        label="Ngày cấp CMND/Thẻ căn cước"
                                        value={ThongTinCaNhan.cccdNgayCap ? dayjs(ThongTinCaNhan.ngaySinh) : null} // Chuyển đổi dữ liệu thành dayjs
                                        onChange={(newValue) => setThongTinCaNhan({ ...ThongTinCaNhan, ngaySinh: newValue ? newValue.format('YYYY-MM-DD') : '' })} // Lưu lại dữ liệu ngày theo định dạng 'YYYY-MM-DD'
                                        slotProps={{
                                            textField: {
                                                size: 'small',
                                                fullWidth: true,
                                                sx: {
                                                    fontSize: '12px',
                                                    '& input': { fontSize: '12px', padding: '6px' },
                                                },
                                            },
                                        }}
                                    />
                                </LocalizationProvider>
                            </Grid>
                            <Grid item size={4}>
                                <TextField label="Nơi sinh (Chọn tỉnh/TP đúng theo giấy khai sinh)" variant="outlined"
                                           size="small" InputLabelProps={{ shrink: ThongTinCaNhan.maSinhVien ? true : false }} 
                                           fullWidth 
                                           value={ThongTinCaNhan.noiSinh} // Gán giá trị từ state
                                           onChange={(e) => setThongTinCaNhan({ ...ThongTinCaNhan, noiSinh: e.target.value })}
/>
                            </Grid>
                            <Grid item xs={4} sx={{height: '40px', display: 'flex', alignItems: 'center'}}>
                                <FormControl>
                                    <Typography variant="body1">Giới tính</Typography>
                                    <RadioGroup
                                        row
                                        value={ThongTinCaNhan.gioiTinh ? 'female' : 'male'}  
                                        onChange={(e) => setThongTinCaNhan({ ...ThongTinCaNhan, gioiTinh: e.target.value === 'female' ? true : false })}
                                    >
                                        <FormControlLabel
                                            value="male"
                                            control={<Radio />}
                                            label="Nam"
                                            sx={{
                                                '& .MuiRadio-root': {
                                                    color: ThongTinCaNhan.gioiTinh === false ? 'blue' : 'gray', 
                                                }
                                            }}
                                        />
                                        <FormControlLabel
                                            value="female"
                                            control={<Radio />}
                                            label="Nữ"
                                            sx={{
                                                '& .MuiRadio-root': {
                                                    color: ThongTinCaNhan.gioiTinh === true ? 'blue' : 'gray', 
                                                }
                                            }}
                                        />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                            <Grid item size={4}>
                                <TextField label="Quê quán" variant="outlined" size="small" InputLabelProps={{ shrink: ThongTinCaNhan.maSinhVien ? true : false }} 
                                           fullWidth 
                                           value={ThongTinCaNhan.queQuan} // Gán giá trị từ state
                                           onChange={(e) => setThongTinCaNhan({ ...ThongTinCaNhan, queQuan: e.target.value })}
/>
                            </Grid>
                            <Grid item size={4}>
                                <TextField label="Số điện thoại sinh viên" variant="outlined" size="small" InputLabelProps={{ shrink: ThongTinCaNhan.maSinhVien ? true : false }} 
                                           fullWidth 
                                           value={ThongTinCaNhan.sdt} // Gán giá trị từ state
                                           onChange={(e) => setThongTinCaNhan({ ...ThongTinCaNhan, sdt: e.target.value })}
/>
                            </Grid>
                            <Grid item size={4}>
                                <TextField label="Email" variant="outlined" size="small" InputLabelProps={{ shrink: ThongTinCaNhan.maSinhVien ? true : false }} 
                                           fullWidth 
                                           value={ThongTinCaNhan.email} // Gán giá trị từ state
                                           onChange={(e) => setThongTinCaNhan({ ...ThongTinCaNhan, email: e.target.value })}
/>
                            </Grid>
                            <Grid item size={12}>
                                <Typography variant="subtitle1">
                                    Hộ khẩu thường trú
                                </Typography>
                            </Grid>
                            <Grid item size={4}>
                                <TextField label="Hộ khẩu tỉnh/thành phố" variant="outlined" size="small" InputLabelProps={{ shrink: ThongTinCaNhan.maSinhVien ? true : false }} 
                                           fullWidth 
                                           value={ThongTinCaNhan.hoKhauTP} // Gán giá trị từ state
                                           onChange={(e) => setThongTinCaNhan({ ...ThongTinCaNhan, hoKhauTP: e.target.value })}
/>
                            </Grid>
                            <Grid item size={4}>
                                <TextField label="Hộ khẩu quận/huyện" variant="outlined" size="small" InputLabelProps={{ shrink: ThongTinCaNhan.maSinhVien ? true : false }} 
                                           fullWidth 
                                           value={ThongTinCaNhan.hoKhauHuyen} // Gán giá trị từ state
                                           onChange={(e) => setThongTinCaNhan({ ...ThongTinCaNhan, hoKhauHuyen: e.target.value })}
/>
                            </Grid>
                            <Grid item size={4}>
                                <TextField label="Hộ khẩu xã/phường" variant="outlined" size="small" InputLabelProps={{ shrink: ThongTinCaNhan.maSinhVien ? true : false }} 
                                           fullWidth 
                                           value={ThongTinCaNhan.hoKhauXa} // Gán giá trị từ state
                                           onChange={(e) => setThongTinCaNhan({ ...ThongTinCaNhan, hoKhauXa: e.target.value })}
/>
                            </Grid>
                            <Grid item size={12}>
                                <TextField label="Địa chỉ báo tin" variant="outlined" size="small" InputLabelProps={{ shrink: ThongTinCaNhan.maSinhVien ? true : false }} 
                                           fullWidth 
                                           value={ThongTinCaNhan.diaChiBaoTin} // Gán giá trị từ state
                                           onChange={(e) => setThongTinCaNhan({ ...ThongTinCaNhan, diaChiBaoTin: e.target.value })}
/>
                            </Grid>
                            <Grid item size={4}>
                                <TextField label="Số điện thoại gia đình" variant="outlined" size="small" InputLabelProps={{ shrink: ThongTinCaNhan.maSinhVien ? true : false }} 
                                           fullWidth 
                                           value={ThongTinCaNhan.sdtGiaDinh} // Gán giá trị từ state
                                           onChange={(e) => setThongTinCaNhan({ ...ThongTinCaNhan, sdtGiaDinh: e.target.value })}
/>
                            </Grid>
                            <Grid item size={4}>
                                <TextField label="Lớp" variant="outlined" size="small" InputLabelProps={{ shrink: ThongTinCaNhan.maSinhVien ? true : false }} 
                                           fullWidth 
                                           value={ThongTinCaNhan.lop} // Gán giá trị từ state
                                           onChange={(e) => setThongTinCaNhan({ ...ThongTinCaNhan, lop: e.target.value })}
/>
                            </Grid>
                            <Grid item size={4}>
                                <TextField label="CMND/Thẻ căn cước của người giám hộ" variant="outlined" size="small"
                                           InputLabelProps={{ shrink: ThongTinCaNhan.maSinhVien ? true : false }} 
                                           fullWidth 
                                           value={ThongTinCaNhan.cCCDGiamHo} // Gán giá trị từ state
                                           onChange={(e) => setThongTinCaNhan({ ...ThongTinCaNhan, cCCDGiamHo: e.target.value })}
/>
                            </Grid>
                            <Grid item size={4}>
                                <TextField label="Mã số BHYT" variant="outlined" size="small" InputLabelProps={{ shrink: ThongTinCaNhan.maSinhVien ? true : false }} 
                                           fullWidth 
                                           value={ThongTinCaNhan.maBHYT} // Gán giá trị từ state
                                           onChange={(e) => setThongTinCaNhan({ ...ThongTinCaNhan, maBHYT: e.target.value })}
/>
                            </Grid>
                            <Grid item size={4}>
                                <TextField label="Mã số BHXH" variant="outlined" size="small" InputLabelProps={{ shrink: ThongTinCaNhan.maSinhVien ? true : false }} 
                                           fullWidth 
                                           value={ThongTinCaNhan.maBHXH} // Gán giá trị từ state
                                           onChange={(e) => setThongTinCaNhan({ ...ThongTinCaNhan, maBHXH: e.target.value })}
/>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Grid container spacing={10}>
                    <Grid item sx={{padding: "0", border: "1px solid #ccc", borderRadius: "4px", overflow: "hidden"}}
                        size={6}
                    >
                        <Box sx={{
                            backgroundColor: "rgba(32, 61, 115, 0.92)",
                            width: "100%",
                            height: "40px",
                            display: "flex",
                            alignItems: "center",
                            paddingLeft: "20px"
                        }}>
                            <Typography sx={{color: "white", fontWeight: "bold"}}>
                                THÔNG TIN BỐ
                            </Typography>
                        </Box>
                        <Grid container spacing={2} sx={{padding:"20px"}}>
                            <Grid item size={12}>
                                <TextField label="Họ tên Bố" variant="outlined" size="small" InputLabelProps={{ shrink: ThongTinCaNhan.maSinhVien ? true : false }} 
                                           fullWidth 
                                           value={ThongTinCaNhan.tenBo} // Gán giá trị từ state
                                           onChange={(e) => setThongTinCaNhan({ ...ThongTinCaNhan, tenBo: e.target.value })}
/>
                            </Grid>
                            <Grid item size={12}>
                                <TextField label="Năm sinh" variant="outlined" size="small" InputLabelProps={{ shrink: ThongTinCaNhan.maSinhVien ? true : false }} 
                                           fullWidth 
                                           value={ThongTinCaNhan.namSinhBo} // Gán giá trị từ state
                                           onChange={(e) => setThongTinCaNhan({ ...ThongTinCaNhan, namSinhBo: e.target.value })}
/>
                            </Grid>
                            <Grid item size={12}>
                                <TextField label="Nghề nghiệp, chức vụ" variant="outlined" size="small" InputLabelProps={{ shrink: ThongTinCaNhan.maSinhVien ? true : false }} 
                                           fullWidth 
                                           value={ThongTinCaNhan.ngheNghiepBo} // Gán giá trị từ state
                                           onChange={(e) => setThongTinCaNhan({ ...ThongTinCaNhan, ngheNghiepBo: e.target.value })}
/>
                            </Grid>
                            <Grid item size={12}>
                                <TextField label="Nơi làm việc" variant="outlined" size="small" InputLabelProps={{ shrink: ThongTinCaNhan.maSinhVien ? true : false }} 
                                           fullWidth 
                                           value={ThongTinCaNhan.noiLamViecBo} // Gán giá trị từ state
                                           onChange={(e) => setThongTinCaNhan({ ...ThongTinCaNhan, noiLamViecBo: e.target.value })}
/>
                            </Grid>
                            <Grid item size={12}>
                                <TextField label="Điện thoại" variant="outlined" size="small" InputLabelProps={{ shrink: ThongTinCaNhan.maSinhVien ? true : false }} 
                                           fullWidth 
                                           value={ThongTinCaNhan.sDTBo} // Gán giá trị từ state
                                           onChange={(e) => setThongTinCaNhan({ ...ThongTinCaNhan, sDTBo: e.target.value })}
/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item sx={{padding: "0", border: "1px solid #ccc", borderRadius: "4px", overflow: "hidden"}}
                          size={6}>
                        <Box sx={{
                            backgroundColor: "rgba(32, 61, 115, 0.92)",
                            width: "100%",
                            height: "40px",
                            display: "flex",
                            alignItems: "center",
                            paddingLeft: "20px"
                        }}>
                            <Typography sx={{color: "white", fontWeight: "bold"}}>
                                THÔNG TIN MẸ
                            </Typography>
                        </Box>
                        <Grid container spacing={2} sx={{padding:"20px"}}>
                            <Grid item size={12}>
                                <TextField label="Họ tên Mẹ" variant="outlined" size="small" InputLabelProps={{ shrink: ThongTinCaNhan.maSinhVien ? true : false }} 
                                           fullWidth 
                                           value={ThongTinCaNhan.tenMe} // Gán giá trị từ state
                                           onChange={(e) => setThongTinCaNhan({ ...ThongTinCaNhan, tenMe: e.target.value })}
/>
                            </Grid>
                            <Grid item size={12}>
                                <TextField label="Năm sinh" variant="outlined" size="small" InputLabelProps={{ shrink: ThongTinCaNhan.maSinhVien ? true : false }} 
                                           fullWidth 
                                           value={ThongTinCaNhan.namSinhMe} // Gán giá trị từ state
                                           onChange={(e) => setThongTinCaNhan({ ...ThongTinCaNhan, namSinhMe: e.target.value })}
/>
                            </Grid>
                            <Grid item size={12}>
                                <TextField label="Nghề nghiệp, chức vụ" variant="outlined" size="small" InputLabelProps={{ shrink: ThongTinCaNhan.maSinhVien ? true : false }} 
                                           fullWidth 
                                           value={ThongTinCaNhan.ngheNghiepMe} // Gán giá trị từ state
                                           onChange={(e) => setThongTinCaNhan({ ...ThongTinCaNhan, ngheNghiepMe: e.target.value })}
/>
                            </Grid>
                            <Grid item size={12}>
                                <TextField label="Nơi làm việc" variant="outlined" size="small" InputLabelProps={{ shrink: ThongTinCaNhan.maSinhVien ? true : false }} 
                                           fullWidth 
                                           value={ThongTinCaNhan.noiLamViecMe} // Gán giá trị từ state
                                           onChange={(e) => setThongTinCaNhan({ ...ThongTinCaNhan, noiLamViecMe: e.target.value })}
/>
                            </Grid>
                            <Grid item size={12}>
                                <TextField label="Điện thoại" variant="outlined" size="small" InputLabelProps={{ shrink: ThongTinCaNhan.maSinhVien ? true : false }} 
                                           fullWidth 
                                           value={ThongTinCaNhan.sDTMe} // Gán giá trị từ state
                                           onChange={(e) => setThongTinCaNhan({ ...ThongTinCaNhan, sDTMe: e.target.value })}
/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container onClick={updateThongTinCaNhan}>
                    <Grid item size={2}>
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: 'green',
                                '&:hover': { backgroundColor: 'darkgreen' }
                            }}
                        >
                            Cập nhật
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};
