import { quanLyNguoiDungService } from "../../services/QuanLyNguoiDungService";
import { DANG_NHAP_ACTION } from "./types/QuanLyNguoiDungType";
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
        history.goBack();
      }


      console.log("result", result);
    } catch (error) {
      console.log("error", error.response.data);
    }
  };
};
