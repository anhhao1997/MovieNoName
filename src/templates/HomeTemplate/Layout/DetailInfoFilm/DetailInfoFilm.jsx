import React from "react";
import moment from "moment";

export default function DetailInfoFilm(props) {
  const filmDetail = props.filmDetail;

  return (
    <div className="container w-full">
      <div className="m-3" style={{ padding: "30px 30px" }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 ">
          <div className="justify-self-center">
            <div className="card-item-detail shadow-md shadow-black sm:mb-2">
              <img src={filmDetail.hinhAnh} alt={filmDetail.biDanh} />
              <div className="card-content-detail">
                <div className="btn-trailer-detail">
                  <button type="button" className="btn btn-modal" data-toggle="modal" data-target="#exampleModalCenter">
                    <i className="fa fa-play-circle"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-2">
            <div className="grid grid-flow-row gap-1">
              <h1 className="uppercase text-white">{filmDetail.tenPhim}</h1>
              <div className="flex flex-wrap">
                <div className="custom-detail  text-white">
                  <i className="fas fa-calendar-alt mr-1 text-orange-400"></i>Khởi chiếu: {moment(filmDetail.ngayKhoiChieu).format("D/M/YYYY")}
                </div>
                <div className="custom-detail  text-white">
                  <i className="spanStyle fas fa-star mr-1 text-yellow-300"></i>
                  {filmDetail.danhGia}/10
                </div>
                <div className="custom-detail text-white">
                  {" "}
                  <i className="fas fa-clock text-red-500 mr-1"></i>
                  120 phút{" "}
                </div>

                <div className="custom-detail">Hành động</div>
                <div className="custom-detail">Tâm Lý</div>
                <div className="custom-detail">Khoa học viễn tưởng</div>
                <div className="custom-detail">Hài hước</div>
              </div>

              <div className="xl:w-3/4 sm:w-full mt-4">
                <h3 className="w-fit uppercase mb-2 pb-2 text-white border-b-2">Nội dung phim</h3>
                <p className="text-white">{filmDetail.moTa.length > 400 ? filmDetail.moTa.slice(0,400) + "...": filmDetail.moTa }</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
