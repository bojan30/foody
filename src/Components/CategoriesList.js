import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchCategories} from '../actions/index';

const CategoriesList = ({fetchCategories, categories, history}) => {
    //fetch categories from redux state
    useEffect(()=>{
        fetchCategories();
    },[fetchCategories]);

    const handleClick = (name) => {
        //go to category page
        history.push(`/category/${name}`);
    }
    return (
        <section id = "categories" className="section categories">
            <div className="container">
                <h3 className="section-title">
                    Categories
                </h3>
                <div className="categories-wrapper">
                    {
                        categories.map(category => {
                            return (
                                <div onClick={(e, name) => handleClick(category.strCategory)} key={category.idCategory} className="category">
                                    <img src={category.strCategoryThumb} alt="" />
                                    <h4 className="category-title">{category.strCategory}</h4>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </section>
    );

}
const mapStateToProps = (state) => {
    return {
        categories: state.categories
    }
}
const mapDispatchToProps = {
    fetchCategories: fetchCategories
}
export default connect(mapStateToProps, mapDispatchToProps)(CategoriesList);