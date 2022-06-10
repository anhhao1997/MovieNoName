import React from "react";
import { NavLink } from "react-router-dom";

export default function Header(props) {
    return (
        //Có chỉnh sửa phần header

        <div className="fixed w-full text-white glassmorphism-black drop-shadow-2xl top-0 z-10">
            <header className="container mx-auto">
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
                                <span className="mode light-mode">
                                    <i className="fa fa-sun" />
                                </span>
                                <span className="mode dark-mode">
                                    <i className="fa fa-moon" />
                                </span>
                            </div>
                            <div className="nav-login">
                                <NavLink to="/login" className="login-item">
                                    <i className="fa fa-user pr-2" />
                                    Đăng kí / Đăng nhập
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
}
