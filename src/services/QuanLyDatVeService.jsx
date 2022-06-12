import { baseService } from "./baseService";
import { GROUPID } from "../util/settings/config";

// tạo service QuanLyDatVe lấy thông tin qua para (id = maLichChieu)

export class QuanLyDatVeService extends baseService {
    constructor() {
        super();
    }
    layChiTietPhongVe = (maLichChieu) => {
        return this.get(`api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`);
    }
}

export const quanLyDatVeService = new QuanLyDatVeService();
