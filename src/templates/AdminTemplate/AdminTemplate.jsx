import React from 'react'
import { history } from '../../App';
import { NavLink, Redirect, Route } from "react-router-dom";
import { USER_LOGIN, TOKEN } from "./../../util/settings/config";
import { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import { Breadcrumb, Layout, Menu } from 'antd';
const { Header, Content, Footer, Sider } = Layout;


const AdminTemplate = (props) => { //path, exact, Component

    const { Component, ...restProps } = props;

    const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer);
    console.log('user', userLogin);
    // kiểm tra user đã login chưa
    if (!localStorage.getItem(USER_LOGIN)) {
        return <Redirect to="/login" />;
    }
    // kiểm tra user có phải quản trị với maLoaiNguoiDung
    if (userLogin.maLoaiNguoiDung !== 'QuanTri') {
        alert('Bạn không có quyền truy cập vào trang này!');
        return <Redirect to="/" />;
    }


    return <Route {...restProps} render={(propsRoute) => { //props.location,props.history,props.match

        return (
            <Fragment>
                <Layout
                    style={{
                        maxwidth: '100vw',
                        minHeight: '100vh',
                    }}
                >
                    <Sider >
                        <div className="text-white text-center mt-4 mb-4">Logo</div>
                        <div>
                            <Menu theme="dark" mode="inline" >
                                <div className='menu-content p-1 mt-3 text-lg'>
                                    <div className='menu-content-item p-3 w-full'>
                                        <NavLink to={'/admin/users'} style={{ display: 'block' }}>
                                            <i className="fa fa-user"></i>
                                            <span className='pl-3'>User</span>
                                        </NavLink>
                                    </div>
                                    <div className='menu-content-item p-3'>
                                        <NavLink to={'/admin/films'} style={{ display: 'block' }}>
                                            <i className="fas fa-photo-video"></i>
                                            <span className='pl-3'>Films</span>
                                        </NavLink>
                                    </div>
                                </div>
                            </Menu>
                        </div>
                    </Sider>
                    <Layout className="site-layout">
                        <Header
                            className="header-admin bg-slate-700 text-lg text-white d-flex justify-end align-items-center"
                        >
                            <div className='mr-20 userLoin'>{userLogin.hoTen}</div>
                        </Header>
                        <Content
                        >
                            {/* truyền component */}
                            <Component {...propsRoute} />
                        </Content>
                    </Layout>
                </Layout>
            </Fragment>
        )
    }} />
}

export default AdminTemplate;