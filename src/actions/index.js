import axios from 'axios';

export const fetchCategories = () => {
    return async dispatch => {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`);
        dispatch({
            type: "FETCH_CATEGORIES",
            payload: response.data.categories
        });
    }
}
export const fetchSingleCategory = (categoryName) => {
    return async dispatch => {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`);
        dispatch({
            type: "FETCH_SINGLE_CATEGORY",
            payload: response.data.meals
        });
    }
}
export const fetchSingleMeal = (id) => {
    return async dispatch => {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        dispatch({
            type: "FETCH_SINGLE_MEAL",
            payload: response.data.meals[0]
        });
    }
}
export const fetchRandomMeals = (num) => {
    const randomMeals = [];
    return async dispatch => {
        for(let i = 0; i < num; i++){
            let response = await axios.get(`https://www.themealdb.com/api/json/v1/1/random.php`);
            randomMeals.push(response.data.meals[0]);
        }
        dispatch ({
            type: "FETCH_RANDOM_MEALS",
            payload: randomMeals
        });
    }
}
export const searchResults = (name) => {
    return async dispatch => {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
        console.log(response);
        dispatch({
            type: "SEARCH_RESULTS",
            payload: response.data.meals
        });
    }
}
export const loginModalActive = (payload) => {
    return {
        type: "LOGIN_MODAL_ACTIVE",
        payload: payload
    }
}

export const login = () => {
    return {
        type: "LOGIN"
    }
}

export const logout = () => {
    return {
        type: "LOGOUT"
    }
}