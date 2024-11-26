import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    if (localStorage.getItem("auth") === "true") {
      navigate("/home"); // Use navigate to redirect
    }
  }, [navigate]);

  const [ism, setIsm] = useState('');
  const [parol, setParol] = useState('');
  const [name, setName] = useState('user');
  const [errorMessage, setErrorMessage] = useState('');

  const password = "1211";
  const username = "Hello";

  function Handleclick(event) {
    event.preventDefault();
    if (ism === username && parol === password) {
      localStorage.setItem("auth", "true");
      localStorage.setItem("name", name)
      navigate("/home"); // Use navigate to redirect
    } else {
      setErrorMessage('Invalid username or password');
    }
  }

  return (
    <div className='parent1'>
      <div>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>Admin Panel Log in</title>
        <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css" />
        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-2" />
          <div className="col-lg-6 col-md-8 login-box">
            <div className="col-lg-12 login-key">
              <i className="fa fa-key" aria-hidden="true" />
            </div>
            <div className="col-lg-12 login-title">
              ADMIN PANEL
            </div>
            <div className="col-lg-12 login-form">
              <form onSubmit={Handleclick}>
                <div className="form-group">
                  <label className="form-control-label">Full name</label>
                  <input type="text" className="form-control" onChange={e=> setName(e.target.value)} />
                </div>
                <div className="form-group">
                  <label className="form-control-label">USERNAME</label>
                  <input type="text" className="form-control" onChange={e => setIsm(e.target.value)} value={ism} />
                </div>
                <div className="form-group">
                  <label className="form-control-label">PASSWORD</label>
                  <input type="password" className="form-control" onChange={e => setParol(e.target.value)} value={parol} />
                </div>
                {errorMessage && <div className="text-danger">{errorMessage}</div>}
                <div className="col-lg-12 loginbttm">
                  <div className="col-lg-6 login-btm login-text">
                    {/* Error Message */}
                  </div>
                  <div className="col-lg-6 login-btm login-button">
                    <button type="submit" className="btn btn-outline-primary">LOGIN</button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-3 col-md-2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
