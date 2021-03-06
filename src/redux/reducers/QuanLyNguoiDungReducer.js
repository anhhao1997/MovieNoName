import { TOKEN, USER_LOGIN } from "../../util/settings/config";
import {
    DANG_NHAP_ACTION,
    DANG_XUAT_ACTION,
    SET_EDIT_USER,
    SET_THONG_TIN_NGUOI_DUNG,
    SET_USER_TYPE,
} from "../actions/types/QuanLyNguoiDungType";
import { SET_USERS } from "./../actions/types/QuanLyNguoiDungType";

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
    danhSachNguoiDung: [],
    userLogin: user,
    thongTinNguoiDung: {},
    loaiNguoiDung: [],
    editUser:{}
};

export const QuanLyNguoiDungReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case DANG_NHAP_ACTION: {
            const { thongTinDangNhap } = action;
            localStorage.setItem(USER_LOGIN, JSON.stringify(thongTinDangNhap));
            localStorage.setItem(TOKEN, thongTinDangNhap.accessToken);
            return { ...state, userLogin: thongTinDangNhap };
        }
        case SET_THONG_TIN_NGUOI_DUNG: {
            state.thongTinNguoiDung = action.thongTinNguoiDung;
            return { ...state };
        }
        case DANG_XUAT_ACTION: {
            localStorage.clear();
            return { ...state };
        }
        case SET_USERS: {
            state.danhSachNguoiDung = action.arrUsers;
            return { ...state };
        }
        case SET_USER_TYPE: {
            state.loaiNguoiDung = action.userType;
            // console.log('stateLoaiNguoiDung',state.loaiNguoiDung);
            return { ...state };
        }
        case SET_EDIT_USER: {
            state.editUser = action.editUser;
            console.log('editUser',state.editUser)
            return { ...state };
        }
        default:
            return { ...state };
    }
};
