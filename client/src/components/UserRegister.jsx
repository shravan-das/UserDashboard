import React, { Fragment, useRef } from 'react';
import { Link } from 'react-router-dom';
import MailOutlineIcon from '@mui/icons-material/MailOutlineOutlined';
import LockOpenIcon from '@mui/icons-material/LockOpenOutlined';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './UserRegister.css';

const UserRegister = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform your registration logic here

    // For demonstration purposes, show a toast
    toast.success('Registration successful!');
  };

  return (
    <Fragment>
      <ToastContainer />
      <div className="loginsignupcontainer">
        <div className="loginsignupbox">
          <div>
            <div className='loginsignuptoggle'>
              <p onClick={(e) => switchTabs(e, 'login')}>Register</p>
            </div>
          </div>
          <form className='loginForm' onSubmit={handleSubmit}>
            <div className="loginemail">
              <MailOutlineIcon />
              <input
                type="email"
                placeholder='Email'
                required
                ref={emailRef}
              />
            </div>
            <div className="loginpassword">
              <LockOpenIcon />
              <input
                type='password'
                placeholder='Password'
                required
                ref={passwordRef}
              />
            </div>
            <Link to="/password/forgot">Forget Password ?</Link>
            <button type="submit" className="loginBtn">
              Register
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default UserRegister;
