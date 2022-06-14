
import { ThongTinLichChieu } from "../../_core/models/ThongTinPhongVe";
import { DAT_GHE, DAT_VE_HOAN_TAT, SET_CHI_TIET_PHONG_VE } from "./../types/QuanLyDatVeType";
const stateDefault = {
    chiTietPhongVe: new ThongTinLichChieu(),
    danhSachGheDangDat: []
}


export const QuanLyDatVeReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case SET_CHI_TIET_PHONG_VE: {
            state.chiTietPhongVe = action.chiTietPhongVe;
            return { ...state };
        }
        case DAT_GHE: {
            // bắt case ghế được click vào

            let danhSachGheCapNhat = [...state.danhSachGheDangDat];

            let index = danhSachGheCapNhat.findIndex(gheDangDat => gheDangDat.maGhe === action.gheDuocChon.maGhe);
            if (index != -1) {
                danhSachGheCapNhat.splice(index, 1);
            } else {
                danhSachGheCapNhat.push(action.gheDuocChon);
            }

            return { ...state, danhSachGheDangDat: danhSachGheCapNhat }
        }
        case DAT_VE_HOAN_TAT: {
            state.danhSachGheDangDat = [];
            return { ...state }
        }
        default:
            return { ...state }
    }
} 