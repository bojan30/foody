export const categoriesReducer = (categories = [], action) => {
    if(action.type === "FETCH_CATEGORIES"){
        return [...action.payload]
    }
    return categories;
}
