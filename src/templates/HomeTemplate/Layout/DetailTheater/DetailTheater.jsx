import React, { useState } from 'react'
import { Tabs } from 'antd';
import { NavLink } from 'react-router-dom';
import moment from "moment";
export default function DetailTheater(props) {

  const filmDetail = props.filmDetail;
  const { TabPane } = Tabs;
  const renderHeThongRap = () => {
    return filmDetail.heThongRapChieu.map((heThongRap, indexHTR) => {
      return (
        <TabPane key={indexHTR} tab={<img src={heThongRap.logo} className="rounded-full" width="50" />}>
          <div>
            <nav>
              <div className="nav nav-tabs d-flex justify-around" id="nav-tab" role="tablist">
                <a className="nav-item nav-detail nav-link active w-1/2 text-center pt-2 pb-2" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Cụm rạp</a>
                <a className="nav-item nav-detail nav-link w-1/2 text-center pt-2 pb-2" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Thông tin rạp</a>
              </div>
            </nav>
            <div className="tab-content bg-white" id="nav-tabContent">
              <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                <div className="grid xl:grid-cols-2 sm:grid-cols-1 p-3">
                  {heThongRap.cumRapChieu.map((cumRap, indexCumRap) => {
                    return (
                      <div
                        className="flex m-1 p-2 gap-2 text-xs font-semibold border-b-2 border-gray-200 transition ease-in-out delay-150 hover:shadow-md shadow-black hover:scale-105 duration-300 hover:border-2 "
                        key={indexCumRap}
                      >
                        {/* hinhAnhPhim */}
                        <div className="shadow-md shadow-black" >
                          <img className='img-Rap' src={cumRap.hinhAnh} alt={cumRap.tenCumRap} width="180px" style={{ height: "300px" }} />
                        </div>
                        {/* tenPhim */}
                        <div className="relative pr-1">
                          <h1 className="w-fit uppercase p-1 mb-2 text-md font-semibold">{cumRap.tenCumRap}</h1>
                          <h1 className="w-fit text-md font-semibold">{cumRap.diaChi.substr(0, 65)}</h1>
                          <h1 className="w-fit mb-2 text-md font-semibold">{cumRap.diaChi.substr(65, cumRap.diaChi.length)}</h1>
                          {/* render lstLichChieuTheoRap */}
                          <div className="grid xl:grid-cols-5 xl:gap-2 sm:grid-cols-4 sm:gap-2 grid-cols-3 gap-2 text-center">
                            {cumRap.lichChieuPhim.slice(0, 12).map((lichChieu, indexLichChieu) => {
                              return (
                                <NavLink className="text-black bg-gray-50 border-2 p-2 hover:text-white hover:bg-red-500" to="/" key={indexLichChieu}>
                                  {moment(lichChieu.ngayChieuGioChieu).format("hh:mm:A")}
                                </NavLink>
                              )
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
              </div>
              <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">...</div>
            </div>
          </div>
        </TabPane>
      )
    });
  };
  console.log('phim', filmDetail);
  return (
    <div className='container'>
      <Tabs centered>
        {renderHeThongRap()}
      </Tabs>
    </div>

  )
}
