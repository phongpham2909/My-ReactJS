import React, { Component } from 'react';
import '../Customs_CSS/Styles/Header.css';


import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";

class Header extends Component {

  constructor(props) {
    super(props);

  }
  buildMenus() {
    let menus = [];
    if (this.props.logged) {
      menus.push((
        <Nav key={1}>
          <NavItem eventKey={1} href="/">Home</NavItem>
        </Nav>
      ));
      menus.push((
        <Nav key={2}>
          <NavItem eventKey={2} href="/Shop">Shop</NavItem>
        </Nav>
      ));
      menus.push((
        <Nav key={3}>
          <NavDropdown eventKey={3} title="Account Management" id="basic-nav-dropdown">
            <MenuItem onClick={this.onLogout.bind(this)} href="/accounts" eventKey={3.1}>Accounts</MenuItem>
            <MenuItem eventKey={3.2} href="/accounts/rules">Accounts Rules</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3}>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
      ));
      menus.push((
        <Nav pullRight key={4}>
          <NavDropdown eventKey={3} title="Phong Pham" id="nav-profile">
            <MenuItem onClick={this.onLogout.bind(this)} eventKey={3.1}>Logout</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
          </NavDropdown>
        </Nav>
      ));
    }
    return menus;
  }
  onLogout(event) {
    this.props.onLogout();
  }

  render() {
    let menus = this.buildMenus();
    return (
      <div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#brand">Phong Store</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            {menus}
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
