import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import _ from "lodash";

export default function Footer(props) {
  const { heThongRapChieu } = useSelector((state) => state.QuanLyRapReducer);

  const arrHeThongRap = _.map(heThongRapChieu, (heThongRap) => _.pick(heThongRap, ["maHeThongRap", "tenHeThongRap", "logo"]));

  console.log("arrHeThongRap", arrHeThongRap);
  return (
    <footer className="p-4 divide-y-2 bg-neutral-800 text-white font-semibold">
      <div className=" container grid grid-cols-8 py-10 ">
        <div className="col-start-1 col-span-3">
          <a rel="noopener noreferrer" href="#">
            <div className="self-center text-2xl ">No name</div>
          </a>
        </div>

        <div className="col-start-5 col-span-2">
          <div className="tracking-wide font-semibold text-lg ">Đối tác</div>
          <div className="grid justify-items-start grid-cols-3 mb-2 gap-y-4 ">
            {arrHeThongRap.map((htr, index) => {
              return (
                <div key={index}>
                  <img src={htr.logo} alt="" style={{ width: "50px" }} />
                </div>
              );
            })}
          </div>
        </div>

        <div className="col-start-7 col-span-2">
          <div className="dark:text-coolGray-50 font-semibold text-lg">Kết nối với No Name</div>
        </div>
      </div>
      <div className="pt-2 text-sm text-center text-gray-400">© 2022 Company Co. All rights reserved.</div>
    </footer>
  );
}
