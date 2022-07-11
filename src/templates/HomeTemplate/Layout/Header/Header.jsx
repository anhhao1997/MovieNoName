// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { Link } from "react-scroll";

// import { useSelector, useDispatch } from "react-redux";
// import { USER_LOGIN } from "../../../../util/settings/config";
// import { DANG_XUAT_ACTION } from "../../../../redux/actions/types/QuanLyNguoiDungType";
// import { history } from "../../../../App";

// export default function Header(props) {
//   const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);
//   const [nav, setNav] = useState(false);
//   const dispatch = useDispatch();

//   return (
//     //Có chỉnh sửa phần header

//     <div className="header-home fixed w-full text-white glassmorphism-black drop-shadow-2xl z-10">
//       <header className="container">
//         <nav className="navbar navbar-expand-lg navbar-dark ">
//           <NavLink className="pl-2" to="/">
//             Logo
//           </NavLink>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-toggle="collapse"
//             data-target="#navbarNavAltMarkup"
//             aria-controls="navbarNavAltMarkup"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//             id="navbarMobile"
//           >
//             <span className="navbar-toggler-icon" />
//           </button>
//           <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//             <div className="navbar-nav">
//               <div className="nav-content">
//                 <Link className="content-item" to="lichChieu">
//                   Lịch chiếu phim
//                 </Link>
//                 <Link className="content-item" to="contact">
//                   Liên hệ
//                 </Link>
//                 <Link className="content-item" to="phim">
//                   Phim hot
//                 </Link>
//               </div>
//               <div className="nav-mode">
//                 {/* <span className="mode light-mode">
//                   <i className="fa fa-sun" />
//                 </span>
//                 <span className="mode dark-mode">
//                   <i className="fa fa-moon" />
//                 </span> */}
//                 <input
//                   type="checkbox"
//                   className="checkbox"
//                   id="chk"
//                   onChange={() => {
//                     document.getElementById("home").classList.toggle("dark");
//                   }}
//                 />
//                 <label className="label" htmlFor="chk">
//                   <i className="fas fa-moon"></i>
//                   <i className="fas fa-sun"></i>
//                   <div className="ball"></div>
//                 </label>
//               </div>
//               <div className="nav-login">
//                 <div className="header-checkout">
//                   <div className="info-user text-center">
//                     <div className="dropdown show">
//                       <a
//                         className="btn btn-secondary dropdown-toggle"
//                         href="#"
//                         role="button"
//                         id="dropdownMenuLink"
//                         data-toggle="dropdown"
//                         aria-haspopup="true"
//                         aria-expanded="false"
//                       >
//                         <span className="user-span">
//                           <i className="fa fa-user" />
//                         </span>
//                       </a>
//                       <div className="dropdown-menu dropdown-menu-center" aria-labelledby="dropdownMenuLink">
//                         {localStorage.getItem(USER_LOGIN) ? (
//                           <span className="item-drop">{"Xin chào " + userLogin.hoTen}</span>
//                         ) : (
//                           <NavLink to="/register" className="">
//                             <span className="item-drop"> Đăng kí / Đăng nhập</span>
//                           </NavLink>
//                         )}

//                         <NavLink className="item-drop" to="#">
//                           <button>Lịch sử </button>
//                         </NavLink>
//                         <a className="item-drop">
//                           <button
//                             onClick={() => {
//                               const action = {
//                                 type: DANG_XUAT_ACTION,
//                               };
//                               dispatch(action);
//                               history.push("/home");
//                             }}
//                           >
//                             Đăng xuất
//                           </button>
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </nav>
//       </header>
//     </div>
//   );
// }
import React from "react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

