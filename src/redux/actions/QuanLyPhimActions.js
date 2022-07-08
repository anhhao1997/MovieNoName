import { SET_ARRFILM, SET_THONG_TIN_PHIM } from "./../types/QuanLyPhimType.js";
import { quanLyPhim } from '../../services/QuanLyPhimService.jsx'
import { Alert } from "antd";
import { history } from "../../App.js";

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

export const capNhatPhimUploadAction = (formData) => {
    return async (dispatch) => {
        try {
            const result = await quanLyPhim.capNhatPhimUpload(formData)

            alert('Cập nhật phim thành công!');

            dispatch(getQuanLyPhimAction());

            history.push("/admin/films");

        } catch (errors) {
            console.log('errors', errors.response?.data)
        }
    }
}

export const xoaPhimAction = (maPhim) => {
    return async (dispatch) => {
        try {
            const result = await quanLyPhim.xoaPhim(maPhim)

            alert('Xóa phim thành công!');

            dispatch(getQuanLyPhimAction());

        } catch (errors) {
            console.log('errors', errors.response?.data)
        }
    }
}


export const layThongTinPhimAction = (maPhim) => {
    return async (dispatch) => {
        try {
            const result = await quanLyPhim.layThongTinPhim(maPhim)
            // console.log('layThongTinPhim', result.data.content)
            dispatch({
                type: SET_THONG_TIN_PHIM,
                layThongTinPhim: result.data.content
            })
        } catch (erros) {
            console.log('errors', erros.response?.data)
        }
    }
}