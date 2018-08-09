import React , { Component } from 'react';
import Search from "../Search/Search.js"
import { NavLink } from 'react-router-dom';
import '../../components/Navigation/navigation.css'
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem } from 'reactstrap';


class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return(
      <Navbar color="dark" dark expand="md" className="navigation">
        <NavbarBrand href="/">YoYo Cinema</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
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
        </Collapse>
        <Search></Search>
      </Navbar>
    );
  }
}

export default Navigation
