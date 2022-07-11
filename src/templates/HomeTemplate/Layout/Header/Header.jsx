import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

import { useSelector, useDispatch } from "react-redux";
import { USER_LOGIN } from "../../../../util/settings/config";
import { DANG_XUAT_ACTION } from "../../../../redux/actions/types/QuanLyNguoiDungType";
import { history } from "../../../../App";

export default function Header(props) {
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);
  const [nav, setNav] = useState(false);
  const dispatch = useDispatch();

  return (
    //Có chỉnh sửa phần header

    <div className="header-home fixed w-full text-white glassmorphism-black drop-shadow-2xl z-10">
      <header className="container">
        <nav className="navbar navbar-expand-lg navbar-dark ">
          <NavLink className="pl-2" to="/">
            Logo
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
            id="navbarMobile"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <div className="nav-content">
                <Link
                  className="content-item"
                  to="lichChieu"

                >
                  Lịch chiếu phim
                </Link>
                <Link className="content-item" to="contact">
                  Liên hệ
                </Link>
                <Link className="content-item" to="phim">
                  Phim hot
                </Link>
              </div>
              <div className="nav-mode">
                {/* <span className="mode light-mode">
                  <i className="fa fa-sun" />
                </span>
                <span className="mode dark-mode">
                  <i className="fa fa-moon" />
                </span> */}
                <input
                  type="checkbox"
                  className="checkbox"
                  id="chk"
                  onChange={() => {
                    document.getElementById("home").classList.toggle("dark");
                  }}
                />
                <label className="label" htmlFor="chk">
                  <i className="fas fa-moon"></i>
                  <i className="fas fa-sun"></i>
                  <div className="ball"></div>
                </label>
              </div>
              <div className="nav-login">
                <div className="header-checkout">
                  <div className="info-user text-center">
                    <div className="dropdown show">
                      <a
                        className="btn btn-secondary dropdown-toggle"
                        href="#"
                        role="button"
                        id="dropdownMenuLink"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span className="user-span">
                          <i className="fa fa-user" />
                        </span>
                      </a>
                      <div className="dropdown-menu dropdown-menu-center" aria-labelledby="dropdownMenuLink">
                        {localStorage.getItem(USER_LOGIN) ? (
                          <span className="item-drop">{"Xin chào " + userLogin.hoTen}</span>
                        ) : (
                          <NavLink to="/register" className="">
                            <span className="item-drop"> Đăng kí / Đăng nhập</span>
                          </NavLink>
                        )}

                        <NavLink className="item-drop" to="#">
                          <button>Lịch sử </button>
                        </NavLink>
                        <a className="item-drop">
                          <button
                            onClick={() => {
                              const action = {
                                type: DANG_XUAT_ACTION,
                              };
                              dispatch(action);
                              history.push("/home");
                            }}
                          >
                            Đăng xuất
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
