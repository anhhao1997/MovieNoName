import { SET_ARRFILM } from "./../types/QuanLyPhimType";

const stateDefault = {
    arrFilm: [
        {
            "maPhim": 1466,
            "tenPhim": "The Longest Ride OK",
            "biDanh": "the-longest-ride-ok",
            "trailer": "https://www.youtube.com/embed/FUS_Q7FsfqU",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/thelongestride.jpg",
            "moTa": "lỗi rồi hihi phim cũng chán lắm :)) h thì chạy lại bình thường ảo ma v",
            "maNhom": "GP03",
            "ngayKhoiChieu": "2022-05-19T19:24:55.803",
            "danhGia": 9,
            "hot": true,
            "dangChieu": true,
            "sapChieu": true
        }
    ]
}


export const QuanLyPhimReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case SET_ARRFILM: {
            let arrFilm = [...state.arrFilm];
            console.log('action.film', action.arrFilm)
            arrFilm = action.arrFilm;

            state.arrFilm = arrFilm;

            return { ...state };
        }
        default:
            return { ...state }
    }
}