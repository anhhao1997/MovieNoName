import React from "react";
import { useSelector } from "react-redux";
import _ from "lodash";
import { NavLink } from "react-router-dom";
import image from "../../../../assets/img/footer_spiderman.jpeg";

export default function Footer(props) {
  const { heThongRapChieu } = useSelector((state) => state.QuanLyRapReducer);

  const arrHeThongRap = _.map(heThongRapChieu, (heThongRap) => _.pick(heThongRap, ["tenHeThongRap", "logo"]));

  console.log("arrHeThongRap", arrHeThongRap);
  return (
    <footer style={{ backgroundImage: `url(${image})` }} className=" text-white font-semibold bg-cover bg-no-repeat bg-center">
      <div className="glassmorphism glassmorphism-black ">
        <div className="container pt-4 divide-y-2">
          <div>
            <NavLink className="flex justify-center uppercase text-xl mb-2" rel="noopener noreferrer" to="/">
              Logo
            </NavLink>

            <div className="container grid xl:grid-cols-4 py-10 uppercase sm:grid-cols-2 gap-2">
              <div>
                <div className="tracking-wide font-semibold text-lg glassmorphism-white w-fit px-2 mb-1 ">No name</div>
                <ul>
                  <li>
                    <NavLink to="/">Phim sắp chiếu</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Phim đang chiếu</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Phim hot</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Lịch chiếu</NavLink>
                  </li>
                </ul>
              </div>

              <div>
                <div className="tracking-wide font-semibold text-lg glassmorphism-white w-fit px-2 mb-1 ">Thông tin</div>
                <ul>
                  <li>
                    <NavLink to="/">Giới thiệu</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Khuyến Mãi</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Hỏi và đáp</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Tin tức</NavLink>
                  </li>
                </ul>
              </div>

              <div>
                <div className="tracking-wide font-semibold text-lg glassmorphism-white w-fit px-2 mb-1 ">Hệ Thống Rạp</div>
                <div className="mb-2 ">
                  {arrHeThongRap.map((htr, index) => {
                    return (
                      <ul key={index}>
                        <li>
                          <NavLink className="uppercase" to="/">
                            {htr.tenHeThongRap}
                          </NavLink>
                        </li>
                      </ul>
                    );
                  })}
                  <div className="grid grid-cols-3 gap-y-1 mt-1">
                    {arrHeThongRap.map((htr, index) => {
                      return (
                        <NavLink to="/" key={index}>
                          <img src={htr.logo} width="40" />
                        </NavLink>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="">
                <div className="dark:text-coolGray-50 font-semibold text-lg glassmorphism-white w-fit px-2 mb-1">Liên Kết</div>
                <div className="grid grid-cols-6 gap-2 mr-2">
                  <i class="fa fa-facebook"></i>
                  <i class="fa fa-instagram" aria-hidden="true"></i>
                  <i class="fa fa-linkedin" aria-hidden="true"></i>
                  <i class="fa fa-pinterest" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-2 text-sm text-center text-gray-400">© 2022 Company Co. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
