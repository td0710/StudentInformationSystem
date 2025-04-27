import { Nav, Text, mergeStyles } from '@fluentui/react';
import { pink } from '@mui/material/colors';
import React, { useState } from 'react';
// Dữ liệu của các nhóm liên kết
const navLinkGroups = [
  {
    links: [
      { name: 'Home', url: '/', key: 'HomePage', icon: 'HomeSolid' },
    ],
  },
  {
    name: 'Dịch vụ trực tuyến',
    links: [
      { name: 'Đăng ký vé xe buýt', url: '/dich-vu-truc-tuyen/dang-ky-ve-xe-buyt', key: 'DICHVUTRUCTUYEN_DANGKYVEXEBUYT', icon: 'BusSolid' },
      { name: 'Giấy xác nhận sinh viên', url: '/dich-vu-truc-tuyen/giay-xac-nhan-sinh-vien', key: 'DichVuTrucTuyen_GiayXacNhanSinhVien', icon: 'QuickNoteSolid' },
      { name: 'Tuyến xe buýt', url: '/dich-vu-truc-tuyen/tuyen-xe-buyt', key: 'DICHVUTRUCTUYEN_TUYENXEBUYT', icon: 'Bus' },
    ],
  },
  {
    name: 'Ký túc xá',
    links: [
      { name: 'Công nợ', url: '/ky-tuc-xa/cong-no', key: 'KyTucXa_CongNo', icon: 'AllCurrency' },
      { name: 'Yêu cầu hỗ trợ', url: '/ky-tuc-xa/yeu-cau-ho-tro', key: 'KyTucXa_YeuCauHoTro', icon: 'IssueSolid' },
    ],
  },
  {
    name: 'Khảo sát',
    links: [
      { name: 'Giảng viên', url: '/khao-sat/giang-vien', key: 'KhaoSat_GiangVien', icon: 'ClipboardSolid' },
      { name: 'Cố vấn học tập', url: '/khao-sat/co-van-hoc-tap', key: 'KhaoSat_CoVanHocTap', icon: 'ReadingModeSolid' },
      { name: 'Rèn luyện sinh viên', url: '/khao-sat/ren-luyen-sinh-vien', key: 'KhaoSat_RenLuyenSinhVien', icon: 'PageListSolid' },
      { name: 'Khác', url: '/khao-sat/khac', key: 'Khao_SatKhac', icon: 'FeedbackRequestSolid' },
    ],
  },
  {
    name: 'Tốt nghiệp',
    links: [
      { name: 'Thanh toán tài sản', url: '/sinh-vien-tot-nghiep/thanh-toan-tai-san', key: 'SinhVienTotNghiep_ThanhToanTaiSan', icon: 'Money' },
    ],
  },
  {
    name: 'Covid-19',
    links: [
      { name: 'Loại vắc xin', url: '/covid-19/loai-vac-xin', key: 'Covid19_LoaiVacXin', icon: 'EditSolid12' },
      { name: 'Đăng ký tiêm', url: '/covid-19/dang-ky-tiem', key: 'Covid19_DangKyTiem', icon: 'TaskSolid' },
    ],
  },
  {
    name: 'Cá nhân',
    links: [
      { name: 'Cập nhật thông tin', url: '/ca-nhan/cap-nhat-thong-tin', key: 'CaNhan_CapNhatThongTin', icon: 'AuthenticatorApp' },
      { name: 'Thoát', url: '#', key: 'key4', icon: 'OutOfOffice' },
    ],
  },
];

const textStyles = mergeStyles({
  fontWeight: '600',
  fontSize: '12px',
});
const navStyles = {
  root: {
    minWidth: 208,
    // height: 350,
    boxSizing: 'border-box',
    // border: '1px solid #eee',
    overflowY: 'auto',
    marginTop: '30px'
  },
  // these link styles override the default truncation behavior
  link: {
    whiteSpace: 'normal',
    lineHeight: 'inherit',
    selectors: {
      ':hover': {
        backgroundColor: '#fafafa', // Thay đổi màu nền khi hover
        // color: '#424242',           // Thay đổi màu chữ khi hover
        textDecoration: 'none',     // Xóa gạch chân nếu có
      },
      '::after': {
        borderLeft: '3px solid rgb(0, 120, 212)',
        content: "",
        position: 'absolute',
        inset: '0px',
        pointerEvents: 'none',
        // backgroundColor: 'rgb(250, 250, 250)',
        textDecoration: 'none',
      },
    },
  },
  groupContent: {
    marginBottom: '18px'
  },
  compositeLink: {
    selectors: {
      // '&.is-selected': {
      // },
      //   '&.is-selected .ms-Nav-link': {
      //   },
      //   '&.is-selected .ms-Button-flexContainer': {
      //   },
      //   '&.is-selected .ms-Nav-linkText': {
      //   },
    },
  },
  linkText: {
    marginLeft: '12px', // Cách icon và text 16px
  },
};
// Hàm tùy chỉnh để render tiêu đề của nhóm
function _onRenderGroupHeader(group) {
  return <Text className={textStyles}>{group.name}</Text>;
  // return <Text variant="xLarge" className={textStyles}>{group.name}</Text>;
}

export const NavMenu = () => {

  return (
      <div>
        <Nav onRenderGroupHeader={_onRenderGroupHeader} groups={navLinkGroups} styles={navStyles} />
      </div>
  );
};