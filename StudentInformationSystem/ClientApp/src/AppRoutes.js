import { Home } from "./components/Home";
import {ThongTinCaNhan} from "./components/ThongTinCaNhan/ThongTinCaNhan";
const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/dich-vu-truc-tuyen/thong-tin-ca-nhan',
    element: <ThongTinCaNhan />
  },
];

export default AppRoutes;
