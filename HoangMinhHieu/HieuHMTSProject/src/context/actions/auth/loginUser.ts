import {LOGIN_SUCCESS, LOGIN_LOADING, LOGIN_FAIL} from "../../../constants/actionTypes";
import axiosInstance from "../../../helper/axiosInterceptor";


export default ({phone_number, password}:{phone_number?: string,password?: string}) => (dispatch: React.Dispatch<{type: any; payload: any}>) => {

    dispatch({
        type: LOGIN_LOADING,
        payload: null
    })
    axiosInstance.post('api/sessions', {
        phone_number,
        password
    }).then((res: { data: any; }) => {
        // AsyncStorage.setItem('token', res.data.token)
        // AsyncStorage.setItem('user', JSON.stringify(res.data.user))
        console.log("OK")
        dispatch({
            type: LOGIN_SUCCESS,
            payload: null
        })
    }).catch((err: { response: { data: any; }; }) => {
        console.log(err)
        dispatch({
            type: LOGIN_FAIL,
            payload: err.response ? err.response.data : {error: "Unknown Error!"}
        })
    })
}