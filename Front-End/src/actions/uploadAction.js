import * as UploadApi from '../api/UploadRequest'

export const uploadImage = (data) => async (dispatch) => {
    // dispatch({type:""})
    try {
        console.log("this is uploadImage action", data.fileName)
        await UploadApi.uploadImage(data);
    } catch (error) {
        console.log(error)
    }
}

export const uploadPost = (formData) => async (dispatch) => {
    dispatch({ type: "POST_START" })
    try {
        const { data } = await UploadApi.Post(formData);
        console.log(data)
        dispatch({ type: "POST_SUCCESS", data: data })
    } catch (error) {
        console.log(error)
        dispatch({ type: "POST_FAIL" })
    }
}
