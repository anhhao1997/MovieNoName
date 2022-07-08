import { baseService } from "./baseService";
import { GROUPID } from "../util/settings/config";
import { ThongTinDatVe } from "./../_core/models/ThongTinDatVe";

// tạo service QuanLyDatVe lấy thông tin qua para (id = maLichChieu)

export class QuanLyDatVeService extends baseService {
    constructor() {
        super();
    }
    layChiTietPhongVe = (maLichChieu) => {
        return this.get(`api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`);
    }
    datVe = (thongTinDatVe = new ThongTinDatVe()) => {
        /* thongTinDatVe */
        return this.post(`api/QuanLyDatVe/DatVe`, thongTinDatVe);
    }
    // thêm lịch chiếu
    themLichChieu = (thongTinLichChieu) => {
        return this.post(`api/QuanLyDatVe/TaoLichChieu`, thongTinLichChieu);
    }
}

export const quanLyDatVeService = new QuanLyDatVeService();
