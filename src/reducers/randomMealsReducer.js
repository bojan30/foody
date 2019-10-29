export const randomMealsReducer = (randomMeals = [], action) => {
    if(action.type === "FETCH_RANDOM_MEALS"){
        return [...action.payload];
    }
    return randomMeals;
}