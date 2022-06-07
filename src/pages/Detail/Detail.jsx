import React, { useEffect } from "react";
import DetailInfoFilm from "./../../templates/HomeTemplate/Layout/DetailInfoFilm/DetailInfoFilm";
import DetailTheater from "./../../templates/HomeTemplate/Layout/DetailTheater/DetailTheater";
import { useDispatch, useSelector } from "react-redux";
import { layThongTinLichChieuPhim } from "../../redux/actions/QuanLyRapActions";

export default function Detail(props) {
  // bóc tách filmDetail trong QuanLyPhimReducer
  const filmDetail = useSelector((state) => state.QuanLyPhimReducer.filmDetail);

  //Khi vừa load lên thì dispatch(action) layThongTinLichChieuPhim thông qua id được lấy từ param trên url
  const dispatch = useDispatch();
  useEffect(() => {
    //lấy id từ param trên url
    let { id } = props.match.params;
    // console.log(id);
    const action = layThongTinLichChieuPhim(id);
    dispatch(action);
  }, []);

  return (
    <div>
      <div style={{ backgroundImage: `url(${filmDetail.hinhAnh})`, minHeight: "100vh" }} className="bg-cover bg-center bg-no-repeat w-full">
        <div className="glassmorphism-black pt-10" style={{ minHeight: "100vh" }}>
          <DetailInfoFilm filmDetail={filmDetail}></DetailInfoFilm>
          <DetailTheater></DetailTheater>
        </div>
      </div>


      <div className="modal fade bd-example-modal" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content modal-trailer">
              <div className="modal-header ">
                <h2 className="modal-title font-semibold text-lg " id="exampleModalLongTitle">
                  {filmDetail.tenPhim}
                </h2>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <iframe className="h-full w-full" src={filmDetail.trailer}></iframe>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
