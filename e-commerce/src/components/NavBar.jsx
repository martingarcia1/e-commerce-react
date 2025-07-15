import CartWidget from "./CartWidget";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/" className="brand">
        <img src="/logo.png" alt="Avanzar Group" className="logo" />
      </Link>
      <div className="nav-links">
        <NavLink
          to="/category/negocios"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Negocios
        </NavLink>
        <NavLink
          to="/category/administracion"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Administración
        </NavLink>
        <NavLink
          to="/category/tecnologia"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Tecnología
        </NavLink>
        <NavLink
          to="/category/finanzas"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Finanzas
        </NavLink>
      </div>
      <CartWidget />
    </nav>
  );
}

export default NavBar;