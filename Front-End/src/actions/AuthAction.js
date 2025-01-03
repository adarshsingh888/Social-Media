import * as AuthApi from '../api/AuthRequest'

export const logIn=(formData)=> async(dispatch)=>{
  dispatch({type:"AUTH_START"});
  try {
    const {data}=await AuthApi.logIN(formData);
    dispatch({type:"AUTH_SUCCESS",data:data});
  } catch (error) {
    console.log(error)
    dispatch({type:"AUTH_FAIL"})
  }
}

export const singUp=(fromData)=> async (dispatch)=>{
  dispatch({type:"AUTH_START"})
  try {
    const {data}=await AuthApi.signUP(fromData);
    dispatch({type:"AUTH_SUCCESS"})
  } catch (error) {
    console.log(error)
    dispatch({type:"AUTH_FAIL"});
  }
}