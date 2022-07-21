import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TicketsList from "../../../components/Tickets/TicketsList";
import { layThongTinNguoiDungAction } from "../../../redux/actions/QuanLyNguoiDungAction";
import { Tabtitle } from "../../../util/FunctionTitle";

function UserHistory() {
  Tabtitle("Lịch sử đặt vé")

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(layThongTinNguoiDungAction());
  }, []);
  const { thongTinNguoiDung } = useSelector((state) => state.QuanLyNguoiDungReducer);
  return (
    <div className="h-full md:h-screen w-full flex flex-col bg-slate-200">
      <div className="flex flex-col pt-3 items-center">
        <div className="user_content relative">
          <img src="https://picsum.photos/100/100" className="rounded-full relative" alt="profileImg" />
        </div>
        <p className="text-sm font-bold mt-2 text-gray-600">{thongTinNguoiDung.hoTen}</p>
      </div>
      <div className="px-2 py-3">
        <p className="text-sm md:text-lg font-bold uppercase pb-3 text-center">Lịch sử đặt vé</p>
        <TicketsList />
      </div>
    </div>
  );
}

export default UserHistory;
