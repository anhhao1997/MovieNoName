import React, { useEffect } from "react";
import { Fragment } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { GROUPID } from "../../../../util/settings/config";
import { useDispatch } from "react-redux/es/exports";
import { useSelector } from "react-redux";
import { layThongTinNguoiDungSuaAction, suaNguoiDungAction } from "../../../../redux/actions/QuanLyNguoiDungAction";

export default function EdiUser(props) {

    const dispatch = useDispatch();

    useEffect(() => {
        let id = props.match.params.id;
        dispatch(layThongTinNguoiDungSuaAction(id));
    }, []);

    const { loaiNguoiDung } = useSelector((state) => state.QuanLyNguoiDungReducer);

    const { editUser } = useSelector((state) => state.QuanLyNguoiDungReducer);

    // console.log("loaiNguoiDung", loaiNguoiDung);

    const signupSchema = yup.object().shape({
        taiKhoan: yup.string().required("Tài khoản không được bỏ trống!"),
        matKhau: yup
            .string()
            .required("Mật khẩu không được bỏ trống")
            .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, "Bao gồm 8 ký tự, 1 chữ hoa, chữ thường và ký tự đặc biệt!"),
        hoTen: yup.string().required("Họ tên không được bỏ trống!"),
        email: yup
            .string()
            .required("Email không được bỏ trống!")
            .email("Email không đúng định dạng")
            .matches(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i),
        soDT: yup.string().required("Số điện thoại không được bỏ trống!"),
        maLoaiNguoiDung: yup.string().required("Hãy chọn loại người dùng!"),
    });

    let formik = useFormik({
      enableReinitialize: true,
        initialValues: {
            taiKhoan: editUser.taiKhoan,
            matKhau: editUser.matKhau,
            hoTen: editUser.hoTen,
            email: editUser.email,
            soDT: editUser.soDT,
            maLoaiNguoiDung: editUser.maLoaiNguoiDung,
            maNhom: GROUPID,
        },
        validationSchema: signupSchema,
        onSubmit: (value) => {
            // dispatch(suaNguoiDungAction(value));
            console.log("value: ", value);
        },
    });
    // console.log("formikValues", formik.values);

    return (
        <div>
            <Fragment>
                <div className="admin-layout text-center w-full h-full">
                    <div className="admin-layout-content">
                        <h3>Quản lý người dùng</h3>
                    </div>
                    <div className="admin-layout-table admin-manager w-full h-full">
                        <div className="title-manager">
                            <h4>
                                <i className="fas fa-user-edit"></i> Cập nhật thông tin người dùng
                            </h4>
                        </div>
                        <div className="form-user text-white text-left">
                            <form onSubmit={formik.onSubmit}>
                                <div className="row">
                                    <div className="col-6">
                                        <div className="form-item account">
                                            <p>
                                                <span className="text-red-600">*</span> Tài khoản:
                                            </p>
                                            <div className="input">
                                                <input type="text" name="taiKhoan" onChange={formik.handleChange} onBlur={formik.handleBlur} id="taiKhoan" value={formik.values.taiKhoan} />
                                            </div>
                                            {formik.errors.taiKhoan && formik.touched.taiKhoan ? <div className="text-red-600 pt-1">{formik.errors.taiKhoan}</div> : ""}
                                        </div>
                                        <div className="form-item password">
                                            <p>
                                                <span className="text-red-600">*</span> Mật khẩu:
                                            </p>
                                            <div className="input">
                                                <input type="password" name="matKhau" onChange={formik.handleChange} onBlur={formik.handleBlur} id="matKhau" value={formik.values.matKhau}/>
                                            </div>
                                            {formik.errors.matKhau && formik.touched.matKhau ? <div className="text-red-600 pt-1">{formik.errors.matKhau}</div> : ""}
                                        </div>
                                        <div className="form-item name">
                                            <p>
                                                <span className="text-red-600">*</span> Họ và tên:
                                            </p>
                                            <div className="input">
                                                <input type="text" name="hoTen" onChange={formik.handleChange} onBlur={formik.handleBlur} id="hoTen" value={formik.values.hoTen}/>
                                            </div>
                                            {formik.errors.hoTen && formik.touched.hoTen ? <div className="text-red-600  pt-1">{formik.errors.hoTen}</div> : ""}
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-item account">
                                            <p>
                                                <span className="text-red-600">*</span> Email:
                                            </p>
                                            <div className="input">
                                                <input type="email" name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} id="email" value={formik.values.email}/>
                                            </div>
                                            {formik.errors.email && formik.touched.email ? <div className="text-red-600 pt-1">{formik.errors.email}</div> : ""}
                                        </div>
                                        <div className="form-item password">
                                            <p>
                                                <span className="text-red-600">*</span> Số điện thoại:
                                            </p>
                                            <div className="input">
                                                <input type="text" name="soDT" onChange={formik.handleChange} onBlur={formik.handleBlur} id="soDT" value={formik.values.soDT}/>
                                            </div>
                                            {formik.errors.soDT && formik.touched.soDT ? <div className="text-red-600 pt-1">{formik.errors.soDT}</div> : ""}
                                        </div>
                                        <div className="form-item name">
                                            <p>
                                                <span className="text-red-600">*</span> Loại người dùng:
                                            </p>
                                            <div className="input">
                                                <select name="maLoaiNguoiDung" id="maLoaiNguoiDung" onChange={formik.handleChange} onBlur={formik.handleBlur}>
                                                    {loaiNguoiDung.map((userType, index) => {
                                                        return (
                                                            <option key={index} value={`${userType.maLoaiNguoiDung}`}>
                                                                {userType.tenLoai}
                                                            </option>
                                                        );
                                                    })}
                                                </select>
                                                {formik.errors.maLoaiNguoiDung && formik.touched.maLoaiNguoiDung ? <div className="text-red-600 pt-1">{formik.errors.maLoaiNguoiDung}</div> : ""}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-item-submit text-center">
                                    <button type="submit">
                                        <i className="fas fa-user-edit"></i> Cập nhật
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Fragment>
        </div>
    );
}
