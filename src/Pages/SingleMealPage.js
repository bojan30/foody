import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchSingleMeal} from '../actions/index'

const SingleMealPage = ({match, fetchSingleMeal, singleMeal}) => {
    const id = match.params.id;
    //fetch single meal from api
    useEffect(() => { 
        fetchSingleMeal(id);
    }, []);
    console.log(singleMeal);
    return (
        <div className = "section">
            <div className="container">
                {
                    singleMeal && <div className = "meal-details">
                        <div className = "meal-details-main">
                            <div className="meal-details-left">
                                <h4 className="category-title">{singleMeal.strMeal}</h4>
                                <img src={singleMeal.strMealThumb} alt="" />
                            </div>
                            <div className="meal-details-right">
                                <div className="tags">
                                    <span>{singleMeal.strTags && singleMeal.strTags.split(",").map(tag => `#${tag} `)}</span>
                                </div>
                                <div>
                                    <div><span>Category:</span> {singleMeal.strCategory}</div>
                                    <div><span>Origin:</span> {singleMeal.strArea}</div>
                                    <div><span>Video:</span> <a href={singleMeal.strYoutube}>{singleMeal.strYoutube}</a></div>
                                    <div>{singleMeal.strInstructions}</div>
                                </div>
                            </div>
                        </div>
                        <div className = "meal-details-ingredients">
                            <div className = "ingredients">
                                <h4>Ingredient</h4>
                                {
                                    //filter all ingredients
                                    Object.keys(singleMeal).filter(key => key.indexOf("strIngredient") !== -1).map(key => {
                                        return (
                                            <div key = {key}>{singleMeal[key]}</div>
                                        );
                                    })
                                }
                            </div>
                            <div className = "measures">
                                <h4>Measure</h4>
                                {
                                    //filter all measures
                                    Object.keys(singleMeal).filter(key => key.indexOf("strMeasure") !== -1).map(key => {
                                        return (
                                            <div key = {key}>{singleMeal[key]}</div>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        singleMeal: state.singleMeal
    }
}
const mapDispathToProps = {
    fetchSingleMeal
}

export default connect(mapStateToProps, mapDispathToProps)(SingleMealPage);