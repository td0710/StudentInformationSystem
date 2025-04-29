import { Box, Divider, Typography, Paper } from "@mui/material";
import { Sidebar } from "../Layout/Sidebar";
import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect, useState } from "react";
import axios from "axios";
import TuyenXeBuyt from "../../models/TuyenXeBuytModel";
import { VeXeBuytModel } from "../../models/VeXeBuytModel";

export const GiayDangKyXeBuyt = () => {
    const [listGiayDangKy, setListGiayDangKy] = useState([]);

    const TrangThaiEnum = {
        1: 'Đang tiếp nhận',
        2: 'Hoàn thành',
        3: 'Từ chối',
        4: 'Đã tiếp nhận'
    };

    useEffect(() => {
        const fetchData = async () => {
            const url = `${process.env.REACT_APP_API_URL}/api/vexebuyt/get-by-msv?maSinhVien=223030609`;
            const response = await axios.get(url);
            const danhSachGiayDangKy = response.data.data.map(item => new
            VeXeBuytModel(item.ngayTao, item.trangThai, item.ngayNhan, item.noiNhan, item.ghiChu));
            setListGiayDangKy(danhSachGiayDangKy);
            console.log(response);
        };
        fetchData();
    }, []);
    console.log(listGiayDangKy);

    const menuItems = [
        { text: 'Đăng ký vé xe buýt', route: "/dich-vu-truc-tuyen/dang-ky-ve-xe-buyt" },
        { text: 'Giấy đăng ký làm vé tháng', route: "/dich-vu-truc-tuyen/giay-dang-ky-xe-buyt" },
        { text: 'Trở lại', route: "/" }
    ];

    const columns = [
        {
            field: 'stt',
            headerName: 'STT',
            width: 90,
            renderCell: (params) => params.row.id,  // Hiển thị số thứ tự
        },
        { field: 'ngayTao', headerName: 'Ngày tạo', width: 130 },
        {
            field: 'trangThai',
            headerName: 'Trạng thái',
            width: 150,
        },
        { field: 'ngayNhan', headerName: 'Ngày nhận', width: 130 },
        { field: 'noiNhan', headerName: 'Nơi nhận', width: 150 },
        { field: 'ghiChu', headerName: 'Ghi chú', width: 300 },
    ];

    const rows = listGiayDangKy.map((item, index) => ({
        id: index + 1,
        ngayTao: item.ngayTao ? new Date(item.ngayTao).toLocaleDateString('vi-VN') : '',  // Định dạng ngày tháng theo định dạng 'dd/mm/yyyy'
        trangThai: TrangThaiEnum[item.trangThai],
        ngayNhan: item.ngayNhan ? new Date(item.ngayNhan).toLocaleDateString('vi-VN') : '',  // Định dạng ngày tháng theo định dạng 'dd/mm/yyyy'
        noiNhan: item.noiNhan,
        ghiChu: item.ghiChu,
    }));



    const paginationModel = { page: 0, pageSize: 5 };

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
                <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                    <Typography variant="h5">
                        Danh sách giấy đăng ký làm vé tháng xe buýt đã xin cấp
                    </Typography>

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
                <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                    <Typography variant="h5">
                        Lưu ý
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
                        <Typography>
                            <strong>- Ngày hẹn trả kết quả được xác định cụ thể như sau: </strong>
                            Trả kết quả sau tối thiểu 12h làm việc; vào chiều thứ 2, sáng thứ 4 và sáng thứ 6 hàng tuần.<br/>
                            <strong>- Địa điểm nhận </strong>Tầng 1 nhà T1.<br/>
                            <strong>- Khi đến nhận kết quả </strong>sinh viên phải nộp 02 ảnh thẻ 3x4 (đã rửa).
                            <strong> Kết quả </strong>sẽ được lưu tại Phòng trong vòng 2 tuần kể từ ngày hẹn trả kết quả. <strong>Sau thời gian lưu, </strong>
                            nếu sinh viên không đến lấy thì phải đăng ký lại.
                        </Typography>
                    </Box>
                </Box>
                </Box>
        </Box>
    );
};
