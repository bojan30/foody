import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import Card from '../Components/Card/Card';
import Dropdown from '../Components/Dropdown/Dropdown';
import {fetchCategories, fetchRandomMeals} from '../actions/index';

const SearchPage = ({history,searchResults, categories, fetchCategories, fetchRandomMeals, randomMeals}) => {
    useEffect(() => {
        fetchCategories();
    }, [fetchCategories]);

    useEffect(() => {
        fetchRandomMeals(1);
    }, [fetchRandomMeals]);

    const [isActiveDropdown, setIsActiveDropdown] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("All");

    const handleClick = (id) => {
        history.push(`/single/${id}`);
    }

    const onSetActiveDropdown = (value) => {
        setIsActiveDropdown(value);
    }

    const onSetCategory = (name) => {
        setSelectedCategory(name);
    }
    
    const filteredSearchResults = selectedCategory === "All" ? searchResults : searchResults.filter(r => r.strCategory === selectedCategory);

    return (
       <section className = "section">
           <div className = "container">
               <h3 className = "section-title">
                   Search results
               </h3>
                <div className="recomendation">
                    <h4 className="recomendation-title">Our recomendation</h4>
                    <div className = "card-wrapper">
                        {
                            randomMeals.map(recipe => {
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
                <Dropdown
                    categories = {categories}
                    isActiveDropdown = {isActiveDropdown}
                    onSetActiveDropdown = {onSetActiveDropdown}
                    onSetCategory = {onSetCategory}
                    selectedCategory = {selectedCategory}
                /> 
                <div className = "card-wrapper">
                   {
                        filteredSearchResults && filteredSearchResults.length ? (
                            filteredSearchResults.map(recipe => {
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
                        ) : (
                            <div>No recipes to show...</div>
                        )
                   }
               </div>
           </div>
       </section>
    )
}

const mapStateToProps = (state) => {
    return {
        searchResults: state.searchResults,
        categories: state.categories,
        randomMeals: state.randomMeals
    }
}
const mapDispatchToProps = {
    fetchCategories,
    fetchRandomMeals
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);