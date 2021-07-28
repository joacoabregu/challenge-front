import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
function Navigation() {
  return (
    <header className="header">
      <nav>
        <img src={logo} alt="logo" />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/catalogo">Catalogo</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
