import React, {useEffect} from 'react'
import {connect} from 'react-redux';
import {fetchRandomMeals} from '../actions/index';
import Card from '../Components/Card/Card';

const MyMealsPage = ({history, fetchRandomMeals, randomMeals}) => {
    useEffect(() => {
        fetchRandomMeals(10);
    },[fetchRandomMeals]);
    const handleClick = (id) => {
        history.push(`/single/${id}`);
    }
    return (
        <section className="section">
            <div className="container">
                <h3 className="section-title">
                    My Meals
                </h3>
                <div className="card-wrapper">
                    {
                        randomMeals.map(recipe => {
                            return (
                                <Card
                                    handleClick={(id) => handleClick(id)}
                                    id = {recipe.idMeal}
                                    img = {recipe.strMealThumb}
                                    title = {recipe.strMeal}
                                    key={recipe.idMeal}
                                />
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