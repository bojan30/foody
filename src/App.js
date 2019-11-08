import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HomePage, CategoryPage, SearchPage, SingleMealPage, MyMealsPage } from './Pages/index';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <div className = "main">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path='/category/:name' component={CategoryPage} />
            <Route exact path="/single/:id" component={SingleMealPage} />
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
