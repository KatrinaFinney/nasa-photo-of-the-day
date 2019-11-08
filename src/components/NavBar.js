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
  DropdownItem } from 'reactstrap';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar  style={{ background: 'rebeccapurple' }} light expand="md">
        <NavbarBrand style={{ color: 'white' }} href="/">NASA's photo of the day</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav  className="ml-auto" navbar>
            <NavItem >
              <NavLink style={{ color: 'white' }} href="#nasalist">Info</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{ color: 'white' }} href="https://www.nasa.gov">NASA.gov</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle style={{ color: 'white' }} nav caret>
                View Mode
              </DropdownToggle>
              <DropdownMenu style={{ background: 'grey' }} right>
                <DropdownItem>
                  Dark
                </DropdownItem>
                <DropdownItem style={{ color: 'lightgrey' }}>
                  Light
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem style={{ color: 'red' }}>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;