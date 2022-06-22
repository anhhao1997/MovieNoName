import React, { Fragment } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserOutlined } from "@ant-design/icons";
import { datVeAction, layChiTietPhongVeAction } from "./../../redux/actions/QuanLyDatVeActions";
import { CHANGE_TAB_ACTIVE, DAT_GHE, DAT_VE, KIEM_TRA_TRANG_DAT_VE } from "../../redux/types/QuanLyDatVeType";
import moment from "moment";
import _ from "lodash";
import { ThongTinDatVe } from "../../_core/models/ThongTinDatVe";

import { connection } from "../../index";
import { Tabs } from "antd";
import { layThongTinNguoiDungAction } from "../../redux/actions/QuanLyNguoiDungAction";

/**
 *1. Tạo mảng danhSachDangDat [] bên reducer QuanLyDatVe
 *2. Dùng useSelector để lấy danhSachGheDangDat về Checkout Component {danhSachGheDangDat}
 *3.Tại ghe trong renderGhe() dùng sự kiện onClick để dispatch action với type: DAT_VE và dữ liệu gửi lên reducer là gheduocChon : ghe
 *4. Tạo type bên file type
 *5. Bắt case type bên reducer và tiến hành so sánh
 *6. Tại lúc render ra từng ghế sẽ tiến hành kiểm tra xem cái ghế đó có đang trong danhSachGheDangDat trên reducer hay không, nếu có thì add classGheDangDat, nếu kh thì kh add classGheDangDat
 */

