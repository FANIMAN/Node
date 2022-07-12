import React from 'react'
import {useLocation, useHistory, Link} from 'react-router-dom';
//Link is a component Just Akkuma Link taetu garuu pagima sana irrattidha Load Kan Godhu Malee Gara Page Biratti Hin fudhatu
//useLocation and useHistory are Hooks


export default function LeftLogin() {

    const location = useLocation();
    const history = useHistory();

    let defaultClass = "nav-link link-btn btn-primary default-bg";
    let active= " active"

    const register = () => history.push('/register')
    const login = () => history.push('/login')


    return (
        <div className="col-sm-5 bg-img align-self-center">
         <div className="info">
             <div className="logo clearfix">
                 <Link className="nav-brand" to="/">MINT</Link>
                 {/* <a href="#" className="nav-brand">MINT</a> */}
             </div>
             <div className="btn-section clearflix">
                <button onClick={login} className={location.pathname === "/login" ? defaultClass + active :defaultClass}>
                    Login
                </button>
                <button onClick={register} className= {location.pathname === "/register" ? defaultClass + active : defaultClass}>
                    Register
                </button>
             </div>
         </div>            
        </div>
    )
}
