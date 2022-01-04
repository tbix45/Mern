import './App.css';
import React, { useState } from 'react'
import AllProducts from './components/AllProducts';
import ProductForm from './components/ProductForm';
import OneProductDetails from './components/OneProductDetails';
import UpdateProduct from './components/UpdateProduct';
import {
  BrowserRouter,
  Route,
  Link,
  Switch
} from "react-router-dom"

function App() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  return (
    //browser router tells us we can do routing
    <BrowserRouter>
      <div className="App">
        <h1>Product Management Tool</h1>
        <Switch>
          {/*Anything inside switch will only show on specific routes.
          Anything outside switch shows on all routes*/}
          <Route exact path="/new">
            <ProductForm formSubmitted={formSubmitted} setFormSubmitted={setFormSubmitted}></ProductForm>
          </Route>
          <Route exact path="/">
            <AllProducts formSubmitted={formSubmitted}></AllProducts>
          </Route>

          <Route exact path="/api/product/:id">
            {/*The :id is a route paramenter and the productDetails component can useParams() to extract the information in :id*/}
            <OneProductDetails></OneProductDetails>
          </Route>

          <Route exact path="/api/product/update/:id">
            <UpdateProduct formSubmitted={formSubmitted} setFormSubmitted={setFormSubmitted}></UpdateProduct>
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
