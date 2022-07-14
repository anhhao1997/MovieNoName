import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { layThongTinNguoiDungAction } from "../../../redux/actions/QuanLyNguoiDungAction";

import { IoCamera } from "react-icons/io5";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Tabtitle } from "../../../util/FunctionTitle";

function UserProfile() {
  Tabtitle("Thông tin cá nhân");
  const dispatch = useDispatch();

  const [passwordType, setPasswordType] = useState("password");

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  useEffect(() => {
    dispatch(layThongTinNguoiDungAction());
  }, []);
  const { thongTinNguoiDung } = useSelector((state) => state.QuanLyNguoiDungReducer);
  console.log(thongTinNguoiDung);

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
    enableReinitialize: true,
    initialValues: {
      hoTen: thongTinNguoiDung.hoTen,
      taiKhoan: thongTinNguoiDung.taiKhoan,
      matKhau: thongTinNguoiDung.matKhau,
      maLoaiNguoiDung: thongTinNguoiDung.maLoaiNguoiDung,
      email: thongTinNguoiDung.email,
      soDT: thongTinNguoiDung.soDT,
      maNhom: thongTinNguoiDung.maNhom,
    },
    onSubmit: (values) => {
      console.log("values", values);
      alert("Cập nhật thành công");
    },
    validate,
    validationSchema: schema,
  });

  return (
    <div className="h-full md:h-screen w-full flex flex-col bg-slate-100">
      <div className="flex flex-col items-center pt-3">
        <div className="user_content relative">
          <img src="https://picsum.photos/100/100" className="rounded-full relative" alt="profileImg" />
          <div className="absolute flex items-center justify-center bottom-[0px] right-[5px] hover:bg-gray-400 duration-200 bg-gray-500 w-[35px] h-[35px] leading-[35px] rounded-full cursor-pointer">
            <IoCamera size={20} className="text-gray-100" />
          </div>
        </div>
        <p className="text-sm font-bold mt-2">{thongTinNguoiDung.hoTen}</p>
      </div>
      <div className="max-w-screen-sm md:max-w-screen-lg mx-auto py-3">
        <p className="text-xs md:text-lg font-bold uppercase pb-3 text-center">Thông tin cá nhân của bạn</p>
        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-col px-2 md:flex-row md:gap-3">
            <div className="w-[300px] md:w-[400px]">
              <div className="mb-2 md:mb-3">
                <label className="block mb-2 text-sm font-bold text-gray-800">Họ và tên </label>
                <div className="relative duration-200">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-white">
                    <span className="fas fa-signature" />
                  </div>
                  <input
                    name="hoTen"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.hoTen}
                    className="bg-gray-600 border text-xs text-white rounded-lg border-none block w-full pl-10 p-2.5 focus:outline-none"
                    disabled
                  />
                  {formik.errors.hoTen ? <div className="text-red-600 font-bold">{formik.errors.hoTen}</div> : null}
                </div>
              </div>
              <div className="mb-2 md:mb-3">
                <label className="block mb-2 text-sm font-bold text-gray-800">Tài khoản</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-white">
                    <span className="fa fa-user" />
                  </div>
                  <input
                    name="taiKhoan"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.taiKhoan}
                    className="bg-gray-600 focus:outline-none border text-xs text-white rounded-lg border-none block w-full pl-10 p-2.5"
                    disabled
                  />
                  {formik.errors.taiKhoan ? <div className="text-red-600 font-bold">{formik.errors.taiKhoan}</div> : null}
                </div>
              </div>
              <div className="mb-2 md:mb-3">
                <label className="block mb-2 text-sm font-bold text-gray-800">Mật khẩu </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-white">
                    <span className="fa fa-lock" />
                  </div>
                  <input
                    name="matKhau"
                    type={passwordType}
                    onChange={formik.handleChange}
                    value={formik.values.matKhau}
                    className="bg-gray-600 focus:outline-none border text-xs text-white rounded-lg border-none block w-full pl-10 p-2.5"
                    id="myPassword"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer text-white" onClick={togglePassword}>{passwordType === "password" ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}</div>
                </div>
              </div>

              <div className="mb-2 md:mb-3">
                <label className="block mb-2 text-sm font-bold text-gray-800">Mã loại người dùng </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-white">
                    <span className="fa fa-user" />
                  </div>
                  <input
                    name="maLoaiNguoiDung"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.maLoaiNguoiDung}
                    className="bg-gray-600 border focus:outline-none text-xs text-white rounded-lg border-none block w-full pl-10 p-2.5"
                    disabled
                  />
                </div>
              </div>
            </div>

            <div className="w-[300px] md:w-[400px]">
              <div className="mb-2 md:mb-3">
                <label className="block mb-2 text-sm font-bold text-gray-800">Email </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-white">
                    <span className="fas fa-envelope" />
                  </div>
                  <input
                    name="email"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    className="bg-gray-600 border focus:outline-none text-xs text-white rounded-lg border-none block w-full pl-10 p-2.5"
                    disabled
                  />
                  {formik.errors.email ? <div className="text-red-600 font-bold">{formik.errors.email}</div> : null}
                </div>
              </div>
              <div className="mb-2 md:mb-3">
                <label className="block mb-2 text-sm font-bold text-gray-800">Số điện thoại</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-white">
                    <span className="fas fa-phone" />
                  </div>
                  <input
                    name="soDT"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.soDT}
                    className="bg-gray-600 border focus:outline-none text-xs text-white rounded-lg border-none block w-full pl-10 p-2.5"
                    disabled
                  />
                </div>
              </div>
              <div className="mb-2 md:mb-3">
                <label className="block mb-2 text-sm font-bold text-gray-800">Mã nhóm</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-white">
                    <span className="fas fa-user-friends" />
                  </div>
                  <input
                    name="maNhom"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.maNhom}
                    className="bg-gray-600 border focus:outline-none text-xs text-white rounded-lg border-none block w-full pl-10 p-2.5"
                    disabled
                  />
                </div>
              </div>
            </div>
          </div>

          {/* <div className="flex flex-row justify-end">

            <button className="text-white bg-blue-500 px-3 py-2 ml-2 flex items-center rounded-md hover:scale-110 duration-300">Chỉnh sửa</button>
            <button type="submit" onSubmit={formik.handleSubmit} className="text-white bg-green-700 px-3 py-2 ml-2 flex items-center rounded-md hover:scale-110 duration-300">
              Cập nhật
            </button>
          </div> */}
        </form>
      </div>
    </div>
  );
}

export default UserProfile;
