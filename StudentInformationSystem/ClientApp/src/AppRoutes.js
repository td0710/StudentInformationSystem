import { Home } from "./components/Home";
import {ThongTinCaNhan} from "./components/ThongTinCaNhan/ThongTinCaNhan";
import {DangKyVeXeBus} from "./components/DangKyVeXeBus/DangKyVeXeBus";
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
];

export default AppRoutes;
