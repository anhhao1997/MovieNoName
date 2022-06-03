
import { SET_CAROUSEL } from "./../types/CarouselTypes";

const stateDefault = {
    arrBanner: [
        {
            "maBanner": 1,
            "maPhim": 1282,
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/ban-tay-diet-quy.png"
        }
    ]
};

export const CarouselReducer = (state = stateDefault, action) => {

    switch (action.type) {

        case SET_CAROUSEL: {

            let arrBanner = [...state.arrBanner];

            arrBanner = action.arrBanner;

            state.arrBanner = arrBanner;

            return { ...state };

        }
        default:
            return { ...state }
    }
}