import { useSelector, useDispatch } from "react-redux";
import { USER_LOGIN } from "../../../../util/settings/config";
import { DANG_XUAT_ACTION } from "../../../../redux/actions/types/QuanLyNguoiDungType";
import { history } from "../../../../App";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [nav, setNav] = useState(false);
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);
  const dispatch = useDispatch();

  const links = [
    {
      id: 1,
      link: "phimHot",
      title: "phim hot"
    },
    {
      id: 2,
      link: "heThongRap",
      title: "Hệ thống rạp",
    },

    {
      id: 3,
      link: "lienHe",
      title: "liên hệ",

    },
  ];
  return (
    <div className="flex justify-between items-center w-full h-[80px] text-white z-10 drop-shadow-md glassmorphism-black fixed">
      <div className="container flex flex-row justify-between items-center">
        <div>
          <h1 className="text-xl ml-2 font-signature cursor-pointer text-white">
            <Link to="/">No name</Link>
          </h1>
        </div>

        <ul className="hidden md:flex flex-row items-center">
          {links.map(({ id, link,title }) => {
            return (
              <li key={id} className="px-4 pb-1 relative text-sm cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200 group">
                <Link to={link} smooth duration={300}>
                  {title}
                  <span class="absolute right-full group-hover:inset-x-2 bottom-0 bg-red-600 duration-500" style={{ height: "3px" }}></span>
                </Link>
              </li>
            );
          })}
          <div className="nav-mode flex items-center">
            <input
              type="checkbox"
              className="checkbox"
              id="chk"
              onChange={() => {
                document.getElementById("home").classList.toggle("dark");
              }}
            />
            <label className="label" htmlFor="chk">
              <i className="fas fa-moon"></i>
              <i className="fas fa-sun"></i>
              <div className="ball"></div>
            </label>
          </div>
          <div className="nav-login px-4">
              <div className="header-checkout">
                <div className="info-user text-center">
                  <div className="dropdown show">
                    <a className="dropdown-toggle flex" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <span className="user-span">
                        <i className="fa fa-user" />
                      </span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-center" aria-labelledby="dropdownMenuLink">
                      {localStorage.getItem(USER_LOGIN) ? (
                        <span className="item-drop">{"Xin chào " + userLogin.hoTen}</span>
                      ) : (
                        <NavLink to="/register" className="">
                          <span className="item-drop"> Đăng kí / Đăng nhập</span>
                        </NavLink>
                      )}

                      <NavLink className="item-drop" to="#">
                        <button>Lịch sử </button>
                      </NavLink>
                      <a className="item-drop">
                        <button
                          onClick={() => {
                            const action = {
                              type: DANG_XUAT_ACTION,
                            };
                            dispatch(action);
                            history.push("/home");
                          }}
                        >
                          Đăng xuất
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </ul>

        <div className="md:hidden cursor-pointer pr-4 z-10 text-white" onClick={() => setNav(!nav)}>
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (
          <ul className="md:hidden flex flex-col py-10 justify-start items-start absolute top-0 left-0 w-full h-screen bg-black bg-clip-padding backdrop-blur-md bg-opacity-60 drop-shadow-md text-white ease-in-out transition">
            {links.map(({ id, link,title }) => (
              <li key={id} className="px-4 py-2 cursor-pointer capitalize  text-sm" onClick={() => setNav(!nav)}>
                <Link to={link} smooth duration={500} onClick={() => setNav(!nav)}>
                  {title}
                </Link>
              </li>
            ))}
            <div className="nav-mode px-4">
              <input
                type="checkbox"
                className="checkbox"
                id="chk"
                onChange={() => {
                  document.getElementById("home").classList.toggle("dark");
                }}
              />
              <label className="label" htmlFor="chk">
                <i className="fas fa-moon"></i>
                <i className="fas fa-sun"></i>
                <div className="ball"></div>
              </label>
            </div>
            <div className="nav-login px-4">
              <div className="header-checkout">
                <div className="info-user text-center">
                  <div className="dropdown show">
                    <a className="dropdown-toggle flex" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <span className="user-span">
                        <i className="fa fa-user" />
                      </span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-center" aria-labelledby="dropdownMenuLink">
                      {localStorage.getItem(USER_LOGIN) ? (
                        <span className="item-drop">{"Xin chào " + userLogin.hoTen}</span>
                      ) : (
                        <NavLink to="/register" className="">
                          <span className="item-drop"> Đăng kí / Đăng nhập</span>
                        </NavLink>
                      )}

                      <NavLink className="item-drop" to="#">
                        <button>Lịch sử </button>
                      </NavLink>
                      <a className="item-drop">
                        <button
                          onClick={() => {
                            const action = {
                              type: DANG_XUAT_ACTION,
                            };
                            dispatch(action);
                            history.push("/home");
                          }}
                        >
                          Đăng xuất
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ul>
        )}
      </div>
    </div>
  );
}

export default NavBar;
