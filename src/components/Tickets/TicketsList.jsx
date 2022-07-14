import _ from "lodash";
import moment from "moment";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { layThongTinNguoiDungAction } from "../../redux/actions/QuanLyNguoiDungAction";

function TicketsList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(layThongTinNguoiDungAction());
  }, []);

  const { thongTinNguoiDung } = useSelector((state) => state.QuanLyNguoiDungReducer);
  const { thongTinDatVe } = thongTinNguoiDung;


  const renderTicketItem = function () {
    // const reverseArrThongTinDatVe =_.reverse(thongTinDatVe)
    return _.reverse(
      thongTinDatVe?.map((ticket, index) => {
        const seats = _.first(ticket.danhSachGhe);
        return (
          <article className="ticket text-black drop-shadow-lg" key={index}>
            <header className="ticket__wrapper">
              <div className="ticket__header">
                <p className="text-xs">
                  {seats.tenHeThongRap} - {seats.tenCumRap}
                </p>
                <p className="font-semibold capitalize text-xs md:text-xs mt-1 md:mt-2">{ticket.tenPhim}</p>
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

  return (
    <div className="tickets ">
      <div className="grid grid-cols-1 gap-1 justify-items-stretch md:grid-cols-2 md:gap-2 lg:grid-cols-3 2xl:grid-cols-4 2xl:gap-1">{renderTicketItem()}</div>
    </div>
  );
}

export default TicketsList;
