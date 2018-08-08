import React , { Component } from 'react';
import Search from "../Search/Search.js"
import { NavLink } from 'react-router-dom';
import '../../components/Navigation/navigation.css'
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem } from 'reactstrap';


class Navigation extends Component {

  render() {
    return(
      <Navbar color="dark" expand="md" className="navigation">
        <NavbarBrand href="/">YoYo Cinema</NavbarBrand>
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
