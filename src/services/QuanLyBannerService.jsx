import { baseService } from "./baseService";


export class QuanLyBannerService extends baseService {
    constructor() {
        super();
    }

    layDanhSachBanner = () => {
        return this.get(`api/QuanLyPhim/LayDanhSachBanner`)
    }


}


export const quanLyBanner = new QuanLyBannerService();