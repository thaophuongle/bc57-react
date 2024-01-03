import ReactDOM from "react-dom/client";
import HomeLayout from "./components/HomeLayout/HomeLayout";
import Databinding from "./DataBinding/Databinding";
//import scss ở index (Vì import ở bất kì file nào khi build vẫn ra index.html)
import "./assets/scss/style.scss";
import StyleComponent from "./StyleComponent/StyleComponent";
import HandleEvent from "./HandleEvent/HandleEvent";
import ChangeFontSize from "./DemoRedux/ChangeFontSize";
import ChangeColor from "./StateDemo/ChangeColor";
import ChangeAvatar from "./StateDemo/ChangeAvatar";
import RenderWithMap from "./RenderWithMap/RenderWithMap";
import DemoProps from "./Props/DemoProps/DemoProps";
import EXRenderProductList from "./Props/EXRenderProductList/EXRenderProductList";
import BaiTapXemChiTiet from "./Props/BaiTapXemChiTiet/BaiTapXemChiTiet";
import BaiTapGioHang from "./Props/BaiTapGioHang/BaiTapGioHang";

//cấu hình router dom
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import HomeTemplate from "./templates/HomeTemplate";
import UserTemplate from "./templates/UserTemplate";
import Login from "./Pages/Login";
import Page404 from "./Pages/Page404";
import Register from "./Pages/Register";
import Admin from "./Pages/Admin";
import ReactForm from "./Pages/ReactForm/ReactForm";
import ReactLifeCycle from "./Pages/ReactLifeCycle/ReactLifeCycle";
import ChangeNumberRedux from "./DemoRedux/ChangeNumberRedux";
import ChangeCarColor from "./DemoRedux/ChangeCarColor";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import BaiTapGioHangRedux from "./DemoRedux/BaiTapGioHangRedux/BaiTapGioHangRedux";
import DanhSachSanPhamRedux from "./DemoRedux/BaiTapGioHangRedux/DanhSachSanPhamRedux";

//Tạo root trên thẻ div#root
const root = ReactDOM.createRoot(document.getElementById("root"));
//JSX

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomeTemplate />}>
          <Route index element={<DanhSachSanPhamRedux />}></Route>
          <Route path="gio-hang" element={<BaiTapGioHang />} />
          <Route path="bt-change-color" element={<ChangeColor />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="react-form" element={<ReactForm />}></Route>
          <Route path="react-life-cycle" element={<ReactLifeCycle />}></Route>
          <Route
            path="redux-change-number"
            element={<ChangeNumberRedux />}
          ></Route>
          <Route path="redux-change-car" element={<ChangeCarColor />}></Route>
          <Route
            path="redux-change-font-size"
            element={<ChangeFontSize />}
          ></Route>
          <Route path="redux-gio-hang" element={<BaiTapGioHangRedux />}></Route>
        </Route>
        <Route path="user" element={<UserTemplate />}>
          <Route index element={<Login />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
        </Route>
        <Route path="admin" element={<Admin />}></Route>
        <Route path="*" element={<Navigate to="" />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
