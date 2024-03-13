import React, { useEffect, useState } from 'react';

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
import { getUserOrders } from '../Managers/OrderManager';

export default function Header({isLoggedIn, setIsLoggedIn}) {
  const [isOpen, setIsOpen] = useState(false);
  const [userOrders, setUserOrders] = useState([]);
  const toggle = () => setIsOpen(!isOpen);
  const localTabloidUser = localStorage.getItem("userProfile");
  const JewelUserObject = JSON.parse(localTabloidUser);
 
  useEffect(() => {
    const localTabloidUser = localStorage.getItem('userProfile');
    const JewelUserObject = JSON.parse(localTabloidUser);

    // Fetch user orders and update state
    getUserOrders(JewelUserObject?.id)
      .then(data => setUserOrders(data))
      .catch(error => console.error('Error fetching user orders:', error));
  }, []);

  return (
    <div className="sticky-navbar">
      
  <Navbar color="black" light expand="md">
  
    <NavbarToggler onClick={toggle} />
    <Collapse isOpen={isOpen} navbar>
      <Nav className="mr-auto" navbar>
        { /* When isLoggedIn === true, we will render the Home link */ }
        {isLoggedIn &&
      <>
          <NavItem>
            <NavLink tag={RRNavLink} to="/" style={{ fontSize: "20px", color: "white" }}>Home</NavLink> {/* Adjust the font size */}
          </NavItem>
      </>
        }
         {!isLoggedIn &&
      <>
          <NavItem>
            <NavbarBrand tag={RRNavLink} to="/"style={{ fontSize: "30px", color: "white", fontFamily: "Dancing Script" }}> JEWELETTA </NavbarBrand>
          </NavItem>
      </>
        }
         {isLoggedIn && JewelUserObject?.id == 2 &&
         <>
          <NavItem>
          <NavLink tag={RRNavLink} to="/paintings/admin" style={{ fontSize: "20px", color: "white" }}>Gallery Management</NavLink> {/* Adjust the font size */}
        </NavItem>
         <NavItem>
          <NavLink tag={RRNavLink} to="/categories" style={{ fontSize: "20px", color: "white" }}>Category Management</NavLink> {/* Adjust the font size */}
        </NavItem>
        <NavItem>
            <NavLink tag={RRNavLink} to="/orders" style={{ fontSize: "20px", color: "white" }}>Order Management</NavLink> {/* Adjust the font size */}
          </NavItem>
        </>
        }
        {isLoggedIn && JewelUserObject?.id !== 2 &&
          <>
          <NavItem>
            <NavLink tag={RRNavLink} to="/paintings" style={{ fontSize: "20px", color: "white" }}>Gallery</NavLink> {/* Adjust the font size */}
          </NavItem>
          <NavItem>
             <NavLink tag={RRNavLink} to="/my-orders" style={{ fontSize: "20px", color: "white" }}>MyCart{userOrders.length > 0 && `(${userOrders.length})`}</NavLink>
              </NavItem>
          </>
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