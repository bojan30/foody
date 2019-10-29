import React, {Fragment} from 'react'
import Header from '../Components/Header';
import CategoriesList from '../Components/CategoriesList';
import About from '../Components/About';
import Contact from '../Components/Contact';

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
