import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { FaBars } from "react-icons/fa";
import { BsFillPersonFill, BsSearch, BsFillHeartFill } from "react-icons/bs";
import { MdLocalMovies } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { IoSettingsSharp } from "react-icons/io5";
import { DANG_XUAT_ACTION } from "../../../redux/actions/types/QuanLyNguoiDungType";
import { history } from "../../../App";
import { useDispatch } from "react-redux";

function UserSidebar({ userLogin, userCallback }) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(true);

  const showSidebar = () => setOpen(!open);

  useEffect(() => {
    userCallback(open);
  }, [open]);

  const navListLinks = [
    { index: 1, name: "Thông tin tài khoản", icon: <BsFillPersonFill size={20} />, path: "/user/profile" },
    { index: 2, name: "Lịch sử đặt vé", icon: <MdLocalMovies size={20} />, path: "/user/history" },
    { index: 3, name: "Phim yêu thích", icon: <BsFillHeartFill size={20} /> },
    { index: 4, name: "Cài đặt", icon: <IoSettingsSharp size={20} /> },
  ];
  return (
    <div className={`${open ? "w-[280px]" : "w-[60px]"} duration-300 sidebar fixed top-0 left-0 h-full bg-gray-800 px-2 py-1 text-white`}>
      <div className="logo_content py-2">
        <div className={`${open ? "justify-between" : "justify-center"} logo flex flex-row h-[50px] w-full items-center`}>
          <div className={`${!open && "hidden"} logo_name`}>
            <Link to="/" className={`text-xl font-bold`}>
              No name
            </Link>
          </div>

          <FaBars className="h-[25px] w-[25px] leading-[25px] cursor-pointer hover:scale-125 duration-200" onClick={showSidebar} />
        </div>
      </div>
      <ul className="nav_list mt-[20px]">
        <li className="flex flex-row mb-[20px] h-[50px] relative duration-500">
          <div className="absolute z-50 flex items-center justify-center h-[50px] min-w-[40px] leading-[50px] cursor-pointer">
            <BsSearch size={20} onClick={showSidebar} />
          </div>
          <input className="absolute h-full w-full left-0 top-0 rounded-md focus:outline-none border-0 bg-gray-600 pl-[40px] text-xs" type="text" placeholder="Tìm kiếm..." />
        </li>
        {navListLinks.map((link, index) => {
          return (
            <li key={index} className="relative my-[5px] h-[60px] leading-[60px] w-full">
              <a href={link.path} className="flex flex-row items-center transition-all ease-in duration-500 rounded-md h-[50px]">
                <div className="rounded-md w-[40px] h-[60px] leading-[60px] flex items-center justify-center">{link.icon}</div>

                <span className={`${!open && "hidden"} link_name text-xs`}>{link.name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <div className="profile_content absolute bottom-0 left-0 w-full">
        <div className="profile relative p-2 h-[70px] bg-gray-600 ">
          <div className={`${!open && "hidden"} profile_details flex flex-row items-center`}>
            <img className="w-[40px] h-[40px] rounded-full object-cover" src="https://picsum.photos/50/50" alt="" />

            <div className={`name pl-2`}>
              <p className="text-xs font-semibold">Xin chào</p>
              <p className={`text-sm font-bold`}>{userLogin.taiKhoan}</p>
            </div>
          </div>
          <div
            className={`${
              !open && "left-[40%]"
            } absolute left-[90%] bottom-0 -translate-y-1/2 -translate-x-1/2 min-w-[30px] leading-[60px] rounded-md hover:scale-125 duration-200`}
          >
            <BiLogOut
              size={30}
              onClick={() => {
                const action = {
                  type: DANG_XUAT_ACTION,
                };
                dispatch(action);
                history.push("/home");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserSidebar;
