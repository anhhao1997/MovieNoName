import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { layDanhSachHeThongRap } from "../../../../redux/actions/QuanLyRapActions";
import HomeTheaterTabPane from "./HomeTheaterTabPane";

export default function HomeTheater(props) {
  
  const { heThongRapChieu } = useSelector((state) => state.QuanLyRapReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    //khi mà trang vừa load lên thì sẽ gọi action layDanhSachHeThongRap()
    const action = layDanhSachHeThongRap();
    dispatch(action);
  }, []);

 

  return (
    <div className="container">
      <HomeTheaterTabPane heThongRapChieu={heThongRapChieu}/>
    </div>
  );
}
