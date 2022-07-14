import { quanLyNguoiDungService } from "../../services/QuanLyNguoiDungService";
import {
    DANG_KY_ACTION,
    DANG_NHAP_ACTION,
    SET_EDIT_USER,
    SET_THONG_TIN_NGUOI_DUNG,
    SET_USERS,
    SET_USER_TYPE,
    THEM_NGUOI_DUNG,
} from "./types/QuanLyNguoiDungType";
import { history } from "../../App";
// sử dụng history chuyển hướng nếu đăng nhập thành công
export const dangNhapAction = (thongTinDangNhap) => {
    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungService.layThongTinDangNhap(
                thongTinDangNhap
            );

            if (result.data.statusCode === 200) {
                const action = {
                    type: DANG_NHAP_ACTION,
                    thongTinDangNhap: result.data.content,
                };
                dispatch(action);
                history.push("/");
            }

            // console.log("result", result);
        } catch (error) {
            console.log("error", error.response.data);
        }
    };
};

export const dangKyAction = (thongTinDangKy) => {
    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungService.layThongTinDangKy(
                thongTinDangKy
            );

            if (result.data.statusCode === 200) {
                const action = {
                    type: DANG_KY_ACTION,
                    thongTinDangKy: result.data.content,
                };
                dispatch(action);
                alert(
                    "Chúc mừng bạn đăng ký thành công, giờ hãy đăng nhập nhé"
                );
                history.push("/login");
                // console.log("result", result.data.content);
            }
        } catch (error) {
            console.log("error", error.response.data);
        }
    };
};

export const layThongTinNguoiDungAction = () => {
    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungService.layThongTinNguoiDung();
            console.log("result", result);

            if (result.data.statusCode === 200) {
                const action = {
                    type: SET_THONG_TIN_NGUOI_DUNG,
                    thongTinNguoiDung: result.data.content,
                };
                dispatch(action);
            }
        } catch (error) {
            console.log("error", error.response.data);
        }
    };
};

export const layDanhSachNguoiDungAction = () => {
    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungService.layDanhSachNguoiDung();
            const action = {
                type: SET_USERS,
                arrUsers: result.data.content,
            };
            dispatch(action);
        } catch (error) {
            console.log("error", error.response.data);
        }
    };
};

export const layLoaiNguoiDungAction = () => {
    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungService.layLoaiNguoiDung();
            // console.log(result.data.content)
            const action = {
                type: SET_USER_TYPE,
                userType: result.data.content,
            };
            dispatch(action);
        } catch (error) {
            console.log("error", error.response.data);
        }
    };
};

export const xoaNguoiDungAction = () => {
    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungService.xoaNguoiDung();
        } catch (error) {
            console.log("error", error.response.data);
        }
    };
};

export const themNguoiDungAction = (thongTinNguoiDung) => {
    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungService.themNguoiDung(
                thongTinNguoiDung
            );
            alert(
                "Thêm người dùng thành công!"
            );
            history.push("/admin/manager");
            // console.log("result", result.data.content);

        } catch (error) {
            console.log("error", error.response.data);
        }
    };
};


export const timNguoiDungAction = (tuKhoa) => {
    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungService.timNguoiDung(
                tuKhoa
            );
            const action = {
                type: SET_USERS,
                arrUsers: result.data.content,
            };
            dispatch(action);
        } catch (error) {
            console.log("error", error.response.data);
        }
    };
};

export const layThongTinNguoiDungSuaAction = (taiKhoan) => {
    return async (dispatch) => {
        try {

            const result = await quanLyNguoiDungService.layNguoiDungSua(taiKhoan);

            await(dispatch(layLoaiNguoiDungAction()))

            console.log(result.data.content)
            const action = {
                type: SET_EDIT_USER,
                editUser: result.data.content,
            };
            dispatch(action);
        } catch (error) {
            console.log("error", error.response.data);
        }
    }
}

export const suaNguoiDungAction = (thongTinNguoiDung) => {
    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungService.suaNguoiDung(
                thongTinNguoiDung
            );
            alert(
                "Sửa thông tin người dùng thành công!"
            );
            history.push("/admin/manager");
            // console.log("result", result.data.content);

        } catch (error) {
            console.log("error", error.response.data);
        }
    };
};