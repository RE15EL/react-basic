import { NavLink, Outlet } from "react-router-dom";
import './Layout.css';

export function Layout() {
  const navLinkClassName = ( {isActive, isPending, isTransitioning} )=> {
    return [
      "list-item",
      isActive ? "active" : " ",
      isPending ? "pending" : " ",
      isTransitioning ? "transitioning" : " "
    ].join(" ");
  };
    return (
      <div className="container">
        <nav >
          <ul className="navigation">
            <li>
              <NavLink className={navLinkClassName} to="/">Home</NavLink>
            </li>
            <li>
              <NavLink className={navLinkClassName} to="/about">About</NavLink>
            </li>
            <li>
              <NavLink className={navLinkClassName} to="/dashboard">Dashboard</NavLink>
            </li>
            <li>
              <NavLink className={navLinkClassName} to="/nothing-here">Nothing Here</NavLink>
            </li>
          </ul>
        </nav>  
        <hr className="spcY"/>
        <Outlet />
      </div>
    );
  }