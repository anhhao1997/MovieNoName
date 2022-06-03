import { quanLyRapService } from "../../services/QuanLyRap";
import { SET_HE_THONG_RAP_CHIEU } from "./types/QuanLyRapType";

export const layDanhSachHeThongRap = () => {
  return async (dispatch) => {
    try {
      const result = await quanLyRapService.layThongTinHeThongRap();
      console.log("result", result.data.content);

      dispatch({
        type: SET_HE_THONG_RAP_CHIEU,
        heThongRapChieu: result.data.content,
      });
    } catch (errors) {
      console.log("errors", errors.response?.data);
    }
  };
};
