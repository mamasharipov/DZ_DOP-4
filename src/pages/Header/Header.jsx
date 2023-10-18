import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const NavLink = ({ to, children }) => {
  const location = useLocation();

  return (
    <li>
      <Link to={to} state={{ from: location.pathname }}>
        {children}
      </Link>
    </li>
  );
};

const Header = () => {
  return (
    <>
      <header>
        <div>
          <ul>

            <NavLink to="/">Main</NavLink>
            
            <NavLink to="/post">Post</NavLink>
          </ul>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Header;