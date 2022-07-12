import React, {useState} from 'react'
import LeftLogin from '../imports/LeftLogin';
import LoginForm from '../imports/LoginForm';
import {useDispatch} from 'react-redux';
import { useStore } from 'react-redux';
import { loginAction } from '../../container/actions';
import { useHistory } from 'react-router-dom';


export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const store = useStore();
  const history = useHistory();

  //handle submit handler function
  const handleSubmit = (event)=>{
    event.preventDefault();

    const userCredential = {
      email,
      password,
    }

    const userdata = {
      email:"admin@gmail.com",
      password:"admin123"
    }

    const login = (dispatch(loginAction(userCredential)));
    login
     .then(data=> history.push('/'))
     .catch(error=> console.log(error))

    console.log(store.getState())
    // console.log(userCredential);
  }

  let loginData={
    handleSubmit,
    setEmail,
    setPassword,
  }
    //Yoo barbannes Bakka loginState={loginData} kana loginState={{handleSubmit, setEmail, setPassword}}  Akkatti Dabarsuu Fi ni dandeenya
  
    return (
        <div id="login">
        <div className="container">
          <div className="row login-box"> 
              <LeftLogin/>
              <LoginForm loginState={loginData}/>  
          </div>
        </div>
      </div>
       
    )
}
