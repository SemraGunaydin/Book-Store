import {NavLink} from "react-router-dom";

function Header() {
  return (
    <header className="bg-body text-dark">
      <div className="d-flex align-items-center justify-content-around container py-2">
        <h2 className="fs-2">Empik Book Store</h2>
        <nav className="d-flex gap-4">
          <NavLink to="/">Homepage</NavLink>
          <NavLink to="/product">Products</NavLink>
          <NavLink to="/category">Category</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;