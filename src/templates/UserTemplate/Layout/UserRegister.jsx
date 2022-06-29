import { useFormik } from "formik";
import * as yup from "yup";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import image from "../../../assets/img/minions_register.jpg";
import { dangKyAction, dangNhapAction } from "../../../redux/actions/QuanLyNguoiDungAction";

//***************
//1. Install formik yup (npm i formik yup) | Dùng useFormik, handleChange, handleSubmit để khai báo và lấy ra value từ input
//2. Tạo ra service: QuanLyNguoiDungService với param truyền vào là thongTinDangNhap - là values được lấy ra từ input
//3. Tạo action: dangNhapAction với param truyền vào cũng là thongTinDangNhap
//4. Tạo type cho DANG_NHAP_ACTION
//5. Bắt case và xử lý trên QuanLyNguoiDungReducer

export default function UserRegister() {
  const dispatch = useDispatch();

  const schema = yup.object().shape({
    matKhau: yup
      .string()
      .required("Bạn không được bỏ trống trường này")
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, "Bao gồm 8 ký tự, 1 chữ hoa, chữ thường và ký tự đặc biệt"),
  });

  const validate = (values) => {
    const errors = {};

    if (!values.taiKhoan) {
      errors.taiKhoan = "Bạn không được bỏ trống trường này";
    }

    if (!values.email) {
      errors.email = "Bạn không được bỏ trống trường này";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = "Địa chỉ email không hợp lệ, hãy nhập lại";
    }
    if (!values.maNhom) {
      errors.maNhom = "Bạn không được bỏ trống trường này";
    }
    if (!values.hoTen) {
      errors.hoTen = "Bạn không được bỏ trống trường này";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      maNhom: "",
      hoTen: "",
    },
    validate,
    validationSchema: schema,
    onSubmit: (values) => {
      const action = dangKyAction(values);
      dispatch(action);
      console.log("values", values);
    },
  });

  return (
    <div style={{ backgroundImage: `url(${image})`, minHeight: "100vh" }} className="w-[100vw] h-[100vh] bg-cover bg-center bg-no-repeat">
      <div className="bg-black bg-opacity-60 w-[100vw] h-[100vh] backdrop-blur-lg">
        <div className="flex justify-center items-center h-[100vh] mr-[30px] ml-[30px]">
          {/* w-[100vw] h-[100vh] */}
          <div className="background bg-white/20 rounded-xl">
            {/* w-[95vw] h-[70vh] sm:w-[500px] md:w-[800px] rounded-xl */}
            <h1 className="text-center text-white tracking-wider py-2 sm:py-3 uppercase">Đăng ký</h1>

            <div className="content register-content w-full text-white">
              {/* //dùng handleSubmit */}
              <form onSubmit={formik.handleSubmit} action="#">
                <div className="grid sm:gap-2 grid-cols-1 sm:grid-cols-2">
                  <div className="div-1">
                    <div className="field">
                      <input name="hoTen" onChange={formik.handleChange} type="hoTen" placeholder="Họ và tên" />
                      <span className="fas fa-signature" />
                      {formik.errors.hoTen ? <div className="errors-value">{formik.errors.hoTen}</div> : null}
                    </div>
                    <div className="field">
                      <input name="taiKhoan" onChange={formik.handleChange} type="text" placeholder="Tài khoản" required />
                      <span className="fa fa-user" />
                      {formik.errors.taiKhoan ? <div className="errors-value">{formik.errors.taiKhoan}</div> : null}
                    </div>

                    <div className="field">
                      <input name="matKhau" onChange={formik.handleChange} type="password" placeholder="Password" required />
                      <span className="fa fa-lock" />
                      {formik.errors.matKhau ? <div className="errors-value">{formik.errors.matKhau}</div> : null}
                    </div>
                  </div>
                  <div>
                    <div className="field field-4">
                      <input name="email" onChange={formik.handleChange} type="email" placeholder="Email" />
                      <span className="fas fa-envelope" />
                      {formik.touched.email ? <div className="errors-value">{formik.errors.email}</div> : null}
                    </div>
                    <div className="field">
                      <input name="soDt" onChange={formik.handleChange} type="text" placeholder="Số điện thoại" />
                      <span className="fas fa-phone" />
                    </div>

                    <div className="field">
                      <input name="maNhom" onChange={formik.handleChange} type="text" placeholder="Mã Nhóm" />
                      <span className="fas fa-user-friends" />
                      {formik.errors.maNhom ? <div className="errors-value">{formik.errors.maNhom}</div> : null}
                    </div>
                  </div>
                </div>

                <div className="text-center mt-2">
                  <button type="submit" className="register">
                    Đăng ký
                  </button>
                  <div className="h-full mt-1">
                    Bạn đã có tài khoản?{" "}
                    <NavLink className="text-blue-300 font-semibold" to="/login">
                      Đăng nhập
                    </NavLink>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
