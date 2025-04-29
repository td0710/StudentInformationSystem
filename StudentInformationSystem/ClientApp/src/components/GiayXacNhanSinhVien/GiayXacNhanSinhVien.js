import {Sidebar} from "../Layout/Sidebar";
import React, {useEffect, useState} from "react";
import {Box, Button, Divider, FormControl, InputLabel, MenuItem, Paper, Select, Typography} from "@mui/material";
import axios from "axios";
import LoaiGiayXacNhanModel from "../../models/LoaiGiayXacNhanModel";
import GiayXacNhanModel from "../../models/GiayXacNhanModel";
import Swal from "sweetalert2";
import {DataGrid} from "@mui/x-data-grid";

export const GiayXacNhanSinhVien = () => {

    const [loaiGiayXacNhan,setLoaiGiayXacNhan] = useState([]);
    const [giayXacNhan,setGiayXacNhan] = useState([]);
    const [selectedGiayXacNhan,setSelectedGiayXacNhan] = useState("");
    const menuItems = [
        { text: 'Giấy xác nhận sinh viên', route: "" },
        { text: 'Trở lại', route: "/" }
    ];
    const TrangThaiEnum = {
        1: 'Đang tiếp nhận',
        2: 'Hoàn thành',
        3: 'Từ chối',
        4: 'Đã tiếp nhận'
    };
    const paginationModel = { page: 0, pageSize: 5 };
    const columns = [
        {
            field: 'stt',
            headerName: 'STT',
            width: 60,
            renderCell: (params) => params.row.id,  
        },
        { field: 'loaiGiay', headerName: 'Loại giấy', width: 410 },
        { field: 'ngayTao', headerName: 'Ngày tạo', width: 90 },
        {
            field: 'trangThai',
            headerName: 'Trạng thái',
            width: 125,
        },
        { field: 'noiNhan', headerName: 'Nơi nhận', width: 120 },
        { field: 'ghiChu', headerName: 'Ghi chú', width: 300 },
    ];

    const rows = giayXacNhan.map((item, index) => ({
        id: index + 1, // `id` ở đây chỉ để DataGrid bắt buộc cần unique key (không hiển thị)
        stt: index + 1, // Đây mới là STT hiển thị
        loaiGiay: loaiGiayXacNhan.find(loai => loai.id === item.loaiGiayXN)?.tenGiayXacNhan || "Không xác định",
        ngayTao: item.ngayTao ? new Date(item.ngayTao).toLocaleDateString('vi-VN') : '',
        trangThai: TrangThaiEnum[item.trangThai] || "Không xác định",
        noiNhan: item.noiNhan,
        ghiChu: item.ghiChu,
    }));
    useEffect(() => {
        const fetchLoaiGiayXacNhan = async () => {
            const url = `${process.env.REACT_APP_API_URL}/api/loaigiayxacnhan/get`;
            
            const response = await axios.get(url);
            
            const loaiGiayXacNhan = response.data.data.map((item) => 
                new LoaiGiayXacNhanModel(item.id,item.tenGiayXacNhan));
            
            setLoaiGiayXacNhan(loaiGiayXacNhan);
        }
        fetchLoaiGiayXacNhan();
    }, []);
    
        const fetchDanhSachGiayXacNhan = async () => {
            const url = `${process.env.REACT_APP_API_URL}/api/giayxacnhan/get?MSV=223030609`
            
            const response = await axios.get(url)
            
            const giayXacNhan = response.data.data.map((item) =>
                new GiayXacNhanModel(item.id,item.maSinhVien,item.loaiGiayXN,
                    item.ngayTao,item.trangThai,item.ngayNhan,item.noiNhan,item.ghiChu)
            )
            
            setGiayXacNhan(giayXacNhan);
            
            console.log(response)
            
        }
    useEffect(() => {
        fetchDanhSachGiayXacNhan();
    },[])
    const createGiayXacNhan = async () => {
        const url = `${process.env.REACT_APP_API_URL}/api/giayxacnhan/create`;
        
        const body = {
            maSinhVien : "223030609",
            loaiGiayXn: selectedGiayXacNhan
        }
        
        const response = await axios.post(url, body);
        fetchDanhSachGiayXacNhan();
        if (response.status === 200) {
            Swal.fire({
                toast: true,
                text: 'Tạo giấy xác nhận sinh viên thành công!',
                icon: "success",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                position: "top",
            });
        }
        console.log(response);
    }
    console.log(selectedGiayXacNhan);
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
                    <Typography variant="h5">
                        Cấp giấy Xác nhận sinh viên
                    </Typography>

                    <Divider variant="fullWidth" sx={{ borderColor: 'black', borderWidth: 2 }} />
                    <Box>
                        <Typography variant="subtitle1">Chọn loại giấy xác nhận: <span style={{color:"red"}}>*</span></Typography>
                        <FormControl fullWidth margin="normal">
                            <InputLabel id="select-tuyen-label">Chọn loại giấy xác nhận</InputLabel>
                            <Select
                                label="Chọn loại giấy xác nhận"
                                MenuProps={{
                                    PaperProps: {
                                        style: {
                                            maxHeight: 200, 
                                            overflowY: 'auto', 
                                        },
                                    },
                                }}
                                value={selectedGiayXacNhan} // Giá trị của dropdown là selectedTuyenId
                                onChange={(e) => setSelectedGiayXacNhan(e.target.value)}
                            >
                                {loaiGiayXacNhan.map((item) => (
                                    <MenuItem key={item.id} value={item.id}>
                                        {item.tenGiayXacNhan}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <Button
                            variant="outlined"
                            component="span"
                            sx={{
                                marginTop:"15px",
                                padding: "10px 20px",
                                textTransform: "none",
                                borderRadius: "8px",
                                backgroundColor: "#172d56",
                                color: "#fff",
                                "&:hover": {
                                    backgroundColor: "#0056b3",
                                },
                            }}
                            onClick={createGiayXacNhan}
                        >
                            Xin giấy XNSV
                        </Button>
                    </Box>
                    <Box>
                        <Typography variant="subtitle1">Danh sách giấy xác nhận sinh viên đã xin cấp</Typography>

                        <Divider variant="fullWidth" sx={{ borderColor: 'black', borderWidth: 2 }} />

                        
                        <Paper sx={{ height: 400, width: '100%', mt: 2 }}>
                            <DataGrid
                                rows={rows}
                                columns={columns}
                                initialState={{ pagination: { paginationModel } }}
                                pageSizeOptions={[5, 10]}
                                disableColumnFilter
                                disableColumnSelector
                                disableDensitySelector
                                disableRowSelectionOnClick
                                hideFooterSelectedRowCount
                                sx={{ border: 0 }}
                            />
                        </Paper>
                    </Box>

                    <Box sx={{ display: "flex", flexDirection: "column", gap: "15px",marginTop:"50px"}}>
                        
                        <Typography variant="h5">
                            Ngày hẹn trả kết quả được xác định cụ thể như sau
                        </Typography>

                        <Divider variant="fullWidth" sx={{borderColor: 'black', borderWidth: 2}}/>

                        <Box sx={{
                            backgroundColor: "#d9edf7",
                            height: "105 px", borderColor: "#bce8f1", color: "#31708f",
                            border: "1px solid transparent",
                            borderRadius: "4px",
                            padding: "15px",
                            paddingBottom: "15px",
                            marginTop:"20px"
                        }}>
                            <Typography v>
                                <strong>- GIẤY XÁC NHẬN SINH VIÊN ĐỂ NHẬN ƯU ĐÃI GIÁO DỤC:</strong>
                                Trả kết quả sau tối thiểu 12h làm việc; vào sáng Thứ 3 và chiều Thứ 5 hàng tuần.<br />
                                <strong>- ĐỊA ĐIỂM NHẬN:</strong> Tầng 1 nhà T1.<br />
                                <br />

                                <strong>- GIẤY XÁC NHẬN SINH VIÊN ĐỂ VAY VỐN TẠI NHCSXH ĐỊA PHƯƠNG:</strong>
                                Trả kết quả sau tối thiểu 12h làm việc; vào chiều thứ 3, chiều thứ 6 hàng tuần.<br />
                                <strong>- ĐỊA ĐIỂM NHẬN:</strong> Tầng 1 nhà T1.<br />
                                <br />

                                <strong>- GIẤY XÁC NHẬN SINH VIÊN ĐỂ GIẢI QUYẾT CÁC VẤN ĐỀ CÁ NHÂN KHÁC (Như: Miễn trừ thuế thu nhập, xin việc, du học, …):</strong>
                                Trả kết quả sau tối thiểu 12h làm việc; vào chiều thứ 2, sáng thứ 4 và sáng thứ 6 hàng tuần.<br />
                                <strong>- ĐỊA ĐIỂM NHẬN:</strong> Tầng 1 nhà T1.<br />
                                <br />

                                <strong>- GIẤY GIỚI THIỆU ĐĂNG KÝ XE MÁY:</strong>
                                Trả kết quả sau tối thiểu 12h làm việc; vào chiều thứ 2, sáng thứ 4 và sáng thứ 6 hàng tuần.<br />
                                <strong>- ĐỊA ĐIỂM NHẬN:</strong> Tầng 1 nhà T1.<br />
                                <br />

                                <strong>- NGÀY HẸN TRẢ KẾT QUẢ ĐƯỢC XÁC ĐỊNH CỤ THỂ NHƯ SAU:</strong>
                                Trả kết quả sau tối thiểu 12h làm việc; vào chiều thứ 2, sáng thứ 4 và sáng thứ 6 hàng tuần.<br />
                                <strong>- ĐỊA ĐIỂM NHẬN:</strong> Tầng 1 nhà T1.<br />
                                <strong>- KHI ĐẾN NHẬN KẾT QUẢ:</strong> Sinh viên phải nộp 02 ảnh thẻ 3x4 (đã rửa).<br />
                                <strong>- KẾT QUẢ:</strong> Sẽ được lưu tại Phòng trong vòng 2 tuần kể từ ngày hẹn trả kết quả. <strong>Sau thời gian lưu,</strong>
                                nếu sinh viên không đến lấy thì phải đăng ký lại.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}