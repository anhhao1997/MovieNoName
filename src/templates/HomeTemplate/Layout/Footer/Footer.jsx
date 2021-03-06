import React from "react";
import { useSelector } from "react-redux";
import _ from "lodash";
import { NavLink } from "react-router-dom";
import image from "../../../../assets/img/footer_spiderman.jpeg";

export default function Footer(props) {
  const { heThongRapChieu } = useSelector((state) => state.QuanLyRapReducer);

  const arrHeThongRap = _.map(heThongRapChieu, (heThongRap) => _.pick(heThongRap, ["tenHeThongRap", "logo"]));

  return (
    <footer style={{ backgroundImage: `url(${image})` }} className="w-full text-white font-semibold bg-cover bg-no-repeat bg-center">
      <div className="glassmorphism glassmorphism-black ">
        <div className="container pt-4 divide-y-2">
          <div>
            <NavLink className="flex justify-center uppercase text-xl mb-4 mt-2" rel="noopener noreferrer" to="/">
              Logo
            </NavLink>

            <div className="container grid grid-cols-2 lg:grid-cols-4 py-10 uppercase gap-2 ">
              <div>
                <h3 className="tracking-wide font-semibold glassmorphism-white w-fit p-2 mb-3 text-white ">No name</h3>
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
                <h3 className="tracking-wide font-semibold  glassmorphism-white w-fit p-2 mb-3 text-white ">Thông tin</h3>
                <ul>
                  <li>
                    <NavLink to='/' >Giới thiệu</NavLink>
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
                <h3 className="tracking-wide font-semibold glassmorphism-white w-fit p-2 mb-3 text-white">Hệ Thống Rạp</h3>
                <div className="mb-2 ">
                  {arrHeThongRap.map((htr, index) => {
                    return (
                      <ul key={index}>
                        <li>
                          <NavLink to='/' className="uppercase" >
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
                <h3 className="font-semibold glassmorphism-white w-fit p-2 mb-3 text-white">Liên Kết</h3>

                <section className="contact">
                  <ul className="icon-list">
                    <li className="icon-item">
                      <a href="/" className="icon-link">
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                    <li className="icon-item">
                      <a href="/" className="icon-link">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li className="icon-item">
                      <a href="/" className="icon-link">
                        <i className="fab fa-youtube" />
                      </a>
                    </li>
                    <li className="icon-item">
                      <a href="/" className="icon-link">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
          <div className="mt-3 text-sm text-center text-gray-400">
            <div className="mt-3 mb-3">© 2022 Company Co. All rights reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
