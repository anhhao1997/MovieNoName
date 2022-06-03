
import { SET_CAROUSEL } from "../types/CarouselTypes";
import { quanLyBanner } from "../../services/QuanLyBannerService";


export const getCarouselAction = () => {
    return async (dispatch) => {
        try {

            const result = await quanLyBanner.layDanhSachBanner();

            const action = {
                type: SET_CAROUSEL,
                arrBanner: result.data.content
            }
            dispatch(action);

            console.log(result.data)

        } catch (error) {
            console.log('error', error);
        }
    }
} 