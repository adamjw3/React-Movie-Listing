import React , { Component } from 'react';
import Search from "../Search/Search.js"
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem } from 'reactstrap';
  import { NavLink } from 'react-router-dom';


class Navigation extends Component {

  render() {
    return(
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">YoYo</NavbarBrand>
        <Nav className="ml-auto mr-auto" navbar>
          <NavItem>
            <NavLink to="/"
                     activeClassName="is-active">Latest</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/liked/"
                      activeClassName="is-active">Your Favourites</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/"
                     target="_blank"         activeClassName="is-active">About</NavLink>
          </NavItem>

        </Nav>
        <Search></Search>
      </Navbar>
    );
  }
}

export default Navigation
