import React from "react";
import { NavLink } from "react-router-dom";
import image from "../../../assets/img/marvel_login.jpg";

export default function UserLogin() {
  return (
    <div style={{ backgroundImage: `url(${image})`, minHeight: "100vh" }} className="w-[100vw] h-[100vh] bg-cover bg-center bg-no-repeat">
      <div className="bg-black bg-opacity-60 w-[100vw] h-[100vh] bg-clip-padding backdrop-blur-sm">
        <div className="flex justify-center items-center w-[100vw] h-[100vh]">
          <div className="container bg-white/20 w-[75vw] h-[65vh] sm:w-[500px] md:w-[450px] rounded">
            <h1 className="text-center text-white tracking-wider p-8 uppercase">Đăng nhập</h1>
            <div className="px-3 sm:px-2 text-white">
              <div className="content">
                <form action="#">
                  <div className="field">
                    {/* <span className="fa fa-user" /> user icon */}
                    <input className="" type="text" placeholder="Email" required />
                    <span className="fa fa-user" /> {/* email id input place */}
                  </div>
                  <div className="field">
                    {/* lock icon*/}
                    <input type="password" placeholder="Password" />
                    <span className="fa fa-lock" /> {/*password input place */}
                  </div>
                  <NavLink className="forget" to="#">
                    Quên mật khẩu?
                  </NavLink>
                  {/* /*Nút Đăng nhập */}
                  <button className="login">Đăng nhập</button>

                  {/* {Đăng nhập bằng social} */}
                  <div className="text-center">
                    <div className="or">Or</div>
                    <div className="icon-button">
                      <span className="facebook mr-2">
                        <i className="fab fa-facebook-f mr-1"></i>Facebook
                      </span>
                      <span>
                        <i className="fab fa-google" /> Google
                      </span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
