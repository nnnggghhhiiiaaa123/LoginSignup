import React, { useState } from 'react'
import './LoginSignup.css'

import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

const LoginSignup = () => {

    const [action, setAction] = useState("Login");

    // Xử lý đăng nhập
    const xuLyDangNhap = (event) => {
        console.log(event);
        setAction("Login");
        console.log("Đăng nhập")
    }

    // Xử lý đăng ký
    const xuLyDangKy = (event) => {
        console.log(event);
        setAction("Sign Up");
        console.log("Đăng ký")
    }

    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>{action}</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                {action === "Login" ? null : (
                    <div className='input'>
                        <img src={user_icon} alt='' />
                        <input placeholder='Display Name' type="text" />
                    </div>
                )}
                <div className='input'>
                    <img src={user_icon} alt='' />
                    <input type="text" placeholder='Username' />
                </div>
                <div className='input'>
                    <img src={email_icon} alt='' />
                    <input type='email' placeholder='Email Id' />
                </div>
                <div className='input'>
                    <img src={password_icon} alt='' />
                    <input type='password' placeholder='Password' />
                </div>
                {action === "Sign Up" ? null : (
                    <div className='forgot-password'>Lost Password? <span>Click Here!</span></div>
                )}
                <div className='submit-container'>
                    <div className={action === 'Login' ? 'submit gray' : 'submit'} onClick={xuLyDangKy}> Đăng ký</div>
                    <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={xuLyDangNhap}>Đăng nhập</div>
                </div>
            </div>
        </div>
    )
}

export default LoginSignup;
