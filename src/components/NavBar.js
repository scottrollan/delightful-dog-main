import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import logoDefault from "../assets/dDWholeLogo.png";
import logoAltSrc from "../assets/dogOnly.png";
import textOnly from "../assets/delightfulText.png";
import styles from "./NavBar.module.css";

class NavBar extends Component {
  render() {
    const navItems = this.props.navItems;
    return (
      <Navbar collapseOnSelect expand="md" bg="none" className={styles.bar} style={{ margin: 'auto' }}>
        <Navbar.Brand href="/" className={styles.branding}>
          <span className={styles.logoHolder} href="/">
            <img id={styles.logo} src={logoDefault} alt="" />
          </span>

          <span className={styles.logoHolder} href="/">
            <img src={logoAltSrc} alt="" id={styles.logoAlt} />
          </span>
        </Navbar.Brand>
        <div id={styles.textHolder}>
          <img src={textOnly} alt="" className={styles.textOnly} />
        </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" style={{ textAlign: 'right', paddingRight: '2vw', justifyContent: 'flex-end'}}>
          <Nav >
            {navItems.map((item, index) => {
              const { toPath, nav } = item;
              const _id = item.nav.toLowerCase() + index;
              return (
                <Nav.Link
                  key={_id}
                  as={Link}
                  to={toPath}
                >
                  {nav}
                </Nav.Link>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
