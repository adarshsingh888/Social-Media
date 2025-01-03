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

export const signUp = (formData) => async (dispatch) => {  {/* Fix the typo here */}
  dispatch({ type: "AUTH_START" });
  try {
    const { data } = await AuthApi.signUP(formData);  {/* Fix the typo here */}
    dispatch({ type: "AUTH_SUCCESS" });
  } catch (error) {
    console.log(error);
    dispatch({ type: "AUTH_FAIL" });
  }
};
