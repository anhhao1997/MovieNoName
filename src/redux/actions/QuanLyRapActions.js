import { quanLyRapService } from "../../services/QuanLyRap";
import { SET_CHI_TIET_FILM, SET_HE_THONG_RAP_CHIEU } from "./types/QuanLyRapType";

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

      // console.log(result.data.content);
    } catch (errors) {
      console.log("errors", errors.response?.data);
    }
  };
};

export const layThongTinLichChieuPhim = (id) => {
  return async (dispatch) => {
    try {
      //kết nối api với quanLyRapService để lấy ra result
      const result = await quanLyRapService.layThongTinLichChieuPhim(id);
      // console.log('result',result.data.content)

      //Khi đã có result thì gán vào thuộc tính filmDetail của action
      const action = {
        type: SET_CHI_TIET_FILM,
        filmDetail: result.data.content,
      };

      dispatch(action);

    } catch (errors) {
      console.log("errors", errors.response?.data);
    }
  };
};
