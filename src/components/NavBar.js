import React, { useState, useContext } from 'react';
import { UserContext } from '../App';
import Login from './login/Login.js';
import Logout from './login/Logout.js';
import * as fs from '../firestore/index';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import logoDefault from '../assets/dDWholeLogo.png';
import logoAltSrc from '../assets/dogOnly.png';
import textOnly from '../assets/delightfulText.png';
import { routes } from '../data/navItems';
import $ from 'jquery';
import styles from './NavBar.module.css';

const NavBar = (props) => {
  let thisUser = useContext(UserContext);
  const [loginShow, setLoginShow] = useState(false);
  const [logoutShow, setLogoutShow] = useState(false);

  const expandNavbar = (e) => {
    e.stopPropagation(e);
    props.expandNavbar();
  };
  const handleLogin = () => {
    setLoginShow(true);
  };
  const handleLoginShow = () => {
    setLoginShow(false);
  };
  const handleLogoutShow = () => {
    setLogoutShow(true);
  };
  const handleLogoutClose = () => {
    setLogoutShow(false);
  };

  return (
    <Navbar
      id="navBar"
      expanded={props.expanded}
      expand="md"
      bg="none"
      className={styles.bar}
      style={{ margin: 'auto' }}
    >
      <Login
        showLogin={loginShow}
        handleLoginShow={handleLoginShow}
        appendHeader=""
      />
      <Logout
        logoutShow={logoutShow}
        handleCloseLogout={() => handleLogoutClose()}
      />
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
      <Navbar.Toggle
        id="toggler"
        aria-controls="responsive-navbar-nav"
        onClick={(e) => expandNavbar(e)}
      />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        style={{
          textAlign: 'right',
          paddingRight: '3vw',
          justifyContent: 'flex-end',
        }}
      >
        <Nav>
          {routes.map((item, index) => {
            const { toPath, nav } = item;
            const _id = item.nav.toLowerCase() + index;
            return (
              <Nav.Link key={_id} as={Link} to={toPath}>
                {nav}
              </Nav.Link>
            );
          })}

          <Nav.Link
            style={{
              display: thisUser ? 'none' : 'inherit',
              alignSelf: 'flex-end',
            }}
            onClick={() => handleLogin()}
          >
            Login
          </Nav.Link>
          <Nav.Link
            style={{
              display: thisUser ? 'inherit' : 'none',
              alignSelf: 'flex-end',
            }}
            onClick={() => handleLogoutShow()}
          >
            Logout
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
