import React, { useState } from "react";
import { Tabs } from "antd";
import { NavLink } from "react-router-dom";
import moment from "moment";
export default function DetailTheater(props) {
  const filmDetail = props.filmDetail;
  const { TabPane } = Tabs;
  const renderHeThongRap = () => {
    return filmDetail.heThongRapChieu.map((heThongRap, indexHTR) => {
      return (
        <TabPane key={indexHTR} tab={<img src={heThongRap.logo} className="rounded-full" width="50" />}>
          <div className="glassmorphism-white">
            <div className="rap-detail bg-transparent text-white grid gap-2 sm:grid-cols-1 md:grid-cols-2 p-3">
              {heThongRap.cumRapChieu.map((cumRap, indexCumRap) => {
                return (
                  <div
                    className="w-full h-full m-1 p-1 font-semibold border-gray-200 transition ease-in-out delay-150 hover:shadow-md hover:shadow-black hover:scale-105 duration-300 hover:border-2 overflow-hidden "
                    key={indexCumRap}
                  >
                    <div className="grid grid-cols-3 gap-2  ">
                      {/* hinhAnhPhim */}
                      <div className="self-center">
                        <div className="shadow-md shadow-black">
                          <img className="w-full" src={cumRap.hinhAnh} alt={cumRap.tenCumRap} />
                        </div>
                      </div>
                      {/* tenPhim */}
                      <div className="col-span-2 w-full ">
                        <p className="w-fit uppercase sm:text-md text-white font-semibold">{cumRap.tenCumRap}</p>
                        <p className="w-fit sm:text-md">{cumRap.diaChi.substr(0, 65)}</p>

                        {/* render lstLichChieuTheoRap */}

                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-rows-3  md:grid-cols-4 gap-x-1">
                          {cumRap.lichChieuPhim.slice(0, 12).map((lichChieu, indexLichChieu) => {
                            return (
                              <NavLink className="btn-lich-chieu" to="/" key={indexLichChieu}>
                                {moment(lichChieu.ngayChieuGioChieu).format("hh:mm:A")}
                              </NavLink>
                            );
                          })}
                        </div>
                        <button className="custom-btn btn-main mt-1">
                          <span>Đặt vé ngay</span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </TabPane>
      );
    });
  };
  console.log("phim", filmDetail);
  return (
    <div className="container">
      <Tabs className="pb-10" centered>
        {renderHeThongRap()}
      </Tabs>
    </div>
  );
}
