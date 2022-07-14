import { quanLyDatVeService } from "../../services/QuanLyDatVeService";
import { ThongTinDatVe } from "../../_core/models/ThongTinDatVe";
import { SET_CHI_TIET_PHONG_VE, DAT_VE_HOAN_TAT, CHUYEN_TAB } from "./../types/QuanLyDatVeType";
import { displayLoadingAction, hideLoadingAction } from "./LoadingActions";

export const layChiTietPhongVeAction = (maLichChieu) => {
  return async (dispatch) => {
    try {
      const result = await quanLyDatVeService.layChiTietPhongVe(maLichChieu);
      // console.log("result", result);
      if (result.status === 200) {
        const action = {
          type: SET_CHI_TIET_PHONG_VE,
          chiTietPhongVe: result.data.content,
        };
        dispatch(action);
      }
    } catch (error) {
      console.log("error", error);
      console.log("error", error.response?.data);
    }
  };
};

export const datVeAction = (thongTinDatVe = new ThongTinDatVe()) => {
  return async (dispatch) => {
    try {
      dispatch(displayLoadingAction);
      // console.log("thong tin dat ve");
      const result = await quanLyDatVeService.datVe(thongTinDatVe);
      await dispatch(layChiTietPhongVeAction(thongTinDatVe.maLichChieu));
      await dispatch({
        type: DAT_VE_HOAN_TAT,
      });
      await dispatch(hideLoadingAction);
      dispatch({
        type: CHUYEN_TAB,
      });
      // console.log('result', result.data);
    } catch (error) {
      dispatch(hideLoadingAction);
      console.log("error", error.response?.data);
    }
  };
};
