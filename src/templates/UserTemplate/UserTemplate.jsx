// import { Layout } from "antd";
// import Sider from "antd/lib/layout/Sider";
import { useEffect, useState } from "react";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { USER_LOGIN } from "../../util/settings/config";
import UserSidebar from "./Layout/UserSidebar";

export const UserTemplate = (props) => {
  const { Component, ...restProps } = props;

  const { userLogin, thongTinNguoiDung } = useSelector((state) => state.QuanLyNguoiDungReducer);
  const { thongTinDatVe } = thongTinNguoiDung;

  const [sidebar, setSidebar] = useState();

  const callbackFunction = (sidebarStatus) => {
    setSidebar(sidebarStatus);
  };
  console.log(sidebar);

  if (!localStorage.getItem(USER_LOGIN)) {
    return <Redirect to="/login" />;
  }
  if (userLogin.maLoaiNguoiDung !== "KhachHang") {
    alert("Bạn không có quyền truy cập vào trang này!");
    return <Redirect to="/" />;
  }
  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <Fragment>
            <div className="relative flex flex-row" style={{ maxWidth: "100vw", height: "100vh" }}>
              <UserSidebar userLogin={userLogin} userCallback={callbackFunction} />
              <div
                className={`${
                  sidebar ? "left-[60px] w-[calc(100%-60px)] md:left-[280px] md:w-[calc(100%-280px)]" : "left-[60px] md:w-[calc(100%-60px)]"
                } absolute duration-300`}
              >
                <Component {...propsRoute} />
              </div>
            </div>
          </Fragment>
        );
      }}
    />
  );
};
