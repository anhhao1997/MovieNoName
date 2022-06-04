import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer(props) {
  return (
    <footer className="p-4 divide-y-2 bg-neutral-800 text-white font-semibold">
      <div className=" container grid grid-cols-8 py-10 ">
        <div className="col-start-1 col-span-3">
          <a rel="noopener noreferrer" href="#">
            <div className="self-center text-2xl ">No name</div>
          </a>
        </div>

        <div className="col-start-5 col-span-2">
          <div className="tracking-wide font-semibold text-lg ">Partners</div>
        </div>

        <div className="col-start-7 col-span-2">
          <div className="dark:text-coolGray-50 font-semibold text-lg">Kết nối với No Name</div>
        </div>
      </div>
      <div className="pt-2 text-sm text-center text-gray-400">© 2022 Company Co. All rights reserved.</div>
    </footer>
  );
}