function Checkout(props) {
  //Lấy thông tin người dùng
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);
  // console.log(userLogin);
  //Lấy thông tin phòng vé
  const { chiTietPhongVe, danhSachGheDangDat } = useSelector((state) => state.QuanLyDatVeReducer);

  const { danhSachGhe, thongTinPhim } = chiTietPhongVe;

  const dispatch = useDispatch();

  useEffect(() => {
    // tạo hàm để dispatch action lên reducer
    const action = layChiTietPhongVeAction(props.match.params.id);

    dispatch(action);

    // dispatch đến reducer reset lại danh sách chọn
    dispatch({
      type: KIEM_TRA_TRANG_DAT_VE,
      id: props.match.params.id,
    });
  }, []);

  // console.log("chiTietPhongVe", chiTietPhongVe);
  // console.log("danhSachGheDangDat", danhSachGheDangDat);

  const renderGhe = () => {
    return danhSachGhe.slice(0, 96).map((ghe, index) => {
      let classGheVip = ghe.loaiGhe === "Vip" ? "gheVip" : "";

      let classGheDaDat = ghe.daDat === true ? "gheDaDat" : "";
      let classGheDangDat = "";
      let classGheDaDuocDat = "";
      let indexGheDangDat = danhSachGheDangDat.findIndex((gheDangDat) => gheDangDat.maGhe === ghe.maGhe);

      if (indexGheDangDat != -1) {
        classGheDangDat = "gheDangDat";
      }
      if (userLogin.taiKhoan === ghe.taiKhoanNguoiDat) {
        classGheDaDuocDat = "gheDaDuocDat";
      }
      return (
        <Fragment key={index}>
          <button
            onClick={() => {
              dispatch({
                type: DAT_GHE,
                gheDuocChon: ghe,
              });
            }}
            disabled={ghe.daDat}
            key={index}
            className={`ghe ${classGheVip} ${classGheDaDat} ${classGheDangDat} ${classGheDaDuocDat} `}
          >
            {classGheDaDuocDat != "" ? <UserOutlined /> : ghe.stt}
          </button>

          {/* {(index + 1) % 12 === 0 ? <br /> : ""} */}
        </Fragment>
      );
    });
  };

  return (
    <div>
      <div className="bg-cover bg-fixed bg-center bg-no-repeat" style={{ backgroundImage: `url(${thongTinPhim.hinhAnh})`, minHeight: "100vh" }}>
        <div className="glassmorphism glassmorphism-black text-white pt-5 lg:pt-10" style={{ minHeight: "100vh" }}>
          <div className="container">
            {" "}
            <div className="grid grid-cols-1 pb-7 gap-3 lg:grid-cols-7 lg:gap-1">
              {/* card item phim */}
              <div className="order-2 col-span-7 md:order-1 lg:justify-self-center lg:col-span-2 ">
                <div className="wsk-cp-product glassmorphism-black">
                  <div className="wsk-cp-img">
                    <img className="sm:h-full md:h-full lg:h-[400px] img-responsive" src={thongTinPhim.hinhAnh} />
                  </div>

                  <div className="wsk-cp-text  lg:pt-[150%] ">
                    <div className="category">
                      <span>{thongTinPhim.tenRap}</span>
                    </div>
                    <div className="title-product">
                      <h3>{thongTinPhim.tenPhim}</h3>
                    </div>
                    <div className="description-prod">
                      <p>Rạp:{thongTinPhim.tenCumRap} </p>
                      <p>Ngày chiếu: {moment(thongTinPhim.ngayChieu).format("DD/MM/YYYY")}</p>
                      <p>Suất chiếu: {thongTinPhim.gioChieu}</p>
                      <div className="flex flex-col">
                        <p>Chỗ ngồi: </p>
                        <div className="flex flex-row flex-wrap">
                          {_.sortBy(danhSachGheDangDat, ["stt"]).map((gheDangDat, index) => {
                            return (
                              <div className="ghe gheDangDat mt-2" key={index}>
                                {gheDangDat.stt}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    <div className="card-footer">
                      <div className="flex justify-between items-center">
                        <div style={{ fontSize: "18px" }}>Tạm tính: </div>
                        <div className="wcf-right text-lg font-semibold">
                          {danhSachGheDangDat
                            .reduce((tongTien, ghe, index) => {
                              return (tongTien += ghe.giaVe);
                            }, 0)
                            .toLocaleString()}
                          đ
                        </div>
                      </div>

                      <div className="flex">
                        <button
                          onClick={() => {
                            const thongTinDatVe = new ThongTinDatVe();
                            thongTinDatVe.maLichChieu = props.match.params.id;
                            thongTinDatVe.danhSachVe = danhSachGheDangDat;
                            dispatch(datVeAction(thongTinDatVe));
                            console.log(thongTinDatVe);
                          }}
                          className="custom-btn btn-main"
                        >
                          MUA VÉ <i className="fas fa-shopping-basket"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* //đặt vé */}
              <div className="order-1 col-span-7 md:order-2 lg:col-start-3 lg:mx-4 lg:col-span-5 ">
                <div className=" grid grid-flow-row rounded-md glassmorphism-black">
                  <div className="screen justify-self-center "></div>
                  <h3 className="text-center text-white">Màn hình</h3>
                  {/* //render ghe */}
                  <div className="text-center px-2 lg:px-3">
                    <div className="grid grid-cols-12 gap-1 justify-items-center lg:px-16 lg:py-5">{renderGhe()}</div>
                  </div>
                  <div className="grid grid-cols-3 justify-items-center sm:grid-cols-5 lg:px-16  bg-black mt-3">
                    <div className="m-2 flex flex-col items-center">
                      <div className="ghe gheDaDat"></div>
                      <div className="mt-3">Ghế đã đặt</div>
                    </div>

                    <div className="m-2 flex flex-col items-center">
                      <div className="ghe gheDangDat"></div>
                      <div className="mt-3">Ghế bạn đang chọn</div>
                    </div>

                    <div className="m-2 flex flex-col items-center">
                      <div className="ghe gheDaDuocDat"></div>
                      <div className="mt-3">Ghế bạn đã đặt</div>
                    </div>

                    <div className="m-2 flex flex-col items-center">
                      <div className="ghe gheVip mr-2"></div>
                      <div className="mt-3">Ghế Vip</div>
                    </div>

                    <div className="m-2 flex flex-col items-center">
                      <div className="ghe mr-2"></div>
                      <div className="mt-3">Ghế thường</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const { TabPane } = Tabs;

export default function (props) {
  const { tabActive } = useSelector((state) => state.QuanLyDatVeReducer);
  const { userLogin, thongTinNguoiDung } = useSelector((state) => state.QuanLyNguoiDungReducer);

  const dispatch = useDispatch();
  return (
    <div className="">
      <div className="checkout">
        <div className="header-checkout">
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
      </div>
      <div className="tabsCheckout">
        <Tabs
          defaultActiveKey={1}
          activeKey={tabActive}
          onChange={(key) => {
            dispatch({
              type: CHANGE_TAB_ACTIVE,
              number: key.toString(),
            });
          }}
        >
          <TabPane tab="01 CHỌN GHẾ VÀ THANH TOÁN" key="1">
            <Checkout {...props} />
          </TabPane>
          <TabPane tab="02 KẾT QUẢ ĐẶT VÉ" key="2">
            <KetQuaDatVe {...props} />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}
function KetQuaDatVe(props) {
  const dispatch = useDispatch();
  const { userLogin, thongTinNguoiDung } = useSelector((state) => state.QuanLyNguoiDungReducer);
  const { thongTinDatVe } = thongTinNguoiDung;
  const { chiTietPhongVe, danhSachGheDangDat } = useSelector((state) => state.QuanLyDatVeReducer);
  const { thongTinPhim } = chiTietPhongVe;

  useEffect(() => {
    dispatch(layThongTinNguoiDungAction());
  }, []);

  const renderTicketItem = function () {
    // const reverseArrThongTinDatVe =_.reverse(thongTinDatVe)
    return _.reverse(
      thongTinDatVe?.map((ticket, index) => {
        const seats = _.first(ticket.danhSachGhe);
        return (
          <article className="ticket text-black drop-shadow-lg" key={index}>
            <header className="ticket__wrapper">
              <div className="ticket__header uppercase">
                <p className="font-medium">
                  {seats.tenHeThongRap} - {seats.tenCumRap}
                </p>
                <h3 className="font-bold mt-1 md:mt-2">{ticket.tenPhim}</h3>
              </div>
            </header>
            <div className="ticket__divider">
              <div className="ticket__notch" />
              <div className="ticket__notch ticket__notch--right" />
            </div>
            <div className="ticket__body">
              <section className="ticket__section">
                <p>Ngày đặt: {moment(ticket.ngayDat).format("DD/MM/YYYY - hh:mm A")}</p>
                <p>Thời lượng: {ticket.thoiLuongPhim} phút</p>

                <p>Chỗ ngồi: </p>
                <div className="seats grid grid-cols-8">
                  {ticket.danhSachGhe.slice(0, 8).map((ghe, index) => {
                    return (
                      <p className="ghe gheDaDuocDat" key={index}>
                        {ghe.tenGhe}
                      </p>
                    );
                  })}
                </div>
              </section>
            </div>
            <footer className="ticket__footer">
              <div className="w-3/5 sm:w-4/5 md:w-2/3 lg:w-3/4 2xl:w-3/5 flex">
                <p>Đặt vé thành công</p> <i className="fas fa-check-circle"></i>
              </div>
              <div className="w-2/5 sm:w-1/5 md:w-1/3 lg:w-1/4 2xl:w-2/5 flex items-center justify-start">
                <div className="barcode"></div>
              </div>
            </footer>
          </article>
        );
      })
    );
  };

  console.log("thongTinDatVe", thongTinDatVe);

  return (
    <div className="bg-cover bg-fixed bg-center bg-no-repeat" style={{ backgroundImage: `url(${thongTinPhim.hinhAnh})`, minHeight: "100vh" }}>
      <div className="glassmorphism glassmorphism-black text-white pt-10" style={{ minHeight: "100vh" }}>
        <div className="container">
          <div className="flex flex-col md:w-full justify-between pb-7 ">
            <div className="infoAccount flex flex-col justify-center items-center mb-2">
              <img className="w-10 h-10 sm:w-24 sm:h-24 rounded-full drop-shadow-md" src="https://picsum.photos/100/200" />
              <h1 className="text-white text-center my-2">Chúc mừng {userLogin.hoTen} đặt vé thành công</h1>
              <p className="text-center">Hãy xem thông tin đặt vé bên dưới để xem phim vui vẻ bạn nhé!</p>
            </div>
            <div className="tickets ">
              <div className="grid grid-cols-1 gap-1 justify-items-stretch md:grid-cols-2 md:gap-2 lg:grid-cols-3 2xl:grid-cols-4 2xl:gap-1">{renderTicketItem()}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
