import { quanLyDatVeService } from "../../services/QuanLyDatVeService";
<<<<<<< HEAD
import { ThongTinDatVe } from "../../_core/models/ThongTinDatVe";
import { SET_CHI_TIET_PHONG_VE } from "./../types/QuanLyDatVeType";
=======
import { DAT_VE_HOAN_TAT, SET_CHI_TIET_PHONG_VE } from "./../types/QuanLyDatVeType";
import { displayLoadingAction, hideLoadingAction } from "./LoadingActions";
>>>>>>> 92ff7af08b79c8a8729ae399e884c2b8192071b2

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
<<<<<<< HEAD
  };
};

export const datVeAction = (thongTinDatVe = new ThongTinDatVe()) => {
  return async (dispatch) => {
    try {
      const result = await quanLyDatVeService.datVe(thongTinDatVe);
      console.log(result.data.content);
    } catch (error) {
      console.log("error", error.response?.data);
    }
  };
};
=======
}

export const datVeAction = (thongTinDatVe) => {
    return async (dispatch) => {
        try {

            dispatch(displayLoadingAction)

            const result = await quanLyDatVeService.datVe(thongTinDatVe);
            // đặt vé thành công thì cập nhật
            await dispatch(layChiTietPhongVeAction(thongTinDatVe.maLichChieu))

            await dispatch({
                type: DAT_VE_HOAN_TAT
            })

            dispatch(hideLoadingAction)
            // console.log('result', result.data.content)

        } catch (error) {
            dispatch(hideLoadingAction)
            console.log('error', error);
            console.log('error', error.response?.data);
        }
    }
}
>>>>>>> 92ff7af08b79c8a8729ae399e884c2b8192071b2
