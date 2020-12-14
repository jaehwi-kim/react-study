import React, { useState } from "react";
import logo from "../../images/logo.png";
import "../../styles/common.css";
import "./Header.css";
import { Link } from 'react-router-dom';
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MenuIcon from '@material-ui/icons/Menu';
import Dropdown from 'react-bootstrap/Dropdown';

const Header = (props) => {

  return (
    <>
      <div className="modal-header border-bottom-primary">
        <div className="col">
          <MenuIcon onClick={() => {props.setNavOpen(!props.navOpen)}} style={{ cursor: "pointer" }}></MenuIcon>
          <Link to="/system" className="nav-link d-inline">
            <img src={logo} height="40px" alt=""/>
          </Link>
        </div>

        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          <FontAwesomeIcon icon={faUser} size="2x" />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#">Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </>
  );
};
export default Header;
