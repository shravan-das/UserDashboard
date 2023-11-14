import React, { Fragment,useRef } from 'react'
import "./UserRegister.css"
import {Link} from "react-router-dom";
import MailOutlineIcon from "@mui/icons-material/MailOutlineOutlined";
import LockOpenIcon from "@mui/icons-material/LockOpenOutlined";



const UserRegister = () => {
  
  

return (
  <Fragment>
      <Fragment>
      <div className="loginsignupcontainer">
          <div className="loginsignupbox">
              <div>
              <div className='loginsignuptoggle'>
                  <p onClick={(e)=>switchTabs(e,"login")}>Register</p>
              </div>
              

              </div>
              <form className='loginForm' >
                  <div className="loginemail">
                      <MailOutlineIcon/>
                      <input type="email" 
                      placeholder='Email'
                      required
    
                      />
                  </div>
                  <div className="loginpassword">
                      <LockOpenIcon/>
                      <input type ='password'
                      placeholder='password'
                      required

                      />
                  </div>
                  <Link to  = "/password/forgot">Forget Password ?</Link>
                  <button type="submit" className="loginBtn">
                     Register
                  </button>

              </form>
              
          </div>
      </div>
  </Fragment>
  </Fragment>
)
}

export default UserRegister