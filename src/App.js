import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HomePage, CategoryPage, SearchPage, SingleMealPage, MyMealsPage } from './Pages/index';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <div className = "main">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/category" component={CategoryPage} />
            <Route exact path="/single" component={SingleMealPage} />
            <Route exact path="/search" component={SearchPage} />
            <Route exact path="/my-meals" component={MyMealsPage} />
          </Switch>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
