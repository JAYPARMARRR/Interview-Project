import React, { useState } from "react";
import "../Style/Login_Functionality.css";
import { FaUserAlt } from 'react-icons/Fa';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';



const Login_Functionality = () => {

const [action , setaction] = useState("Login")

  return (
    <>
      <div className="main_div_login">
        <div className="container ">
          <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
          </div>
          <div className="inputs">
{action === "Login" ? <div></div>: <div className="input">
            <FaUserAlt className="icons"/>
              <input type="text"  placeholder="Name"/>
            </div>  }

           
            <div className="input">
              <MdEmail className="icons"/>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input">
              <RiLockPasswordFill className="icons"/>
              <input type="password" placeholder="Password" />
            </div>
          </div>
          {action ===  "Sign up" ? <div></div> :   <div className="forgot-password">
            Lost Pasword <span>Click here!</span>
          </div> }
        
          <div className="submit-container">
            <div className={action === "Sign up"? "submit gray": "submit"} onClick={()=>{setaction("Sign up")}}>Sign up</div>
            <div className={action === "Login" ? "submit gray" : "submit"} onClick={()=>{setaction("Login")}}>Login</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login_Functionality;
