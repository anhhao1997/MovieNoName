import React from "react";
import { NavLink, Redirect, Route } from "react-router-dom";
import { USER_LOGIN } from "./../../util/settings/config";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import { Layout, Menu } from "antd";
import logo from "../../assets/img/logo_Noname.png";
import { history } from "../../App";
import { useDispatch } from 'react-redux/es/exports';
import { DANG_XUAT_ACTION } from "../../redux/actions/types/QuanLyNguoiDungType";
const { Header, Content, Footer, Sider } = Layout;

const AdminTemplate = (props) => {
    //path, exact, Component

    const { Component, ...restProps } = props;
    const dispatch = useDispatch()
    const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);
    console.log("user", userLogin);
    // kiểm tra user đã login chưa
    if (!localStorage.getItem(USER_LOGIN)) {
        return <Redirect to="/login" />;
    }
    // kiểm tra user có phải quản trị với maLoaiNguoiDung
    if (userLogin.maLoaiNguoiDung !== "QuanTri") {
        alert("Bạn không có quyền truy cập vào trang này!");
        return <Redirect to="/" />;
    }

    return (
        <Route
            {...restProps}
            render={(propsRoute) => {
                //props.location,props.history,props.match

                return (
                    <Fragment>
                        <Layout
                            style={{
                                maxwidth: "100vw",
                                minHeight: "100vh",
                            }}
                        >
                            <Sider>
                                <div className="text-white mt-4 mb-4">
                                    <NavLink to="/home">
                                        <div style={{ backgroundImage: `url(${logo})`, width: "100%", height: "70px", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}></div>
                                    </NavLink>
                                </div>
                                <div>
                                    <Menu theme="dark" mode="inline">
                                        <div className="menu-content p-1 mt-3 text-lg">
                                            <div className="menu-content-item p-3 w-full">
                                                <NavLink to={"/admin/manager"} style={{ display: "block" }}>
                                                    <i className="fa fa-user"></i>
                                                    <span className="pl-3">User</span>
                                                </NavLink>
                                            </div>
                                            <div className="menu-content-item p-3">
                                                <NavLink to={"/admin/films"} style={{ display: "block" }}>
                                                    <i className="fas fa-photo-video"></i>
                                                    <span className="pl-3">Films</span>
                                                </NavLink>
                                            </div>
                                        </div>
                                    </Menu>
                                </div>
                            </Sider>
                            <Layout className="site-layout">
                                <Header className="header-admin bg-slate-700 text-lg text-white d-flex justify-end align-items-center">
                                    <div className="mr-20 userLoin">
                                        {userLogin.hoTen}
                                        <button
                                            className="btn"
                                            onClick={() => {
                                                const action = {
                                                    type: DANG_XUAT_ACTION,
                                                };
                                                dispatch(action);
                                                history.push("/home");
                                            }}
                                        >
                                            <i className="fas fa-sign-out-alt" style={{ fontSize: "30px" }} />
                                        </button>
                                    </div>
                                </Header>
                                <Content>
                                    {/* truyền component */}
                                    <Component {...propsRoute} />
                                </Content>
                            </Layout>
                        </Layout>
                    </Fragment>
                );
            }}
        />
    );
};

export default AdminTemplate;
