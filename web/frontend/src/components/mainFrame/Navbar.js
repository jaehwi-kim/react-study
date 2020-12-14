import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import user_img from "../../images/user_img.png";
import "../../styles/common.css";

const Navbar = (props) => {
  return (
    <div className={props.navOpen ? "translate-enter" : "translate-exit"}>
      <Nav
        vertical
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion h-100"
      >
        <div className="sidebar-brand d-flex align-items-center justify-content-center flex-column h-auto">
          <div>
            <img
              src={user_img}
              className="img-profile rounded-circle"
              width="50%"
              alt="userImg"
            />
          </div>
          <div style={{ fontSize: "2.5vh" }}>{props.name}</div>
          <div style={{ fontSize: "2vh" }}>{props.location}</div>
        </div>
        <hr className="sidebar-divider" />
        <NavItem className="nav-item">
          <Link to="/system" className="nav-link">
            System
          </Link>
        </NavItem>
        <hr className="sidebar-divider" />
        <NavItem className="nav-item">
          <Link to="/logical" className="nav-link">
            Logical Layout
          </Link>
        </NavItem>
        <hr className="sidebar-divider" />
        <NavItem className="nav-item">
          <Link to="/graph" className="nav-link">
            Graph
          </Link>
        </NavItem>
        <hr className="sidebar-divider" />
        <NavItem
          className="nav-item position-absolute"
          style={{ bottom: "13%" }}
        >
          <NavLink href="#" className="text-center">
            <span style={{ fontSize: "1.3rem" }}>Logout</span>
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};

export default Navbar;
