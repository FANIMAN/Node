import * as actionTYpes from './types';
import * as AuthService from '../components/services/auth.service';

//register actions
export const registerAction = (payload) => (dispatch)=>{
    // return{
    //     type:actionTYpes.REGISTER_SUCCESS,
    //     payload:payload  //Yoo Barbannee paylaod bicha jenne Yoo Dhisnees Ni dandeenya
    // }

    return AuthService.register(payload)
      .then(response=>{

        dispatch({
            type:actionTYpes.REGISTER_SUCCESS,
            payload:response.data
        })

        return Promise.resolve(response.data)
      })
      .catch(error=>{
          dispatch({
              type:actionTYpes.REGISTER_FAIL,
              payload:{err:error.message || "Registration Failed"}
          })

          return Promise.reject(error);
      })

}




//login actions
export const loginAction = (userCredential) => (dispatch)=>{      //Qinifi Isa Jalqabaf Waan Barbanne Dabarsuu Fi Ni 
    return AuthService.login(userCredential)
      .then(data=>{

        dispatch({
            type:actionTYpes.LOGIN_SUCCESS,
            payload:data
        })

        return Promise.resolve(data)
      })
      .catch(error=>{
          dispatch({
              type:actionTYpes.LOFIN_FAIL,
              payload:{err:error.message || "Login Failed"}
          })

          return Promise.reject(error);
      })

}

//logout action
export const logoutAction = () =>(dispatch) => {
    const msg = AuthService.logout()

    dispatch({
        type:actionTYpes.LOGOUT,
        payload:{msg}  
    })

    return Promise.resolve(msg)
  
  .catch(error=>{
      dispatch({
          type:actionTYpes.LOFIN_FAIL,
          payload:{err:error.message || "Logout Failed"}
      })

      return Promise.reject(error);
  })




// const msg = AuthService.logout()

// dispatch({
//     type:actionTYpes.LOGOUT,
//     payload:{msg}  
// })

// return Promise.resolve(msg)

}

