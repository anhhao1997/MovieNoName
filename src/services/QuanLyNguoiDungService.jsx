import { baseService } from "./baseService";

export class QuanLyNguoiDungService extends baseService {
  constructor() {
    super();
  }
  //tạo service layThongTinDangNhap với para thongTinDangNhap
  layThongTinDangNhap = (thongTinDangNhap) => {
    //{taiKhoan:'', matKhau:''}
    return this.post(`api/QuanLyNguoiDung/DangNhap`, thongTinDangNhap);
  };
  layThongTinNguoiDung = () => {
    return this.post(`api/QuanLyNguoiDung/ThongTinTaiKhoan`)
  }
}

export const quanLyNguoiDungService = new QuanLyNguoiDungService();
