import React, {useState,useEffect} from 'react';
import {connect} from 'react-redux';
import Card from '../Components/Card/Card';
import {fetchSingleCategory} from '../actions/index';

const CategoryPage = ({history, match, fetchSingleCategory, categoryRecipes}) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [randomNumber, setRandomNumber] = useState(null);

    const categoryName = match.params.name;
    //fetch meals with category name
    useEffect(() => {
        fetchSingleCategory(categoryName);
    }, [fetchSingleCategory, categoryName]);

    useEffect(() => {
        if(categoryRecipes.length){
            setRandomNumber(Math.floor(Math.random()*categoryRecipes.length));
        }
    },[categoryRecipes]);

    const changeHandler = (e) => {
        setSearchTerm(e.target.value);
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
                    {
                        categoryRecipes.length && randomNumber !== null && <Card
                            handleClick={(id) => handleClick(id)}
                            id={categoryRecipes[randomNumber].idMeal}
                            img={categoryRecipes[randomNumber].strMealThumb}
                            title={categoryRecipes[randomNumber].strMeal}
                            key={categoryRecipes[randomNumber].idMeal}
                        />
                    }
                </div>
                <div className = "devider"></div>
                <div className="search-bar">
                    <div className="input-wrapper">
                        <input onChange={changeHandler} type="text" placeholder="Search" value = {searchTerm} />
                        <button className="search-btn" type="submit"><i className="fas fa-search"></i></button>
                    </div>
                </div>
                <div className="card-wrapper">
                    {
                        filteredRecipes.map(recipe => {
                            return (
                                <Card
                                    handleClick={(id) => handleClick(id)}
                                    id={recipe.idMeal}
                                    img={recipe.strMealThumb}
                                    title={recipe.strMeal}
                                    key={recipe.idMeal}
                                />
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