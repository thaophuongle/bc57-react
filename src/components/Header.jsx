import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
 class Header extends Component {
  render() {
    const {tongSoLuong, tongTien} = this.props
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="/">
          ReactJS
        </NavLink>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        />
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav me-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <NavLink className={({ isActive }) =>
           isActive ? "nav-link active" : "nav-link"
         } to="gio-hang" aria-current="page" style={({isActive}) => isActive ? {border: '1px solid orange'} : {}}>
                Giỏ Hàng 
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) =>
           isActive ? "nav-link active" : "nav-link"
         } to="bt-change-color" style={({isActive}) => isActive ? {border: '1px solid orange'} : {}}>
                State Demo
              </NavLink>
            </li>
            <li className="nav-item">
            <NavLink className={({ isActive }) =>
           isActive ? "nav-link active" : "nav-link"
         } to="/react-form" style={({isActive}) => isActive ? {border: '1px solid orange'} : {}}>
                React Form
              </NavLink>
            </li>
            <li className="nav-item">
            <NavLink className={({ isActive }) =>
           isActive ? "nav-link active" : "nav-link"
         } to="/react-life-cycle" style={({isActive}) => isActive ? {border: '1px solid orange'} : {}}>
                React Life Cycle
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="dropdownId"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Redux
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownId">
                <NavLink className="dropdown-item" to="/redux-change-number">
                  Change Number
                </NavLink>
                <NavLink className="dropdown-item" to="/redux-change-car">
                  Change Car
                </NavLink>
                <NavLink className="dropdown-item" to="/redux-change-font-size">
                  Change Font Size
                </NavLink>
                <NavLink className="dropdown-item" to="/redux-gio-hang">
                  Bài tập giỏ hàng
                </NavLink>
              </div>
            </li>
          </ul>
          <form className="d-flex my-2 my-lg-0">
            <NavLink to="redux-gio-hang" className={"nav-link mx-5 text-white"}>
              <i className="fa fa-2x fa-cart-plus"></i> ({tongSoLuong} - {tongTien.toLocaleString()})
            </NavLink>
          </form>
        </div>
      </nav>

      // <div className="bg-dark text-white d-flex d-3">

      // <NavLink
      //   className={({ isActive }) =>
      //     isActive ? "bg-white text-dark p-3 mx-2" : "text-white mx-2"
      //   }
      //   to="/"
      // >
      //   Home
      // </NavLink>
      // <NavLink
      //   className={({ isActive }) =>
      //     isActive ? "bg-white text-dark p-3 mx-2" : "text-white mx-2"
      //   }
      //   to="/gio-hang"
      // >
      //   Cart
      // </NavLink>
      // <NavLink
      //   className={({ isActive }) =>
      //     isActive ? "bg-white text-dark p-3 mx-2" : "text-white mx-2"
      //   }
      //   to="/bt-change-color"
      // >
      //   Change Color
      // </NavLink>
      //</div>
    );
  }
}

const mapStateToProps = (state) => {
  let {gioHang} = state.gioHangState;
  let tongSoLuong = 0;
  let tongTien = 0;
  for (let spGH of gioHang ){
      tongSoLuong += spGH.soLuong;
      tongTien += spGH.soLuong * spGH.giaBan
  }
  //this.props = {tongSoLuong,tongTien}
  return {
      tongSoLuong,
      tongTien
  }
}

export default connect(mapStateToProps)(Header)