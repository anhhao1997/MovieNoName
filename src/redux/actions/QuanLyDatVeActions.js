import { quanLyDatVeService } from "../../services/QuanLyDatVeService";
import { ThongTinDatVe } from "../../_core/models/ThongTinDatVe";
import { SET_CHI_TIET_PHONG_VE, DAT_VE_HOAN_TAT } from "./../types/QuanLyDatVeType";
import { displayLoadingAction, hideLoadingAction } from "./LoadingActions";

export const layChiTietPhongVeAction = (maLichChieu) => {
  return async (dispatch) => {
    try {
      const result = await quanLyDatVeService.layChiTietPhongVe(maLichChieu);
      console.log("result", result);
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
      const result = await quanLyDatVeService.datVe(thongTinDatVe);
      await dispatch(layChiTietPhongVeAction(thongTinDatVe.maLichChieu));
      await dispatch({
        type: DAT_VE_HOAN_TAT,
      });
      dispatch(hideLoadingAction);
      console.log(result.data.content);
    } catch (error) {
      dispatch(hideLoadingAction);
      console.log("error", error.response?.data);
    }
  };
};
