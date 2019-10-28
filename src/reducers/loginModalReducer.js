export const loginModalReducer = (isLoginModalActive = false, action) => {
    if(action.type === 'LOGIN_MODAL_ACTIVE'){
        return action.payload;
    }
    return isLoginModalActive;
};