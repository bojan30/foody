export const loginReducer = (isLoggedIn = false, action) => {
    if(action.type === "LOGIN"){
        return true;
    }
    if(action.type === "LOGOUT"){
        console.log(action.type);
        return false;
    }
    return isLoggedIn;
}