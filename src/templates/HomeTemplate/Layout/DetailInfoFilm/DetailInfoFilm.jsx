import React from "react";

export default function DetailInfoFilm(props) {
  const filmDetail = props.filmDetail;

  return (
    <div className="container w-full">
      <div className="glassmorphism glassmorphism-black m-3" style={{ padding: "30px 30px" }}>
        <div className="grid grid-cols-6 gap-2">
          <div className="col-span-2">
            <img src={filmDetail.hinhAnh} alt="" />
          </div>
          <div className="col-span-2">
            <h2 className="text-lg text-white">{filmDetail.tenPhim}</h2>
            <h3 className="text-lg text-white">Đánh giá</h3>
            <h3 className="text-lg text-white">Thời lượng: </h3>
            <h3 className="text-lg text-white">Ngày khởi chiếu</h3>
            <h3 className="text-lg text-white">Nội dung phim:</h3>
            <p className="text-md text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio odio reprehenderit labore laudantium id quibusdam pariatur quod delectus soluta deserunt!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
