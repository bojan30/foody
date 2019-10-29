import React, {useState,useEffect} from 'react';
import {connect} from 'react-redux';
import SearchBar from '../Components/SearchBar';
import {fetchSingleCategory} from '../actions/index';

const CategoryPage = ({history, match, fetchSingleCategory, categoryRecipes}) => {
    const [searchTerm, setSearchTerm] = useState("");

    const categoryName = match.params.name;
    //fetch meals with category name
    useEffect(() => {
        fetchSingleCategory(categoryName);
    }, [fetchSingleCategory]);

    const onChangeHandler = (value) => {
        setSearchTerm(value);
    }
    const handleClick = (id) => {
        history.push(`/single/${id}`);
    }

    const filteredRecipes = categoryRecipes.filter(recipe => recipe.strMeal.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    return (
        <div className = "section">
            <div className = "container">
                <h3 className="section-title">
                    {categoryName}
                </h3>
                <div className = "recomendation">
                    <h4 className = "recomendation-title">Our recomendation</h4>
                    {categoryRecipes.length && <div className="category">
                        <img src={categoryRecipes[5].strMealThumb} alt="" />
                        <h4 className="category-title">{categoryRecipes[5].strMeal}</h4>
                    </div>}
                </div>
                <div className = "devider"></div>
                <SearchBar onChangeHandler = {onChangeHandler} />
                <div className="categories-wrapper">
                    {
                        filteredRecipes.map(recipe => {
                            return (
                                <div onClick = {(e, id) => handleClick(recipe.idMeal)} key={recipe.idMeal} className="category">
                                    <img src={recipe.strMealThumb} alt="" />
                                    <h4 className="category-title">{recipe.strMeal}</h4>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        categoryRecipes: state.categoryRecipes
    }
}

const mapDispatchToProps = {
    fetchSingleCategory
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);