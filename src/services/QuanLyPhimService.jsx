import { GROUPID } from "../util/settings/config";
import { baseService } from "./baseService";


export class QuanLyPhimService extends baseService {
    constructor() {
        super();
    }

    layDanhSachBanner = () => {
        return this.get(`api/QuanLyPhim/LayDanhSachBanner`)
    }

    layDanhSachPhim = () => {
        return this.get(`https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}`)
    }
}


export const quanLyPhim = new QuanLyPhimService();