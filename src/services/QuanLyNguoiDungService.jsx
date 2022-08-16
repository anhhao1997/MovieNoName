import { GROUPID } from "../util/settings/config";
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
  layDanhSachNguoiDung = () => {
    return this.get(`api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUPID}`)
  }
  suaNguoiDung = (thongTinNguoiDung) => {
    return this.put(`api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,thongTinNguoiDung)
  }
  layLoaiNguoiDung = () => {
    return this.get(`api/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung`)
  }
  xoaNguoiDung = (taiKhoan) => {
    return this.delete(`api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`)
  }
  themNguoiDung = (thongTinNguoiDung) => {
    return this.post(`api/QuanLyNguoiDung/themNguoiDung`,thongTinNguoiDung)
  }
  adminSuaNguoiDung = (thongTinNguoiDung) => {
    return this.post(`api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,thongTinNguoiDung)
  }
  
  timNguoiDung = (tuKhoa) => {
    if(tuKhoa !== '') {
      return this.get(`api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=${GROUPID}&tuKhoa=${tuKhoa}`)
    }
    return this.get(`api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=${GROUPID}`)
  }
  layNguoiDungSua = (taiKhoan) => {
    return this.post(`api/QuanLyNguoiDung/LayThongTinNguoiDung?taiKhoan=${taiKhoan}`)
  }
}

export const quanLyNguoiDungService = new QuanLyNguoiDungService();
