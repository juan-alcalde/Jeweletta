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
  
    <NavbarToggler onClick={toggle} />
    <Collapse isOpen={isOpen} navbar>
      <Nav className="mr-auto" navbar>
        { /* When isLoggedIn === true, we will render the Home link */ }
        {isLoggedIn &&
      
          <NavItem>
            <NavLink tag={RRNavLink} to="/" style={{ fontSize: "20px", color: "white" }}>Home</NavLink> {/* Adjust the font size */}
          </NavItem>
 
        }
         {isLoggedIn && JewelUserObject?.id == 2 &&
         <>
          <NavItem>
          <NavLink tag={RRNavLink} to="/paintings/admin" style={{ fontSize: "20px", color: "white" }}>Gallary Managment</NavLink> {/* Adjust the font size */}
        </NavItem>
         <NavItem>
          <NavLink tag={RRNavLink} to="/categories" style={{ fontSize: "20px", color: "white" }}>Category Managment</NavLink> {/* Adjust the font size */}
        </NavItem>
        </>
        }
        {isLoggedIn && JewelUserObject?.id !== 2 &&
          <NavItem>
            <NavLink tag={RRNavLink} to="/paintings" style={{ fontSize: "20px", color: "white" }}>Merchandise</NavLink> {/* Adjust the font size */}
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
            <NavbarBrand tag={RRNavLink} to="/"style={{ fontSize: "30px", color: "white", fontFamily: "Dancing Script" }}> JEWELETTA </NavbarBrand>
          </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to="/login" style={{ fontSize: "20px", color: "white" }}>Login</NavLink> 
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to="/register" style={{ fontSize: "20px", color: "white" }}>Register</NavLink> 
            </NavItem>
          </>
        }
      </Nav>
    </Collapse>
  </Navbar>
</div>

  );
}