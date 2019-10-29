import React, {useEffect} from 'react'
import {connect} from 'react-redux';
import {fetchRandomMeals} from '../actions/index';

const MyMealsPage = ({fetchRandomMeals, randomMeals}) => {
    console.log(randomMeals);
    useEffect(() => {
        fetchRandomMeals(10);
    },[]);
    return (
        <section className="section">
            <div className="container">
                <h3 className="section-title">
                    My Meals
                </h3>
                <div className="categories-wrapper">
                    {
                        randomMeals.map(meal => {
                            return (
                                <div key={meal.idMeal} className="category">
                                    <img src={meal.strMealThumb} alt="" />
                                    <h4 className="category-title">{meal.strMeal}</h4>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </section>
    )
}

const mapStateToProps = (state) => {
    return{
        randomMeals: state.randomMeals
    };
}

const mapDispatchToProps = {
    fetchRandomMeals
}

export default connect(mapStateToProps, mapDispatchToProps)(MyMealsPage);