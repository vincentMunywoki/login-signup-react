import React from 'react';
import '.Loginsignup.css'

const Loginsignup = () => {
    return (
        <div className='container'>
           <div className="header">
            <div className="text">Sign Up</div>
            <div className="underline"></div>
           </div>
           <div className="inputs">
            <div className="input">
                <img src="{user_icon}" alt="" />
                <input type="text" />
            </div>
            <div className="input">
                <img src="{email_icon}" alt="" />
                <input type="email" />
            </div>
            <div className="input">
                <img src="{password_icon}" alt="" />
                <input type="password" />
            </div>
           </div>
        </div>
    );
};

export default Loginsignup;