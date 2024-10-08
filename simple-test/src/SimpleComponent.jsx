import React from 'react';

import './App.css'; // Ensure this file exists if you are using it

const SimpleComponent = () => {

    const [action,setAction] = useState("Sign Up");
    return (
        <div className='container'>
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <input type="text" placeholder="Username" />
                </div>
                <div className="input">
                    <input type="email" placeholder="Email" />
                </div>
                <div className="input">
                    <input type="password" placeholder="Password" />
                </div>
            </div>
            <div className="forgot-password">Lost Password? <span>Click here</span></div>
            <div className="submit-container">
                <div className={action==="Login"?"submit gray":"submit"}>Sign Up</div>
                <div className={action==="Sign Up"?"submit gray":"submit"}>Login</div>
            </div>
        </div>
    );
};

export default SimpleComponent;