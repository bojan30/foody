export const singleMealReducer = (meal = null, action) => {

    if(action.type === "FETCH_SINGLE_MEAL"){
        return {...action.payload}
    }
    return meal;
}