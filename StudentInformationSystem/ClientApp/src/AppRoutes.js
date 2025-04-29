import { Home } from "./components/Home";
import {ThongTinCaNhan} from "./components/ThongTinCaNhan/ThongTinCaNhan";
import {DangKyVeXeBus} from "./components/DangKyVeXeBus/DangKyVeXeBus";
import {GiayDangKyXeBuyt} from "./components/DangKyVeXeBus/GiayDangKyXeBuyt";
import {GiayXacNhanSinhVien} from "./components/GiayXacNhanSinhVien/GiayXacNhanSinhVien";
const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/dich-vu-truc-tuyen/thong-tin-ca-nhan',
    element: <ThongTinCaNhan />
  },
  {
    path: '/dich-vu-truc-tuyen/dang-ky-ve-xe-buyt',
    element: <DangKyVeXeBus />
  },
  {
    path: '/dich-vu-truc-tuyen/giay-dang-ky-xe-buyt',
    element: <GiayDangKyXeBuyt />
  },
  {
    path: '/dich-vu-truc-tuyen/giay-xac-nhan-sinh-vien',
    element: <GiayXacNhanSinhVien />
  },
];

export default AppRoutes;
