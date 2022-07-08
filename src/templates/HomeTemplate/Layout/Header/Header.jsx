import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { USER_LOGIN } from "../../../../util/settings/config";

export default function Header(props) {
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);

  return (
    //Có chỉnh sửa phần header

    <div className="header-home fixed w-full text-white glassmorphism-black drop-shadow-2xl z-10">
      <header className="container">
        <nav className="navbar navbar-expand-lg navbar-dark ">
          <NavLink to="#">Logo</NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <div className="nav-content">
                <NavLink className="content-item" to="/">
                  Lịch chiếu phim
                </NavLink>
                <NavLink className="content-item" to="/">
                  Liên hệ
                </NavLink>
                <NavLink className="content-item" to="/">
                  Tin tức
                </NavLink>
              </div>
              <div className="nav-mode">
                {/* <span className="mode light-mode">
                  <i className="fa fa-sun" />
                </span>
                <span className="mode dark-mode">
                  <i className="fa fa-moon" />
                </span> */}
                <input type="checkbox" className="checkbox" id="chk" onChange={() => {
                  document.body.classList.toggle('dark')
                }} />
                <label className="label" for="chk">
                  <i className="fas fa-moon"></i>
                  <i className="fas fa-sun"></i>
                  <div className="ball"></div>
                </label>
              </div>
              <div className="nav-login">
                {localStorage.getItem(USER_LOGIN) ? (
                  "Xin chào " + userLogin.hoTen
                ) : (
                  <NavLink to="/register" className="login-item">
                    <i className="fa fa-user pr-2" />
                    Đăng kí / Đăng nhập
                  </NavLink>
                )}
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
