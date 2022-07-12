import React, {useState} from 'react'
import LeftLogin from '../imports/LeftLogin';
import RegisterForm from '../imports/RegisterForm';
import { registerAction } from '../../container/actions';
import { useDispatch } from 'react-redux';

import {useHistory} from 'react-router-dom';



export default function Login() {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();



  //on form submit click handler
  const handleSubmit = (event)=>{
    event.preventDefault();

    const newUser = {
      username,
      email,
      password,
      passwordCheck
    }
     
    //This Is Just ofiima Isa Akka Dubbisee akka itti fufu yoo barbannudha
    const user = {
      username:"Fanimannn",
      email:"faniman@gmal.comnn",
      password:"faniman123nn",
      passwordCheck:"faniman123nn"
    }



    const validate = dispatch(registerAction(newUser));

    validate    //it is a promise
      .then(data=>{
        history.push('/login');
        // console.log(data);
      })
      .catch(error=>console.log(error))

    // console.log(newUser);
  }

  let registerData={
    handleSubmit,
    setUsername,
    setEmail,
    setPassword,
    setPasswordCheck
  }
    return (
        <div id="login">
        <div className="container">
          <div className="row login-box">
              <LeftLogin/>
              <RegisterForm registerState={registerData}/>
          </div>
        </div>
      </div>
       
    )
}
