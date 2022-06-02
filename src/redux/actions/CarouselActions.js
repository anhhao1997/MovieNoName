
import { SET_CAROUSEL } from "../types/CarouselTypes";
import { quanLyPhim } from "../../services/QuanLyPhimService";


export const getCarouselAction = () => {
    return async (dispatch) => {
        try {

            const result = await quanLyPhim.layDanhSachBanner();

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