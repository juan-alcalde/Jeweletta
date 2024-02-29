import React, { useState } from 'react';
import { NavLink as RRNavLink } from "react-router-dom";
import { logout } from '../Managers/UserProfileManager';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import "./Header.css";

export default function Header({isLoggedIn, setIsLoggedIn}) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const localTabloidUser = localStorage.getItem("userProfile");
  const JewelUserObject = JSON.parse(localTabloidUser);
 

  return (
    <div className="sticky-navbar">
      
  <Navbar color="black" light expand="md">
  {/* <NavbarBrand tag={RRNavLink} to="/"style={{ fontSize: "20px", color: "white", fontFamily: "Dancing Script"  }}>JEWELETTA EDDI</NavbarBrand> */}
    <NavbarToggler onClick={toggle} />
    <Collapse isOpen={isOpen} navbar>
      <Nav className="mr-auto" navbar>
        { /* When isLoggedIn === true, we will render the Home link */ }
        {isLoggedIn &&
          <NavItem>
            <NavLink tag={RRNavLink} to="/" style={{ fontSize: "25px", color: "white" }}>Home</NavLink> {/* Adjust the font size */}
          </NavItem>
        }
        {isLoggedIn && JewelUserObject?.id !== 2 &&
          <NavItem>
            <NavLink tag={RRNavLink} to="/paintings" style={{ fontSize: "25px", color: "white" }}>PAINT</NavLink> {/* Adjust the font size */}
          </NavItem>
        }
      </Nav>
      <Nav navbar>
        {isLoggedIn &&
          <>
            <NavItem>
              <a aria-current="page" className="nav-link"
                style={{ cursor: "pointer", fontSize: "20px", color: "white" }} onClick={() => {
                  logout()
                  setIsLoggedIn(false)
                }}>Logout</a> {/* Adjust the font size */}
            </NavItem>
          </>
        }
        {!isLoggedIn &&
          <>
            <NavItem>
              <NavLink tag={RRNavLink} to="/login" style={{ fontSize: "20px", color: "white" }}>Login</NavLink> {/* Adjust the font size */}
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to="/register" style={{ fontSize: "20px", color: "white" }}>Register</NavLink> {/* Adjust the font size */}
            </NavItem>
          </>
        }
      </Nav>
    </Collapse>
  </Navbar>
</div>

  );
}