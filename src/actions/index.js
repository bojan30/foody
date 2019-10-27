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