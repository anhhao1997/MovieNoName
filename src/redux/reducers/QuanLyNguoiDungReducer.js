import { TOKEN, USER_LOGIN } from "../../util/settings/config";
import { DANG_NHAP_ACTION, SET_THONG_TIN_NGUOI_DUNG } from "../actions/types/QuanLyNguoiDungType";

//TRƯỜNG HỢP NGƯỜI DÙNG CHƯA LOGIN
//1. lấy ra thongTinDangNhap từ action
//2. setItem với key USER_LOGIN có value từ obj thongTinDangNhap thành chuỗi stringJSON
//3. setItem với key TOKEN có value từ obj thongTinDangNhap.accessToken thành chuỗi stringJSON
//4. return về state và gán thongTinDangNhap cho userLogin


//TRƯỜNG HỢP NGƯỜI DÙNG ĐÃ LOGIN VÀ LƯU THÔNG TIN TRÊN LOCALSTORAGE
//1. Khai báo biến user {}
//2. Gắn thongTinDangNhap cho user
//3. Gán tiếp user cho userLogin

let user = {};
if (localStorage.getItem(USER_LOGIN)) {
  user = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const stateDefault = {
  userLogin: user,
  thongTinNguoiDung:{

  }
};

export const QuanLyNguoiDungReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case DANG_NHAP_ACTION: {
      const { thongTinDangNhap } = action;
      localStorage.setItem(USER_LOGIN, JSON.stringify(thongTinDangNhap));
      localStorage.setItem(TOKEN, thongTinDangNhap.accessToken);
      return { ...state, userLogin: thongTinDangNhap };
    }
    case SET_THONG_TIN_NGUOI_DUNG:{
      state.thongTinNguoiDung = action.thongTinNguoiDung;
      return {...state}
    }
    default:
      return { ...state };
  }
};
