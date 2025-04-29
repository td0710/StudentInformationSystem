import {Box, Button, Divider, TextField, Typography} from "@mui/material";
import { RadioGroup, FormControlLabel, Radio, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Sidebar } from "../Layout/Sidebar";
import TuyenXeBuyt from "../../models/TuyenXeBuytModel";
import ThongTinVeXeBuytModel from "../../models/ThongTinVeXeBuytModel";
import axios from "axios";
import Swal from "sweetalert2";

export const DangKyVeXeBus = () => {
    const menuItems = [
        { text: 'Đăng ký vé xe buýt', route: "/dich-vu-truc-tuyen/dang-ky-ve-xe-buyt" },
        { text: 'Giấy đăng ký làm vé tháng', route: "/dich-vu-truc-tuyen/giay-dang-ky-xe-buyt" },
        { text: 'Trở lại',route: "/" }
    ];

    const [listTuyen, setListTuyen] = useState([]);
    const [selectedTuyen, setSelectedTuyen] = useState("");
    const [selectedTuyenId, setSelectedTuyenId] = useState(""); 
    const [selectedImage, setSelectedImage] = useState(null);
    const [sdt,setSDT] = useState("") ; 
    async function base64ConversionForImages(e) {
        if (e.target.files[0]) {
            getBase64(e.target.files[0]);
        }
    }

    function getBase64(file) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            setSelectedImage(reader.result);
        };
        reader.onerror = function (error) {
            console.log("Error", error);
        };
    }
    const createVeXeBuyt = async () => {
        const url = `${process.env.REACT_APP_API_URL}/api/vexebuyt/create`
        
        const loaiThe = selectedTuyen == "motTuyen" ? 1 : 2 ;
        const veXeBuytModel = new ThongTinVeXeBuytModel(
            "223030609",         
            selectedImage,       
            loaiThe,                   
            sdt      
        );
        const response = await axios.post(url,veXeBuytModel)
        console.log(response);
        if (response.status === 200) {
            Swal.fire({
                toast: true,
                text: 'Đăng ký vé xe buýt thành công!',
                icon: "success",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                position: "top",
            });
        }
    }
    useEffect(() => {
        const fetchTuyenXeBuyt = async () => {
            const url = `${process.env.REACT_APP_API_URL}/api/tuyenxebuyt/get-all`
            const response = await axios.get(url);
            console.log(response.data);
            const danhSachTuyenXe = response.data.data.map(item => new TuyenXeBuyt(item.id, item.ten, item.maTuyen));
            setListTuyen(danhSachTuyenXe);
        };
        fetchTuyenXeBuyt();
    }, []);
    return (
        <Box sx={{ display: 'flex' }}>
            <Sidebar menuItems={menuItems} />
            <Box component="main" sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 5,
                p: 5,
                width: 1180
            }}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "25px" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }} fullWidth>
                        <Typography variant="h5">
                            Đăng ký làm vé tháng xe buýt
                        </Typography>

                        <Divider variant="fullWidth" sx={{ borderColor: 'black', borderWidth: 2 }} />

                        <Box sx={{ marginTop: "20px" }}>
                            <TextField label="Số điện thoại" variant="outlined" size="small"
                                       fullWidth required
                                       sx={{
                                           width: "300px",
                                           marginTop: "10px"
                                       }}
                                       onChange={(e) => setSDT(e.target.value)}

                            />
                        </Box>
                        <div style={{ padding: 9 }}>
                            <FormControl>
                                <Typography variant="subtitle1">Loại Tuyến <span style={{color:"red"}}>*</span></Typography>
                                <RadioGroup
                                    sx={{marginTop:"10px"}}
                                    row
                                    value={selectedTuyen}
                                    onChange={(e) => setSelectedTuyen(e.target.value)} // Cập nhật selectedTuyen khi thay đổi
                                >
                                    <FormControlLabel value="motTuyen" control={<Radio />} label="Một tuyến" />
                                    <FormControlLabel value="lienTuyen" control={<Radio />} label="Liên tuyến" />
                                </RadioGroup>
                            </FormControl>

                            {selectedTuyen === "motTuyen" && (
                                <FormControl fullWidth margin="normal">
                                    <InputLabel id="select-tuyen-label">Chọn tuyến</InputLabel>
                                    <Select
                                        labelId="select-tuyen-label"
                                        value={selectedTuyenId} // Giá trị của dropdown là selectedTuyenId
                                        onChange={(e) => setSelectedTuyenId(e.target.value)}
                                        label="Chọn tuyến"
                                        MenuProps={{
                                            PaperProps: {
                                                style: {
                                                    maxHeight: 200, // Đặt chiều cao tối đa của dropdown
                                                    overflowY: 'auto', // Kích hoạt cuộn khi quá nhiều item
                                                },
                                            },
                                        }}
                                    >
                                        {listTuyen.map((tuyen) => (
                                            <MenuItem key={tuyen.id} value={tuyen.id}>
                                                [{tuyen.maTuyen}]  {tuyen.ten}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            )}
                        </div>
                        <Box>
                            <Box sx={{ marginTop: "10px" }}>
                                <Typography variant="subtitle1" sx={{marginBottom:"10px"}}>
                                    Ảnh làm thẻ (File ảnh yêu cầu mặt nhìn thẳng, rõ mặt, nét ảnh, nền 1 màu, chấp nhận ảnh tự chụp đúng quy cách)
                                </Typography>
                                <input
                                    type="file"
                                    accept="image/*"
                                    id="upload-image"
                                    style={{ display: "none" }}
                                    onChange={base64ConversionForImages}
                                />
                                <label htmlFor="upload-image">
                                    <Button
                                        variant="outlined"
                                        component="span"
                                        sx={{
                                            padding: "10px 20px",
                                            textTransform: "none",
                                            borderRadius: "8px",
                                            backgroundColor: "#172d56",
                                            color: "#fff",
                                            "&:hover": {
                                                backgroundColor: "#0056b3",
                                            },
                                        }}
                                    >
                                        Chọn ảnh
                                    </Button>
                                </label>
                                    {selectedImage && (
                                        <Box sx={{ marginTop: "20px" }}>
                                            <Typography>Ảnh đã chọn:</Typography>
                                            <img src={selectedImage} alt="Uploaded preview" style={{ width: "200px", marginTop: "10px", borderRadius: "10px" }} />
                                        </Box>
                                    )}
                            </Box>
                        </Box>
                        <Button
                            variant="contained"
                            sx={{
                                width:"105px",
                                marginTop: "20px",
                                padding: "10px 20px",
                                textTransform: "none",
                                borderRadius: "8px",
                                backgroundColor: "#28a745", 
                                color: "#fff",
                                fontWeight: "bold",
                                "&:hover": {
                                    backgroundColor: "#218838", 
                                },
                            }}
                            onClick={createVeXeBuyt}
                        >
                            Đăng ký
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
