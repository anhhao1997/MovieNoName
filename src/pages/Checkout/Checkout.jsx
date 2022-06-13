import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { layChiTietPhongVeAction } from "./../../redux/actions/QuanLyDatVeActions";
import moment from "moment";

export default function Checkout(props) {
  //Lấy thông tin người dùng
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);
  console.log(userLogin);
  //Lấy thông tin phòng vé
  const { chiTietPhongVe } = useSelector((state) => state.QuanLyDatVeReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    // tạo hàm để dispatch action lên reducer
    const action = layChiTietPhongVeAction(props.match.params.id);
    dispatch(action);
  }, []);

  console.log("chiTietPhongVe", chiTietPhongVe);
  const { danhSachGhe,thongTinPhim } = chiTietPhongVe;
  return (
    <div className="checkout">
      {/* //header checkout */}
      <div className="header-checkout glassmorphism-black fixed-top p-3">
        <div className="container d-flex align-items-center justify-content-between text-white">
          <div className="logo text-center">Logo</div>
          <div className="info-user text-center">
            <div className="dropdown show">
              <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span className="mr-3">
                  <i className="fa fa-user pr-2" />
                  {userLogin.hoTen}
                </span>
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a className="item-drop-1" href="#">
                  Lịch sử{" "}
                </a>
                <a className="item-drop-2" href="#">
                  Đăng xuất
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${thongTinPhim.hinhAnh})`, minHeight: "100vh" }}>
        <div className="glassmorphism glassmorphism-black pt-14" style={{ minHeight: "100vh" }}>
          <div className="container">
            {" "}
            <div className="grid grid-cols-1 md:grid-cols-7 gap-1 mt-5">
              <div className="col-span-2 justify-self-start">
                <div className="wsk-cp-product glassmorphism-black">
                  <div className="wsk-cp-img">
                    <img src={thongTinPhim.hinhAnh} className="img-responsive" style={{ height: "400px" }} />
                  </div>
                  <div className="wsk-cp-text pt-[140%] lg:pt-[150%] ">
                    <div className="category">
                      <span>{thongTinPhim.tenRap}</span>
                    </div>
                    <div className="title-product">
                      <h3>{thongTinPhim.tenPhim}</h3>
                    </div>
                    <div className="description-prod">
                      <p>Rạp:{thongTinPhim.tenCumRap} </p>
                      <p>Ngày chiếu: {moment(thongTinPhim.ngayChieu).format("D/M/YYYY")}</p>
                      <p>Suất chiếu: {thongTinPhim.gioChieu}</p>
                      <p>Chỗ ngồi</p>
                    </div>
                    <div className="card-footer">
                      <div className="wcf-left">
                        <span className="price">Tạm tính: 500.000</span>
                      </div>
                      <div className="wcf-right">
                        <a href="#" className="buy-btn">
                          <i className="fas fa-shopping-basket"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* //đặt vé */}
              <div className=" col-start-3 col-span-5">
                <div className="booking grid grid-flow-row">
                  <div className="screen justify-self-center"></div>
                  <h3 className="text-center text-white">Màn hình</h3>
                  {/* //render ghe */}
                  <div className="seat">
                    {/*render danh sách ghế */}
                    <div className="seat1"></div>
                    <div className="seat2"></div>
                  </div>
                </div>
              </div>
            </div>
            {/* //*--- */}
          </div>
        </div>
      </div>
    </div>
  );
}
