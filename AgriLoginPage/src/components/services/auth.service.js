import axios from 'axios';


const baseURL = "http://localhost:4000/api";

//register request
const register = (newUser)=>{
    //post request on http://localhost:4000/api/register
    return axios.post(`${baseURL}/register`, newUser)   //this is a promise
      .then(response =>{
          if(response){
              return Promise.resolve(response)
          }
      })
      .catch(error =>{
          return Promise.reject(error.response)
      })
}


//login request
const login = (usercredential)=>{
    return axios.post(`${baseURL}/login`, usercredential)
      .then(response=>{
          if(response.data.token){
              localStorage.setItem("x-access-token", response.data.token)
          }

          return Promise.resolve(response.data)
      })
      .catch(error=>{
          return Promise.reject(error.response.data)
      })
    
}

//logout Services
const logout  = ()=>{
    localStorage.removeItem("x-access-token")
    return{msg:"Logout Successfully...!"}
}

export{
    register,
    login,
    logout
}