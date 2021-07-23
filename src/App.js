import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import Product from './pages/Product/Product'
import Cart from './pages/Cart/Cart';
import Home from './pages/Home/Home';

function App() {
  return (
    <div >
      <Navbar />
      <Switch>
        <Route path="/product/:id" component={Product}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route path="/" component={Home}></Route>
      </Switch>
    </div>
  );
}

export default App;
