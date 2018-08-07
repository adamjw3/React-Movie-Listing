import React , { Component } from 'react';
import Search from "../Search/Search.js"
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';


class Navigation extends Component {

  render() {
    return(
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">YoYo</NavbarBrand>
        <Nav className="ml-auto mr-auto" navbar>
          <NavItem>
            <NavLink href="/liked/">Movies you liked</NavLink>
          </NavItem>
        </Nav>
        <Search></Search>
      </Navbar>
    );
  }
}

export default Navigation
