import { ThongTinLichChieu } from "../../_core/models/ThongTinPhongVe";
import { DAT_VE, DAT_VE_HOAN_TAT, SET_CHI_TIET_PHONG_VE } from "./../types/QuanLyDatVeType";
const stateDefault = {
  chiTietPhongVe: new ThongTinLichChieu(),
  danhSachGheDangDat: [],
};

export const QuanLyDatVeReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_CHI_TIET_PHONG_VE: {
      state.chiTietPhongVe = action.chiTietPhongVe;
      return { ...state };
    }
    case DAT_VE: {
      // console.log(action);
      //cập nhật danh sách Ghê đang đặt
      let danhSachGheCapNhat = [...state.danhSachGheDangDat];

      let index = danhSachGheCapNhat.findIndex((ghe) => ghe.maGhe === action.gheDuocChon.maGhe);

      if (index != -1) {
        //nếu ghế đó có tồn tại trong mảng từ trước thì trong lần này khi click vào sẽ xóa đi cái ghế đó
        danhSachGheCapNhat.splice(index, 1);
      } else {
        danhSachGheCapNhat.push(action.gheDuocChon);
      }
      return { ...state, danhSachGheDangDat: danhSachGheCapNhat };
    }
    case DAT_VE_HOAN_TAT: {
      state.danhSachGheDangDat = [];
      return { ...state };
    }
    default:
      return { ...state };
  }
};
