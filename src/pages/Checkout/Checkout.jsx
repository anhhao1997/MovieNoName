import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { layChiTietPhongVeAction } from "./../../redux/actions/QuanLyDatVeActions";


export default function Checkout(props) {
  //Lấy thông tin người dùng
  const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer);
  console.log(userLogin);
  //Lấy thông tin phòng vé
  const { chiTietPhongVe } = useSelector(state => state.QuanLyDatVeReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    // tạo hàm để dispatch action lên reducer
    const action = layChiTietPhongVeAction(props.match.params.id);
    dispatch(action);
  }, [])

  console.log('chiTietPhongVe', chiTietPhongVe);
  return (
    <div className="checkout">
      <div className="header-checkout fixed-top p-3">
        <div className="container d-flex align-items-center justify-content-between text-white">
          <div className="logo text-center">
            Logo
          </div>
          <div className="info-user text-center">
            <div className="dropdown show">
              <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span className="mr-3"><i className="fa fa-user pr-2" />{userLogin.hoTen}</span>
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a className="item-drop-1" href="#">Lịch sử </a>
                <a className="item-drop-2" href="#">Đăng xuất</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-film " style={{ backgroundImage: `url(${chiTietPhongVe.thongTinPhim?.hinhAnh})` }}>
        <div className="glassmorphism-blue">
          <div className="film glassmorphism-white container grid grid-cols-12">
            <div className="img-film shadow-inner col-span-3">
              <img src={chiTietPhongVe.thongTinPhim?.hinhAnh} alt="..." />
            </div>
            <div className="info-film shadow-inner col-span-9 pl-5">
              <div className="name-film">{chiTietPhongVe.thongTinPhim?.tenPhim}</div>
              <div className="date-film">Ngày chiếu: {chiTietPhongVe.thongTinPhim?.ngayChieu}</div>
              <div className="time-film">Giờ chiếu: {chiTietPhongVe.thongTinPhim?.gioChieu}</div>
              <div className="detailed-movie">
                <div className="btn-detailed" onClick={() => {
                  props.history.push(`/home`)
                }}>Xem chi thêm phim</div>
              </div>
            </div>
          </div>
          <div className="container glassmorphism-white">
            <div className="booking grid grid-cols-12">
              <div className="chair-booking col-span-9 mr-3">
                <div className="screen w-full">
                  <div className="screen-red pt-5">
                  </div>
                  <div className="screen-box"></div>
                </div>
                <div className="chair">
                  {/*render danh sách ghế */}
                  Ghế
                </div>
              </div>
              <div className="info-booking col-span-3">
                <div>Địa điểm: {chiTietPhongVe.thongTinPhim?.tenCumRap}</div>
                <div>Địa chỉ: {chiTietPhongVe.thongTinPhim?.diaChi}</div>
                <div className="info-chair">Ghế đã chọn:</div>
                <div className="amount d-flex justify-between align-items-center">
                  <div>Tổng tiền:</div>
                  <div>Số tiền</div>
                </div>
                <div className="button-ticket">
                  <button className="btn w-full">Đặt vé</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  );
}

