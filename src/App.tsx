import "./App.css";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import React, { Suspense } from "react";

const Product = React.lazy(() => import("./pages/Product"));
const Catalogue = React.lazy(() => import("./pages/Catalogue"));

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/catalogo">
          <Suspense fallback={<div>Cargando...</div>}>
            <Catalogue />
          </Suspense>
        </Route>
        <Route path="/catalogo/detalle/:id">
          <Suspense fallback={<div>Cargando...</div>}>
            <Product />
          </Suspense>
        </Route>
        <Route path="/">
          <Suspense fallback={<div>Cargando...</div>}>
            <Home />
          </Suspense>
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
