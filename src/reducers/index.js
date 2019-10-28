import {combineReducers} from 'redux';
import {categoriesReducer} from './categoriesReducer';
import {loginModalReducer} from './loginModalReducer';
import {loginReducer} from './loginReducer';

const rootReducer = combineReducers({
    categories: categoriesReducer,
    isLoginModalActive: loginModalReducer,
    isLoggedIn: loginReducer,
})

export default rootReducer;