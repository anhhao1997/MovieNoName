import { baseService } from "./baseService";

export class QuanLyNguoiDungService extends baseService {
  constructor() {
    super();
  }
  //tạo service layThongTinDangNhap với para thongTinDangNhap
  layThongTinDangNhap = (thongTinDangNhap) => {
    //{taiKhoanr:'', matKhau:''}
    return this.post(`api/QuanLyNguoiDung/DangNhap`, thongTinDangNhap);
  };
}

export const quanLyNguoiDungService = new QuanLyNguoiDungService();
