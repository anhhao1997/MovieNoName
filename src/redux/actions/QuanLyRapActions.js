import { quanLyRapService } from "../../services/QuanLyRap";
import { SET_HE_THONG_RAP_CHIEU } from "./types/QuanLyRapType";

export const layDanhSachHeThongRap = () => {
  // action này sẽ trả về một function async và được redux thunk trả về tham số dispatch
  return async (dispatch) => {

    try {
      const result = await quanLyRapService.layThongTinHeThongRap();

      const action = {
        type: SET_HE_THONG_RAP_CHIEU,
        heThongRapChieu: result.data.content,
      };
      //xử lý thành công thì đưa dữ liệu lên QuanLyRapReducer

      dispatch(action);

      console.log(result.data.content);

    } catch (errors) {
      console.log("errors", errors.response?.data);
    }
  };
};
