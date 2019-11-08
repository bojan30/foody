import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchCategories} from '../../actions/index';
import Card from '../Card/Card';

const CategoriesList = ({fetchCategories, categories, history}) => {
    //fetch categories from redux state
    useEffect(()=>{
        fetchCategories();
    },[fetchCategories]);

    const handleClick = (id) => {
        //go to category page
        history.push(`/category/${id}`);
    }
    return (
        <section id = "categories" className="section categories">
            <div className="container">
                <h3 className="section-title">
                    Categories
                </h3>
                <div className="card-wrapper">
                    {
                        categories.map(category => {
                            return (
                                <Card
                                    key = {category.idCategory}
                                    handleClick = {(id) => handleClick(id)}
                                    title = {category.strCategory}
                                    img = {category.strCategoryThumb}
                                    id = {category.strCategory}
                                />
                                // <div onClick={(e, name) => handleClick(category.strCategory)} key={category.idCategory} className="card">
                                //     <img src={category.strCategoryThumb} alt="" />
                                //     <h4 className="category-title">{category.strCategory}</h4>
                                // </div>
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