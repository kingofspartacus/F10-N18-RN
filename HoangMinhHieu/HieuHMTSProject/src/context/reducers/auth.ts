import {
    LOGIN_SUCCESS, LOGIN_LOADING, LOGIN_FAIL,
} from "../../constants/actionTypes";
import { AuthState } from "../initialStates/authInitialState";

const auth = (state: AuthState, {type, payload}:{type: any, payload: any}) => {
    switch (type){
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
            };
        case LOGIN_LOADING:
        case LOGIN_FAIL:
            return {
                ...state,
                isLoggedIn: false,
            }
        default:
            return state;
    }
}

export default auth