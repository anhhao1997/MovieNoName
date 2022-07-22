import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { CarouselReducer } from "./reducers/CarouselReducer";
import { QuanLyRapReducer } from "./reducers/QuanLyRapReducer";
import { QuanLyPhimReducer } from "./reducers/QuanLyPhimReducer";
import { QuanLyNguoiDungReducer } from "./reducers/QuanLyNguoiDungReducer";
import { QuanLyDatVeReducer } from "./reducers/QuanLyDatVeReducer";
import { LoadingReducer } from "./reducers/LoadingReducer";

const rootReducer = combineReducers({
  // state ứng dụng
  CarouselReducer,
  QuanLyRapReducer,
  QuanLyPhimReducer,
  QuanLyNguoiDungReducer,
  QuanLyDatVeReducer,
  LoadingReducer,
});

// Cấu hình thunk
const middleWare = applyMiddleware(thunk);

const customCompose = compose(middleWare);
//, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const store = createStore(rootReducer, customCompose);
