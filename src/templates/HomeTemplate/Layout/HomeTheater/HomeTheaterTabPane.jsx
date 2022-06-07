import { Tabs } from "antd";
import React from "react";
import moment from "moment";
import { NavLink } from "react-router-dom";

export default function HomeTheaterTabPane(props) {
  const { TabPane } = Tabs;
  const renderHeThongRap = () => {
    return props.heThongRapChieu.map((heThongRap, index) => {
      return (
        //render logo heThongRap
        <TabPane key={index} tab={<img src={heThongRap.logo} className="rounded-full" width="50" />}>
          <Tabs tabPosition={"top"}>
            {/* render tiep cumRap từ lstCumRap */}
            {heThongRap.lstCumRap?.slice(0, 5).map((cumRap, index) => {
              return (
                <TabPane
                  key={index}
                  tab={
                    <div className="text-left" style={{ width: "400px" }}>
                      <div className="flex gap-2 items-center">
                        <img src={heThongRap.logo} className="rounded-full" width="40" />
                        <div className=" uppercase font-semibold">{cumRap.tenCumRap}</div>
                      </div>

                      <p className="mt-1">Địa chỉ: {cumRap.diaChi.length > 50 ? cumRap.diaChi.slice(0, 30) + " ..." : cumRap.diaChi}</p>
                    </div>
                  }
                >
                  {/* render danhSachPhim tuong ứng */}
                  <div className="grid xl:grid-cols-2 sm:grid-cols-1">
                    {cumRap.danhSachPhim.slice(0, 10).map((phim, index) => {
                      return (
                        <div
                          className="flex m-1 p-2 gap-2 text-xs font-semibold border-b-2 border-gray-200 transition ease-in-out delay-150 hover:shadow-md shadow-black hover:scale-105 duration-300 hover:border-2 "
                          key={index}
                        >
                          {/* hinhAnhPhim */}
                          <div className="shadow-md shadow-black">
                            <img src={phim.hinhAnh} alt={phim.tenPhim} width="180" style={{ height: "100%" }} />
                          </div>
                          {/* tenPhim */}
                          <div className="relative">
                            <h1 className="w-fit uppercase p-1 mb-2 text-md font-semibold">{phim.tenPhim}</h1>

                            {/* render lstLichChieuTheoPhim */}
                            <div className="grid grid-cols-5 gap-2">
                              {phim.lstLichChieuTheoPhim?.slice(0, 10).map((lichChieu, index) => {
                                return (
                                  <NavLink className="text-black bg-gray-50 border-2 p-2 hover:text-white hover:bg-red-500" to="/" key={index}>
                                    {moment(lichChieu.ngayChieuGioChieu).format("hh:mm")}
                                  </NavLink>
                                );
                              })}
                            </div>

                            <button className="custom-btn btn-main absolute bottom-1">
                              <span>Đặt vé ngay</span>
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </TabPane>
              );
            })}
          </Tabs>
        </TabPane>
      );
    });
  };
  console.log("heThongRapChieu", props);
  return (
    <div className="pb-10">
      <h2 className="uppercase text-center text-xl font-semibold my-3 pt-3">HỆ THỐNG RẠP CHIẾU</h2>
      <Tabs centered tabPosition={"top"}>
        {renderHeThongRap()}
      </Tabs>
    </div>
  );
}
