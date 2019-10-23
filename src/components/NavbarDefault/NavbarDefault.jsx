import React from "react";

// styles
import "./NavbarDefault.scss";

// components
import Navbar from "react-bootstrap/Navbar";

const NavbarDefault = ({ title }) => {
  return (
    <Navbar
      bg="light"
      className="shadow-sm py-2 justify-content-center align-items-center"
    >
      <Navbar.Brand className="navbar-brand" href="/">
        <span role="img" aria-label="emoji">
          &#127875;
        </span>{" "}
        {title}{" "}
        <span role="img" aria-label="emoji">
          &#127875;
        </span>{" "}
      </Navbar.Brand>
    </Navbar>
  );
};

export default NavbarDefault;
