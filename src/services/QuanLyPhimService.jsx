import { GROUPID } from "../util/settings/config";
import { baseService } from "./baseService";


export class QuanLyPhimService extends baseService {
    constructor() {
        super();
    }

    layDanhSachPhim = () => {
        return this.get(`https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}`)
    }
}


export const quanLyPhim = new QuanLyPhimService();