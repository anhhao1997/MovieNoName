import { quanLyNguoiDungService } from "../../services/QuanLyNguoiDungService";
import { DANG_NHAP_ACTION } from "./types/QuanLyNguoiDungType";

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
      }

      console.log("result", result);
    } catch (error) {
      console.log("error", error.response.data);
    }
  };
};
