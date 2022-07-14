import React from "react";
import UserRegister from "../../templates/UserTemplate/Layout/UserRegister";
import { Tabtitle } from "../../util/FunctionTitle";

export default function Register() {
  Tabtitle("Đăng ký")
  return <div>
    <UserRegister/>
  </div>;
}
