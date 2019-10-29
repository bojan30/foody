import React from 'react';

const SearchBar = ({onChangeHandler}) => {
    const changeHandler = (e) => {
        onChangeHandler(e.target.value);
    }
    return (
        <div className="search-bar">
            <div className="input-wrapper">
                <input onChange = {changeHandler} type="text" placeholder="Search recipes" />
                <button className="search-btn" type="submit"><i className="fas fa-search"></i></button>
            </div>
        </div>
    );

}

export default SearchBar;