import {
    LOGIN_SUCCESS,
} from "../../constants/actionTypes";
import { AuthState } from "../initialStates/authInitialState";

const auth = (state: AuthState, {type, payload}:{type: any, payload: any}) => {
    switch (type){
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
            };
        default:
            return state;
    }
}

export default auth