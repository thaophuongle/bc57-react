import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Header extends Component {
  render() {
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
              </div>
            </li>
          </ul>
          <form className="d-flex my-2 my-lg-0">
            <input
              className="form-control me-sm-2"
              type="text"
              placeholder="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
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
