import React, {createContext, useReducer, useContext} from 'react'
import auth from './reducers/auth'
import authInitialState, { AuthState } from "./initialStates/authInitialState";

export const GlobalContext = createContext<{
    authState: AuthState;
    authDispatch: React.Dispatch<{type: any; payload: any}>;
}>({
    authState: authInitialState,
    authDispatch: () => null
}) 
const GlobalProvider = ({children} : { children: React.ReactNode }) => {
    const [authState, authDispatch] = useReducer(auth, authInitialState)
    const value = { authState, authDispatch }

    return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
}
export const useGlobalContext = () => useContext(GlobalContext)
export default GlobalProvider