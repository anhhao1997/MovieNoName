import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { KetQuaDatVe } from "../../../pages/Checkout/Checkout";
import { layThongTinNguoiDungAction } from "../../../redux/actions/QuanLyNguoiDungAction";

function UserHistory() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(layThongTinNguoiDungAction());
  }, []);
  const { thongTinNguoiDung } = useSelector((state) => state.QuanLyNguoiDungReducer);
  return (
    <div className="h-full w-full flex flex-col bg-slate-200">
      {/* <div className="flex flex-col pt-3 items-center">
        <div className="user_content relative">
          <img src="https://picsum.photos/100/100" className="rounded-full relative" alt="profileImg" />
        </div>
        <p className="text-sm font-bold mt-2 text-gray-600">{thongTinNguoiDung.hoTen}</p>
      </div> */}
      <KetQuaDatVe />
    </div>
  );
}

export default UserHistory;
