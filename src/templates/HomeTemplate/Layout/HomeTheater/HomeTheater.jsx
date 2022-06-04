import React, { useEffect } from "react";
import { Tabs } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { layDanhSachHeThongRap } from "../../../../redux/actions/QuanLyRapActions";
import { NavLink } from "react-router-dom";
import moment from "moment";

export default function HomeTheater(props) {
  const { TabPane } = Tabs;

  const { heThongRapChieu } = useSelector((state) => state.QuanLyRapReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    //khi mà trang vừa load lên thì sẽ gọi action layDanhSachHeThongRap()
    const action = layDanhSachHeThongRap();
    dispatch(action);
  }, []);

  const renderHeThongRap = () => {
    return heThongRapChieu.map((heThongRap, index) => {
      return (
        //render logo heThongRap
        <TabPane key={index} tab={<img src={heThongRap.logo} className="rounded-full" width="50" />}>
          <Tabs tabPosition={"left"}>
            {/* render tiep cumRap từ lstCumRap */}
            {heThongRap.lstCumRap?.slice(0, 5).map((cumRap, index) => {
              return (
                <TabPane
                  key={index}
                  tab={
                    <div className="text-left" style={{ width: "380px" }}>
                      <div className="flex gap-2 items-center">
                        <img src={heThongRap.logo} className="rounded-full" width="40" />
                        <div className=" uppercase font-semibold">{cumRap.tenCumRap}</div>
                      </div>

                      <p className="mt-1">Địa chỉ: {cumRap.diaChi.length > 50 ? cumRap.diaChi.slice(0, 45) + " ..." : cumRap.diaChi}</p>
                    </div>
                  }
                >
                  {/* render danhSachPhim tuong ứng */}
                  {cumRap.danhSachPhim.slice(0, 5).map((phim, index) => {
                    return (
                      <div className="mb-2" key={index}>
                        <div className="flex m-1 gap-2 py-2 text-xs font-semibold border-b-2 border-gray-200 transition ease-in-out delay-150 hover:shadow-md shadow-black hover:scale-110 duration-300 hover:border-2 ">
                          {/* hinhAnhPhim */}
                          <div className="shadow-md shadow-black border-8 border-white">
                            <img src={phim.hinhAnh} alt={phim.tenPhim} width="150" style={{ height: "100%" }} />
                          </div>
                          {/* tenPhim */}
                          <div className="relative">
                            <h1 className="w-fit uppercase border-l-8 border-black p-1 bg-red-500 text-white">{phim.tenPhim}</h1>

                            {/* render lstLichChieuTheoPhim */}
                            <div className="grid grid-cols-6 gap-2">
                              {phim.lstLichChieuTheoPhim?.slice(0, 10).map((lichChieu, index) => {
                                return (
                                  <NavLink className="text-black bg-gray-50 border-2 p-2 hover:text-white hover:bg-red-500" to="/" key={index}>
                                    {moment(lichChieu.ngayChieuGioChieu).format("hh:mm")}
                                  </NavLink>
                                );
                              })}
                            </div>

                            <button className="bg-orange-500 text-white px-3 py-2 mt-3 absolute bottom-2">Đặt vé ngay</button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </TabPane>
              );
            })}
          </Tabs>
        </TabPane>
      );
    });
  };

  return (
    <div className="container my-5 w-4/5">
      <Tabs tabPosition={"left"}>{renderHeThongRap()}</Tabs>
    </div>
  );
}
