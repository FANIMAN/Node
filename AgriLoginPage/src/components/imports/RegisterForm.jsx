import React from "react";

export default function RegisterForm(props) {  //Because Register Irra Properitiin Ija Darbeefif Asittis Isa Fayyadamuuf props Dabarsinaafii Functional Componentichaaf.
  
  let{
    handleSubmit,
    setUsername,
    setEmail,
    setPassword,
    setPasswordCheck
  } = props.registerState;
  
  return (
    <div className="col-sm-7 bg-color align-self-center">
      <div className="form-section">
        <div className="title">
          <h3>Create a New Account</h3>
        </div>
        <div className="login-inner-form">
          <form method="POST" onSubmit={handleSubmit}>
            <div className="form-group form-box">
              <input
                type="text"
                id="username"
                onChange={e=>setUsername(e.target.value)}
                className="input-text"
                placeholder="Username"
              ></input>
              <i className="icon user"></i>
            </div>

            <div className="form-group form-box">
              <input
                type="text"
                id="email"
                onChange={e=>setEmail(e.target.value)}
                className="input-text"
                placeholder="Email Address"
              ></input>
              <i className="icon email"></i>
            </div>

            <div className="form-group form-box">
              <input
                type="password"
                id="password"
                onChange={e=>setPassword(e.target.value)}
                className="input-text"
                placeholder="Password"
              ></input>
              <i className="icon lock"></i>
            </div>

            <div className="form-group form-box">
              <input
                type="password"
                id="passwordcheck"
                onChange={e=>setPasswordCheck(e.target.value)}
                className="input-text"
                placeholder="Verify Password"
              ></input>
              <i className="icon lock"></i>
            </div>

            <div className="form-group">
              <button className="btn primary-btn">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

