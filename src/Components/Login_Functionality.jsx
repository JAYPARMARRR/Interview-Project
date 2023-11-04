import React, { useState } from "react";
import "../Style/Login_Functionality.css";
import { FaUserAlt } from 'react-icons/Fa';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';



const Login_Functionality = () => {

const [action , setaction] = useState("Login")
const [lData ,setlData] = useState({
  email : "",
  password : "",
})


const [Error, setError] =useState({})


const heandlChange =(e)=>{
  const {name , value}  = e.target ; 
  setlData({
    ...lData , 
    [name]: value ,
  })

}

const SubmitLonin =(e)=>{
  
  setaction("Login")
  const alert = {};
console.log("lData >>>",lData);


const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

if(!lData.email.trim() || !validRegex.test(lData.email)){
  alert.email = "email is  Valid "
}

if(lData.password.length < 6 ){
  alert.password = "password min 6+ number"
}


if(Object.keys(alert).length > 0){
  setError(alert)
  return;
}



console.log("lData >>>", lData);
  }


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
              <input type="email" name="email" placeholder="Email" onChange={heandlChange} />
              {Error.email && <span className="error"> {Error.email} </span>}

            </div>
            <div className="input">
              <RiLockPasswordFill className="icons"/>
              <input type="password" name="password" placeholder="Password" onChange={heandlChange}/>
              {Error.password && <span className="error"> {Error.password} </span>}
            </div>
          </div>
          {action ===  "Sign up" ? <div></div> :   <div className="forgot-password">
            Lost Pasword <span>Click here!</span>
          </div> }
        
          <div className="submit-container">
            <div className={action === "Sign up"? "submit gray": "submit"} onClick={()=>{setaction("Sign up")}}>Sign up</div>
            <div className={action === "Login" ? "submit gray" : "submit"} onClick={SubmitLonin}>Login</div>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default Login_Functionality;
