import "./App.css";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import React, { Suspense } from "react";
import Spinner from "./components/Spinner";

const Product = React.lazy(() => import("./pages/Product"));
const Catalogue = React.lazy(() => import("./pages/Catalogue"));

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/catalogo">
          <Suspense fallback={<Spinner />}>
            <Catalogue />
          </Suspense>
        </Route>
        <Route path="/catalogo/detalle/:id">
          <Suspense fallback={<Spinner />}>
            <Product />
          </Suspense>
        </Route>
        <Route path="/">
          <Suspense fallback={<Spinner />}>
            <Home />
          </Suspense>
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
