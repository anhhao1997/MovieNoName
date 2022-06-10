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
            <div className="rap-detail bg-transparent text-white grid xl:grid-cols-2 sm:grid-cols-1 p-3">
              {heThongRap.cumRapChieu.map((cumRap, indexCumRap) => {
                return (
                  <div
                    className="flex m-1 p-2 gap-2 text-xs font-semibold border-b-2 border-gray-200 transition ease-in-out delay-150 hover:shadow-md shadow-black hover:scale-105 duration-300 hover:border-2 "
                    key={indexCumRap}
                  >
                    {/* hinhAnhPhim */}
                    <div className="shadow-md shadow-black">
                      <img className="img-Rap" src={cumRap.hinhAnh} alt={cumRap.tenCumRap} width="180px" style={{ height: "300px" }} />
                    </div>
                    {/* tenPhim */}
                    <div className="detail-theater relative w-full">
                      <p className="w-fit uppercase p-1 mb-2 text-md font-semibold">{cumRap.tenCumRap}</p>
                      <p className="w-fit text-md font-semibold">{cumRap.diaChi.substr(0, 65)}</p>
                      <p className="w-fit mb-2 text-md font-semibold">{cumRap.diaChi.substr(65, cumRap.diaChi.length)}</p>
                      {/* render lstLichChieuTheoRap */}

                      <div className="grid sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-4 gap-1">
                        {cumRap.lichChieuPhim.slice(0, 12).map((lichChieu, indexLichChieu) => {
                          return (
                            <NavLink className="btn-lich-chieu" to="/" key={indexLichChieu}>
                              {moment(lichChieu.ngayChieuGioChieu).format("hh:mm:A")}
                            </NavLink>
                          );
                        })}
                      </div>
                      <button className="custom-btn btn-main absolute bottom-0">
                        <span>Đặt vé ngay</span>
                      </button>
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
      <Tabs className="pb-10" centered>{renderHeThongRap()}</Tabs>
    </div>
  );
}
