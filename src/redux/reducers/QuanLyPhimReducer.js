import { SET_CHI_TIET_FILM } from "../actions/types/QuanLyRapType";
import { SET_ARRFILM } from "./../types/QuanLyPhimType";

const stateDefault = {
  arrFilm: [
    {
      maPhim: 1466,
      tenPhim: "The Longest Ride OK",
      biDanh: "the-longest-ride-ok",
      trailer: "https://www.youtube.com/embed/FUS_Q7FsfqU",
      hinhAnh: "https://movienew.cybersoft.edu.vn/hinhanh/thelongestride.jpg",
      moTa: "lỗi rồi hihi phim cũng chán lắm :)) h thì chạy lại bình thường ảo ma v",
      maNhom: "GP03",
      ngayKhoiChieu: "2022-05-19T19:24:55.803",
      danhGia: 9,
      hot: true,
      dangChieu: true,
      sapChieu: true,
    },
  ],
  filmDetail: {},
};

export const QuanLyPhimReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_ARRFILM: {
      let arrFilm = [...state.arrFilm];
      console.log("action.film", action.arrFilm);
      arrFilm = action.arrFilm;

      state.arrFilm = arrFilm;

      return { ...state };
    }
    //Xét theo type từ action, gán vào state.filmDetail
    case SET_CHI_TIET_FILM: {
      state.filmDetail = action.filmDetail;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
