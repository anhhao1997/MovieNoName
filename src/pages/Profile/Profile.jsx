import React from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { layThongTinNguoiDungAction } from "../../redux/actions/QuanLyNguoiDungAction";

export default function Profile(props) {
  const { thongTinNguoiDung } = useSelector((state) => state.QuanLyNguoiDungReducer);
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);
  return (
    <div className=" bg-dark h-[100vh] ">
      <div className="container">
        <div className="grid grid-cols-3 pt-10">
          <Ticket {...props} />
        </div>
      </div>
    </div>
  );
}

function Ticket(props) {
  const dispatch = useDispatch();
  const { thongTinNguoiDung } = useSelector((state) => state.QuanLyNguoiDungReducer);
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);

  useDispatch(dispatch(layThongTinNguoiDungAction()));
  console.log("thongTinNguoiDung", thongTinNguoiDung);
  return (
    <article className="ticket">
      <header className="ticket__wrapper">
        <div className="ticket__header">TÊN PHIM</div>
      </header>
      <div className="ticket__divider">
        <div className="ticket__notch" />
        <div className="ticket__notch ticket__notch--right" />
      </div>
      <div className="ticket__body">
        <section className="ticket__section">
          <h3>Vé của bạn</h3>
          <p>Ngày chiếu</p>
          <p>Giờ chiếu</p>
          <p>Số ghế</p>
        </section>
      </div>
      <footer className="ticket__footer">
        <span>Đã đặt vé</span>
        <span>Mã QR</span>
      </footer>
    </article>
  );
}
