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
      <div className="header-checkout glassmorphism-blue p-3 fixed w-full">
        <div className="container d-flex align-items-center justify-content-between text-white">
          <div className="logo text-center">
            Logo
          </div>
          <div className="info-user text-center">
            <span className="mr-3"><i className="fa fa-user pr-2" />{userLogin.hoTen}</span>
            <button className="ml-3 btn">Đăng xuất</button>
          </div>
        </div>
      </div>
      <div className="bg-film " style={{ backgroundImage: `url(${chiTietPhongVe.thongTinPhim?.hinhAnh})` }}>
        <div className="glassmorphism-blue h-full">
          <div className="film  container grid grid-cols-12 ">
            <div className="img-film shadow-inner col-span-3">
              <img src={chiTietPhongVe.thongTinPhim?.hinhAnh} alt="..." />
            </div>
            <div className="info-film shadow-inner col-span-9 pl-5">
              <div className="name-film">{chiTietPhongVe.thongTinPhim.tenPhim}</div>
              <div className="date-film">Ngày chiếu: {chiTietPhongVe.thongTinPhim.ngayChieu}</div>
              <div className="time-film">Giờ chiếu: {chiTietPhongVe.thongTinPhim.gioChieu}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="bulkhead"></div>
      <div className="container">
        <div className="booking grid grid-cols-12">
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
          <div className="chair-booking col-span-9 ml-4">
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

        </div>
      </div>
    </div>
  );
}

