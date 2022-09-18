import { Link, Outlet } from "react-router-dom";
import Home from "./home.jsx";
import GoAnimal from "./animalUnic.jsx";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/" component={Home}>Home</Link>
          </li>
          <li>
            <Link to="animalUnic" component={GoAnimal}>Animals</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;