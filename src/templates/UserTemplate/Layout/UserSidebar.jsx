import React, { useEffect, useRef, useState } from "react";

import { FaBars } from "react-icons/fa";
import { BsFillPersonFill, BsSearch, BsFillHeartFill } from "react-icons/bs";
import { MdLocalMovies } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { IoSettingsSharp } from "react-icons/io5";
import { DANG_XUAT_ACTION } from "../../../redux/actions/types/QuanLyNguoiDungType";
import { history } from "../../../App";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import logo from '../../../assets/img/logo_Noname.png'
function UserSidebar({ userLogin, userCallback }) {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(true);
    const btnRef = useRef();
    const showSidebar = () => setOpen(!open);
    userCallback(open);

    const width = window.innerWidth;

    useEffect(() => {
        const closeSidebarMobile = (e) => {
            //khi click vào body không tồn tại btnRef thì sẽ close
            if (!btnRef.current.contains(e.target)) {
                setOpen(false);
            }
        };

        if (width < 768) {
            setOpen(false);
            window.addEventListener("click", closeSidebarMobile);
        }

        return () => window.removeEventListener("click", closeSidebarMobile);
    }, [width]);

    const navListLinks = [
        { index: 1, name: "Thông tin tài khoản", icon: <BsFillPersonFill size={20} />, path: "/user/profile" },
        { index: 2, name: "Lịch sử đặt vé", icon: <MdLocalMovies size={20} />, path: "/user/history" },
        { index: 3, name: "Phim yêu thích", icon: <BsFillHeartFill size={20} /> },
        { index: 4, name: "Cài đặt", icon: <IoSettingsSharp size={20} /> },
    ];
    return (
        <div className={`${open ? "bg-opacity-60 bg-clip-padding backdrop-blur-[4px] w-[280px] md:w-[280px] md:bg-gray-800" : "md:bg-gray-800 w-[60px] md:w-[60px]"} duration-300 sidebar fixed top-0 left-0 h-screen bg-gray-800 px-2 py-1 text-white z-50`} ref={btnRef}>
            <div className="logo_content py-2">
                <div className={`${open ? "justify-between" : "justify-center"} logo flex flex-row h-[50px] w-full items-center`}>
                    <div className={`${!open && "hidden"} logo_name`}>
                        <NavLink to="/home">
                            <div style={{ backgroundImage: `url(${logo})`, width: "100%", height: "70px", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}></div>
                        </NavLink>
                    </div>

                    <FaBars
                        className="h-[25px] w-[25px] leading-[25px] cursor-pointer hover:scale-125 duration-200"
                        onClick={() => {
                            setOpen(!open);
                        }}
                    />
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
                    <div className={`${!open && "absolute flex items-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "} absolute text-center bottom-[25%] left-[85%] mx-auto min-w-[30px] leading-[60px] rounded-md hover:scale-125 duration-200 cursor-pointer `}>
                        {/* absolute text-center bottom-[25%] left-[85%] mx-auto min-w-[30px] leading-[60px] rounded-md hover:scale-125 duration-200 cursor-pointer */}
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
