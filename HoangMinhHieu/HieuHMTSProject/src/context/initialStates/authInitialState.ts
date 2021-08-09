export interface AuthState {
    isLoggedIn: boolean;
}
const authInitialState: AuthState = {
    isLoggedIn: false,
}

export default authInitialState