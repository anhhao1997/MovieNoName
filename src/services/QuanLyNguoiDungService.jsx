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

  layThongTinDangKy = (thongTinDangKy) => {
    //{taiKhoan:'', matKhau:''}
    return this.post(`api/QuanLyNguoiDung/DangKy`, thongTinDangKy);
  };
  layThongTinNguoiDung = () => {
    return this.post(`api/QuanLyNguoiDung/ThongTinTaiKhoan`)
  }
}

export const quanLyNguoiDungService = new QuanLyNguoiDungService();
