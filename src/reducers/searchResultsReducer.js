export const searchResultsReducer = (searchResults = [], action) => {
    if(action.type === "SEARCH_RESULTS"){
        if(action.payload){
            return [...action.payload]
        }
        return null
    }
    return searchResults;
}