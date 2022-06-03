import { SET_ARRFILM } from "./../types/QuanLyPhimType.js";
import { quanLyPhim } from '../../services/QuanLyPhimService.jsx'

export const getQuanLyPhimAction = () => {
    return async (dispatch) => {
        try {

            const result = await quanLyPhim.layDanhSachPhim();

            const action = {
                type: SET_ARRFILM,
                arrFilm: result.data.content
            }

            dispatch(action);

            console.log(result.data)

        } catch (error) {
            console.log('error', error);
        }
    }
} 