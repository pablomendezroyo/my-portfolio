import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { transform } from "typescript";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <nav>
        <div className="logo">React nav</div>
        <ul
          className="nav-links"
          style={{ transform: open ? "translateX(0px)" : "" }}
        >
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About me</a>
          </li>
          <li>
            <a>Projects</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
        <FontAwesomeIcon
          onClick={() => setOpen(!open)}
          className="burger"
          icon={faBars}
        />
      </nav>
    </div>
  );
}
