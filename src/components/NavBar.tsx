import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Projects from "./Projects";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div>
        <nav>
          <div className="logo">Pablo</div>
          <ul
            className="nav-links"
            style={{ transform: open ? "translateX(0px)" : "" }}
          >
            <li>
              <NavLink className="nav-link" to="/" exact>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/about">
                About me
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/projects">
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
          <FontAwesomeIcon
            onClick={() => setOpen(!open)}
            className="burger"
            icon={faBars}
          />
        </nav>
      </div>
    </>
  );
}
