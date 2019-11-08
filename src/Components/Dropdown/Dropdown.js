import React from 'react';
import './Dropdown.css';

const Dropdown = ({ categories, isActiveDropdown, onSetActiveDropdown, onSetCategory, selectedCategory}) => {
    const handleClick = () => {
        onSetActiveDropdown(!isActiveDropdown);
    }
    const setCategory = (name) => {
        onSetCategory(name);
        onSetActiveDropdown(false);
    }
    return (
        <div className="dropdown">
            <div className="dropdown-header" onClick={handleClick}>
                <div className="category-list">
                    <span>{selectedCategory}</span>
                </div>
                <i className={`fas fa-caret-down ${isActiveDropdown ? 'active' : ''}`}></i>
            </div>
            {
                isActiveDropdown && <ul className="dropdown-menu">
                    <li onClick = {(e, name) => setCategory("All")}>All</li>
                    {
                        categories.map((category) => {
                            return (
                                <li key={category.idCategory} onClick={(e, name) => setCategory(category.strCategory)}>
                                    {category.strCategory}
                                </li>
                            );
                        })
                    }
                </ul>
            }
        </div>
    );

}

export default Dropdown;