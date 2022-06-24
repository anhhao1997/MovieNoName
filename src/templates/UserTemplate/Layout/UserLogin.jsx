import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import image from "../../../assets/img/marvel_login.jpg";
import { dangNhapAction } from "../../../redux/actions/QuanLyNguoiDungAction";

//***************
//1. Install formik yup (npm i formik yup) | Dùng useFormik, handleChange, handleSubmit để khai báo và lấy ra value từ input
//2. Tạo ra service: QuanLyNguoiDungService với param truyền vào là thongTinDangNhap - là values được lấy ra từ input
//3. Tạo action: dangNhapAction với param truyền vào cũng là thongTinDangNhap
//4. Tạo type cho DANG_NHAP_ACTION
//5. Bắt case và xử lý trên QuanLyNguoiDungReducer

export default function UserLogin() {
  const dispatch = useDispatch();

  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);

  console.log("userLogin", userLogin);

  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    onSubmit: (values) => {
      const action = dangNhapAction(values);
      dispatch(action);
      console.log("values", values);
    },
  });

  return (
    <div style={{ backgroundImage: `url(${image})`, minHeight: "100vh" }} className="w-[100vw] h-[100vh] bg-cover bg-center bg-no-repeat">
      <div className="bg-black bg-opacity-60 w-[100vw] h-[100vh] bg-clip-padding backdrop-blur-lg">
        <div className="flex justify-center items-center w-[100vw] h-[100vh]">
          <div className="py-3 bg-white/20 w-[90vw] h-[65vh] sm:w-[500px] md:w-[450px] rounded">
            <h1 className="text-center text-white tracking-wider py-2 sm:py-3 uppercase">Đăng nhập</h1>
            <div className="px-2 text-white">
              <div className="content">
                {/* //dùng handleSubmit */}
                <form onSubmit={formik.handleSubmit} action="#">
                  <div className="field">
                    <input name="taiKhoan" onChange={formik.handleChange} type="text" placeholder="Tài khoản" required />
                    <span className="fa fa-user" />
                  </div>
                  <div className="field">
                    <input name="matKhau" onChange={formik.handleChange} type="password" placeholder="Password" />
                    <span className="fa fa-lock" />
                  </div>
                  <NavLink className="forget" to="#">
                    Quên mật khẩu?
                  </NavLink>
                  <button type="submit" className="login">
                    Đăng nhập
                  </button>
                  <div className="text-center">
                    <div className="or">Or</div>
                    <div className="icon-button">
                      <span className="facebook mr-2">
                        <i className="fab fa-facebook-f mr-1"></i>Facebook
                      </span>
                      <span>
                        <i className="fab fa-google" /> Google
                      </span>
                    </div>
                    <div className="h-full mt-3">
                      Bạn chưa có tài khoản?{" "}
                      <NavLink className="text-blue-300 font-semibold" to="/register">
                        Đăng ký
                      </NavLink>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
