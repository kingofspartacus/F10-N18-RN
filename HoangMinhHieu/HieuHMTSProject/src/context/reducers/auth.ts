import {
    LOGIN_SUCCESS, LOGIN_LOADING, LOGIN_FAIL,
} from "../../constants/actionTypes";
import { AuthState } from "../initialStates/authInitialState";

const auth = (state: AuthState, {type, payload}:{type: any, payload: any}) => {
    console.log('checked')
    switch (type){
        case LOGIN_SUCCESS:
            console.log('checked')
            return {
                ...state,
                isLoggedIn: true,
            };
        case LOGIN_LOADING:
        case LOGIN_FAIL:
            console.log('checked2')
            return {
                ...state,
                isLoggedIn: false,
            }
        default:
            return state;
    }
}

export default auth