import React from 'react'
import UserLogin from '../../templates/UserTemplate/Layout/UserLogin'
import { Tabtitle } from '../../util/FunctionTitle'

export default function Login() {
  Tabtitle("Đăng nhập")

  return (
    <div>
        <UserLogin/>
    </div>
  )
}
