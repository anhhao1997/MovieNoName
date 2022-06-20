import { GROUPID } from "../util/settings/config";
import { baseService } from "./baseService";


export class QuanLyPhimService extends baseService {
    constructor() {
        super();
    }

    layDanhSachPhim = (tenPhim = '') => {
        if (tenPhim.trim() != '') {
            return this.get(`api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}&tenPhim=${tenPhim}`)
        }
        return this.get(`api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}`)
    }

    themPhimUploadHinh = (formData) => {
        return this.post(`api/QuanLyPhim/ThemPhimUploadHinh`, formData);
    }

}


export const quanLyPhim = new QuanLyPhimService();