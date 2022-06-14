import React, { Fragment } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { datVeAction, layChiTietPhongVeAction } from "./../../redux/actions/QuanLyDatVeActions";
import moment from "moment";
import { DAT_GHE } from "../../redux/types/QuanLyDatVeType";
import _, { } from 'lodash';
import { ThongTinDatVe } from "./../../_core/models/ThongTinDatVe";

export default function Checkout(props) {
  //Lấy thông tin người dùng
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);
  console.log(userLogin);
  //Lấy thông tin phòng vé, lấy thông tin ghế đang đặt
  const { chiTietPhongVe, danhSachGheDangDat } = useSelector((state) => state.QuanLyDatVeReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    // tạo hàm để dispatch action lên reducer
    const action = layChiTietPhongVeAction(props.match.params.id);
    dispatch(action);
  }, []);

  console.log("chiTietPhongVe", chiTietPhongVe);
  const { danhSachGhe, thongTinPhim } = chiTietPhongVe;

  const renderGhe = () => {
    return danhSachGhe.slice(0, 96).map((ghe, index) => {

      let classGheVip = ghe.loaiGhe === "Vip" ? "gheVip" : "";

      let classGheDaDat = ghe.daDat === true ? "gheDaDat" : "";

      let classGheDangDat = '';

      let classGheDuocDat = '';

      let indexGheDangDat = danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.maGhe === ghe.maGhe);

      if (userLogin.taiKhoan === ghe.taiKhoanNguoiDat) {
        classGheDangDat = 'gheDuocDat';
      }

      if (indexGheDangDat != -1) {
        classGheDangDat = 'gheDangDat';
      }

      return (
        <Fragment key={index}>
          <button onClick={() => {
            dispatch({
              type: DAT_GHE,
              gheDuocChon: ghe
            })
          }} disabled={ghe.daDat} key={index} className={`ghe ${classGheVip} ${classGheDangDat} ${classGheDaDat} ${classGheDuocDat}`}>
            {ghe.stt}
          </button>

          {/* {(index + 1) % 12 === 0 ? <br /> : ""} */}
        </Fragment>
      );
    });
  };

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
          <div className="container ">
            {" "}
            <div className="grid grid-cols-1 mt-5 pb-7 gap-3 lg:grid-cols-7 lg:gap-1  ">
              {/* card item phim */}
              <div className="order-2 col-span-7 md:order-1 lg:justify-self-center lg:col-span-2 ">
                <div className="wsk-cp-product glassmorphism-black">
                  <div className="wsk-cp-img">
                    <img className='sm:h-full md:h-full lg:h-full img-responsive' src={thongTinPhim.hinhAnh} />
                  </div>
                  <div className="wsk-cp-text lg:pt-[150%] ">
                    <div className="category">
                      <span>{thongTinPhim.tenRap}</span>
                    </div>
                    <div className="title-product">
                      <h3>{thongTinPhim.tenPhim}</h3>
                    </div>
                    <div className="description-prod">
                      <p>Rạp: {thongTinPhim.tenCumRap} </p>
                      <p>Ngày chiếu: {moment(thongTinPhim.ngayChieu).format("D/M/YYYY")}</p>
                      <p>Suất chiếu: {thongTinPhim.gioChieu}</p>
                      <p>Chỗ ngồi: {_.sortBy(danhSachGheDangDat, ['stt']).map((gheDangDat, index) => {
                        { /*return về các ghé đang chọn*/ }
                        return (
                          <span key={index} className='pl-2'>{gheDangDat.stt}</span>
                        )
                      })}</p>
                    </div>
                    <div className="card-footer">
                      <div className="wcf-left">
                        {/*return về tổng tiền cần thanh toán*/}
                        <span className="price">Thanh toán: {danhSachGheDangDat.reduce((tongTien, ghe, index) => {
                          return tongTien += ghe.giaVe;
                        }, 0).toLocaleString()} đ</span>
                      </div>
                      <div className="wcf-right">
                        <a onClick={() => {
                          // click gửi thông tin đặt vé
                          const thongTinDatVe = new ThongTinDatVe();
                          thongTinDatVe.maLichChieu = props.match.params.id;
                          thongTinDatVe.danhSachVe = danhSachGheDangDat;
                          console.log('thongTinDatVe', thongTinDatVe);
                          dispatch(datVeAction(thongTinDatVe));

                        }} className="buy-btn">
                          <i className="fas fa-shopping-basket"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* //đặt vé */}
              <div className="order-1 col-span-7 md:order-2 lg:col-start-3 lg:mx-4 col-span-5">
                <div className=" grid grid-flow-row glassmorphism-black rounded-tr-md rounded-tl-md ">
                  <div className="screen justify-self-center "></div>
                  <h3 className="text-center text-white">Màn hình</h3>
                  {/* //render ghe */}
                  <div className="text-center p-2 lg:p-3">
                    <div className="grid grid-cols-12 gap-1 justify-items-center lg:px-16 lg:py-5">{renderGhe()}</div>

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
