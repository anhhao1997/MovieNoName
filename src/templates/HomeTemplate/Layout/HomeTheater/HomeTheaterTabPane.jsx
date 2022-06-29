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
                    <div className="text-left" style={{ width: "430px", fontSize: "16px" }}>
                      <div className="flex gap-2 items-center ">
                        <img src={heThongRap.logo} className="rounded-full" width="40" />
                        <div className="uppercase font-semibold"><h1 style={{fontSize:'16px'}}>{cumRap.tenCumRap}</h1></div>
                      </div>

                      <p className="mt-1">Địa chỉ: {cumRap.diaChi.length > 50 ? cumRap.diaChi.slice(0, 30) + " ..." : cumRap.diaChi}</p>
                    </div>
                  }
                >
                  {/* render danhSachPhim tuong ứng */}
                  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 ">
                    {cumRap.danhSachPhim.slice(0, 10).map((phim, index) => {
                      return (
                        <div
                          className="grid grid-cols-3 w-full h-full m-1 p-2 gap-2 text-xs font-semibold border-b-2 border-gray-200 transition ease-in-out delay-150 hover:shadow-md shadow-black hover:scale-105 duration-300 hover:border-2 relative"
                          key={index}
                        >
                          {/* hinhAnhPhim */}
                          <div className="shadow-md shadow-black">
                            <img src={phim.hinhAnh} alt={phim.tenPhim} className="w-full h-full" />
                          </div>
                          {/* tenPhim */}
                          <div className="col-span-2">
                            <h2 className="w-fit uppercase p-1 mb-2 text-md font-semibold">{phim.tenPhim}</h2>

                            {/* render lstLichChieuTheoPhim */}
                            <div className="grid grid-cols-3 gap-y-0 gap-x-1 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-4">
                              {phim.lstLichChieuTheoPhim?.slice(0, 6).map((lichChieu, index) => {
                                return (
                                  <NavLink className="btn-lich-chieu" to={`checkout/${lichChieu.maLichChieu}`} key={index}>
                                    {moment(lichChieu.ngayChieuGioChieu).format("hh:mm A")}
                                  </NavLink>
                                );
                              })}
                            </div>
                            <div className="w-[150px] absolute bottom-3">
                              <button className="custom-btn btn-main ">
                                <span className="spanStyle">Đặt vé ngay</span>
                              </button>
                            </div>
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
  // console.log("heThongRapChieu", props);
  return (
    <div className="pb-10">
      <h1 className="uppercase text-center mt-5 pt-3">HỆ THỐNG RẠP CHIẾU</h1>
      <Tabs centered tabPosition={"top"}>
        {renderHeThongRap()}
      </Tabs>
    </div>
  );
}
