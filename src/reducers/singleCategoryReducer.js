export const singleCategoryReducer = (categoryRecipes = [], action) => {
    if(action.type === "FETCH_SINGLE_CATEGORY"){
        return [...action.payload];
    }
    return categoryRecipes;
}