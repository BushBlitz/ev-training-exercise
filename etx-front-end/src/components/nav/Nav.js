import React from "react";
import { Link } from "react-router-dom";
import NavLink from "./NavLink";
export default function Nav() {
  return (
    <nav className="navbar">
      <h3>Employee</h3>
      <ul className="navbar-links">
        <Link to="/view">
          <li>
            <NavLink name="View"></NavLink>
          </li>
        </Link>

        <Link to="/add">
          <li>
            <NavLink name="Add"></NavLink>
          </li>
        </Link>
        
        <Link to="/edit">
          <li>
            <NavLink name="Edit"></NavLink>
          </li>
        </Link>


        <Link to="/delete">
          <li>
            <NavLink name="Delete"></NavLink>
          </li>
        </Link>
      </ul>
    </nav>
  );
}
