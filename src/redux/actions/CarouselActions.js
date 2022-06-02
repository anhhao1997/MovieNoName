import { DOMAIN } from "../../util/settings/config";
import { SET_CAROUSEL } from "../types/CarouselTypes";
import { axios } from 'axios'


export const getCarouselAction = () => {
    return async (dispatch) => {
        try {
            const result = await axios({
                url: `${DOMAIN}/api/QuanLyPhim/LayDanhSachBanner`,
                method: 'GET'
            })

            dispatch({
                type: SET_CAROUSEL,
                arrBanner: result.data.content
            })

        } catch (error) {
            console.log('error', error);
        }
    }
} 