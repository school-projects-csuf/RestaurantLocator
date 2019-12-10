import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import { Button } from 'reactstrap';
import fire from "../../config/Fire"

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const logout = () => {
    fire.auth().signOut();
    }

  return (
    <div>
      <Navbar color="dark" dark expand="sm">
        <NavbarBrand href="/">BINGE</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
                <NavbarText>go get what you're craving.</NavbarText>
            </NavItem>
          </Nav>
          <NavbarText><Button color="secondary" active onClick={logout}>Sign Out</Button></NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;