import { SET_ARRFILM } from "./../types/QuanLyPhimType";

const stateDefault = {
    arrFilm: [
        {
            "maPhim": 8708,
            "tenPhim": "RỪNG THẾ MẠNGG",
            "biDanh": "rung-the-mangg",
            "trailer": "https://www.youtube.com/embed/Vm3t0goJOGg",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/rung-the-mang_gp01.jpg",
            "moTa": "Phim được thực hiện dựa trên các sự kiện có thật xảy ra tại một trong những cung đường trekking nổi tiếng nhất nước ta: Tà Năng - Phan Dũng. Đây cũng là tác phẩm đầu tiên của điện ảnh Việt Nam làm về chủ đề sinh tồn.",
            "maNhom": "GP01",
            "ngayKhoiChieu": "2022-05-08T00:25:28.38",
            "danhGia": 6,
            "hot": true,
            "dangChieu": true,
            "sapChieu": false
        }
    ]
}


export const QuanLyPhimReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case SET_ARRFILM: {
            let arrFilm = [...state.arrFilm];

            arrFilm = action.arrFilm;

            state.arrFilm = arrFilm;

            return { ...state };
        }
        default:
            return { ...state }
    }
}