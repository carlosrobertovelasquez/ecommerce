import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "../src/App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import Navbar from './component/Navbar';
import ProductList from './component/ProductList';
import Details from './component/Details';
import Cart from './component/Cart';
import Default from './component/Default';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar/>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ProductList} />
            <Route exact path="/Details" component={Details} />
            <Route exact path="/Cart/" component={Cart} />
            <Route  component={Default} />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
