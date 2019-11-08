import React, {Fragment} from 'react'
import Header from '../Components/Header/Header';
import CategoriesList from '../Components/CategoriesList/CategoriesList';
import About from '../Components/About/About';
import Contact from '../Components/Contact/Contact';

 const HomePage = ({history}) => {
    return (
        <Fragment>
            <Header />
            <CategoriesList history = {history} />
            <About />
            <Contact />
        </Fragment>
    )
}

export default HomePage;
