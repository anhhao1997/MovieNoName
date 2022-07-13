import { quanLyNguoiDungService } from "../../services/QuanLyNguoiDungService";
import { DANG_KY_ACTION, DANG_NHAP_ACTION, SET_THONG_TIN_NGUOI_DUNG } from "./types/QuanLyNguoiDungType";
import { history } from "../../App";
// sử dụng history chuyển hướng nếu đăng nhập thành công
export const dangNhapAction = (thongTinDangNhap) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.layThongTinDangNhap(thongTinDangNhap);

      if (result.data.statusCode === 200) {
        const action = {
          type: DANG_NHAP_ACTION,
          thongTinDangNhap: result.data.content,
        };
        dispatch(action);
        history.push("/");
      }

      console.log("result", result);
    } catch (error) {
      console.log("error", error.response.data);
    }
  };
};

export const dangKyAction = (thongTinDangKy) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.layThongTinDangKy(thongTinDangKy);

      if (result.data.statusCode === 200) {
        const action = {
          type: DANG_KY_ACTION,
          thongTinDangKy: result.data.content,
        };
        dispatch(action);
        alert("Chúc mừng bạn đăng ký thành công, giờ hãy đăng nhập nhé");
        history.push("/login");
        console.log("result", result.data.content);
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


