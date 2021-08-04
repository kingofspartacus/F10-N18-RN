import {LOGIN_SUCCESS} from "../../../constants/actionTypes";

export default () => (dispatch: any) => {
    dispatch({
        type: LOGIN_SUCCESS,
    })
}
