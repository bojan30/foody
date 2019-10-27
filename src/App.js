import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HomePage, CategoryPage, SearchPage, SingleMealPage, MyMealsPage } from './Pages/index';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <div>Nav</div>
        <Switch>
          <Route exact path = "/" component = {HomePage}/>
          <Route exact path="/category" component={CategoryPage} />
          <Route exact path="/single" component={SingleMealPage} />
          <Route exact path="/search" component={SearchPage} />
          <Route exact path="/my-meals" component={MyMealsPage} />
        </Switch>
        <div>Footer</div>
      </div>
    </BrowserRouter>
  );
}

export default App;
