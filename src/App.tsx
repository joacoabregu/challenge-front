import "./App.css";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Catalogue from "./pages/Catalogue";

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/catalogo">
          <Catalogue />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
