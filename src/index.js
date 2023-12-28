import ReactDOM from "react-dom/client";
import HomeLayout from "./components/HomeLayout/HomeLayout";
import Databinding from "./DataBinding/Databinding";
//import scss ở index (Vì import ở bất kì file nào khi build vẫn ra index.html)
import "./assets/scss/style.scss";
import StyleComponent from "./StyleComponent/StyleComponent";
import HandleEvent from "./HandleEvent/HandleEvent";
import ChangeFontSize from "./StateDemo/ChangeFontSize";
import ChangeColor from "./StateDemo/ChangeColor";
import ChangeAvatar from "./StateDemo/ChangeAvatar";
import ChangeCarColor from "./StateDemo/ChangeCarColor";
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

//Tạo root trên thẻ div#root
const root = ReactDOM.createRoot(document.getElementById("root"));
//JSX
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="" element={<HomeTemplate />}>
        <Route path="gio-hang" element={<BaiTapGioHang />}></Route>
        <Route path="bt-change-color" element={<ChangeColor />} />
        <Route index element={<BaiTapGioHang />}></Route>
        <Route path="react-form" element={<ReactForm />}></Route>
        <Route path="react-life-cycle" element={<ReactLifeCycle />} />
      </Route>
      <Route path="user" element={<UserTemplate />}>
        <Route index element={<Login />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="register" element={<Register />}></Route>
      </Route>
      <Route path="admin" element={<Admin />} />
      <Route path="*" element={<Navigate to="/" />}></Route>
    </Routes>
  </BrowserRouter>
);
