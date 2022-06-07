import React from "react";
import moment from "moment";

export default function DetailInfoFilm(props) {
  const filmDetail = props.filmDetail;

  return (
    <div className="container w-full">
      <div className="m-3" style={{ padding: "30px 30px" }}>
        <div className="grid xl:grid-cols-3 gap-2 sm:grid-cols-1">
          <div className="justify-self-center">
            <div className="card-item-detail ">
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
            <h2 className="text-xl text-white font-semibold">{filmDetail.tenPhim}</h2>
            <div className="text-lg text-white">{filmDetail.danhGia}/10</div>
            <h3 className="text-lg text-white">Thời lượng: </h3>
            <h3 className="text-lg text-white">Ngày khởi chiếu: {moment(filmDetail.ngayKhoiChieu).format("DD MMMM YYYY")}</h3>
            <h3 className="w-fit mb-2 text-lg text-white border-b-4">Nội dung phim:</h3>
            <p className="text-white" style={{ fontSize: "16px" }}>
              {filmDetail.moTa}
            </p>
          </div>
        </div>

       
      </div>
    </div>
  );
}
