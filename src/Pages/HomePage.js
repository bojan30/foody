import React, {Fragment} from 'react'
import Header from '../Components/Header';
import CategoriesList from '../Components/CategoriesList';
import About from '../Components/About';
import Contact from '../Components/Contact';

 const HomePage = () => {
    return (
        <Fragment>
            <Header />
            <CategoriesList />
            <About />
            <Contact />
        </Fragment>
    )
}

export default HomePage;
