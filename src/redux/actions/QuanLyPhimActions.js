import { SET_ARRFILM } from "./../types/QuanLyPhimType.js";
import { quanLyPhim } from '../../services/QuanLyPhimService.jsx'
import { Alert } from "antd";

export const getQuanLyPhimAction = (tenPhim = '') => {
    return async (dispatch) => {
        try {

            const result = await quanLyPhim.layDanhSachPhim(tenPhim);

            const action = {
                type: SET_ARRFILM,
                arrFilm: result.data.content
            }

            dispatch(action);

            // console.log(result.data)

        } catch (errors) {
            console.log('error', errors);
        }
    }
}

export const themPhimUploadHinhAction = (formData) => {
    return async (dispatch) => {
        try {
            const result = await quanLyPhim.themPhimUploadHinh(formData)
            alert('Thêm phim thành công!')
        } catch (errors) {
            console.log('errors', errors.response?.data)
        }
    }
}