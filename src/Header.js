import React, { Component } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";

import logoDefault from "./assets/dDWholeLogo.png";
import logoAltSrc from "./assets/dogOnly.png";
import textOnly from "./assets/delightfulText.png";

class Header extends Component {
  state = { showNav: false };

  hideMenu = () => {
    this.setState({ showNav: false });
  };

  handleMenuToggle = () => {
    const x = document.getElementById(styles.navItems);
      if (x.style.display === 'none' || x.style.display === '') {
        x.style.display = "inherit";
      } else {
        x.style.display = "none";
      }
  };

  render() {
    const { showNav } = this.state;
    const navItems = this.props.navItems;

    return (
      <section id={styles.headerSection}>
        <div className={styles.topInfo}>
          <div id={styles.infoDiv}>
            <a className={styles.contactBtn} href="tel:678-273-3700">
              (678) 273-3700
            </a>
            <a
              className={styles.contactBtn}
              href="email:info@delightful-dog.com"
            >
              info@delightful-dog.com
            </a>

            <a
              href="https://www.facebook.com/DelightfulDogMarietta?fref=ts"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className={styles.icon}
                icon={faFacebook}
                size="2x"
              ></FontAwesomeIcon>
            </a>

            <a
              href="https://www.instagram.com/delightfuldog/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className={styles.icon}
                icon={faInstagram}
                size="2x"
              ></FontAwesomeIcon>
            </a>

            <a
              href="https://twitter.com/adoptagolden?lang=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className={styles.icon}
                icon={faTwitter}
                size="2x"
              ></FontAwesomeIcon>
            </a>
          </div>
          <div id={styles.tabDiv}>
            <a
              href="https://sanity-delightful-dog-main.netlify.com/"
              a
              id={styles.homeTab}
            >
              Home
            </a>

            <a href="https://delightful-dog.netlify.com/" id={styles.blogTab}>
              Blog
            </a>
          </div>
        </div>
        <div className={styles.root} data-show-nav={showNav}>
          <h1 className={styles.branding}>
            <a className={styles.logoHolder} href="/">
              <img id={styles.logo} src={logoDefault} alt="" />
            </a>

            <a className={styles.logoHolder} href="/">
              <img src={logoAltSrc} alt="" id={styles.logoAlt} />
            </a>
          </h1>
          <div id={styles.textHolder}>
            <img src={textOnly} alt="" className={styles.textOnly} />
          </div>
          <nav className={styles.nav}>
            <button
              className={styles.showNavButton}
              onClick={this.handleMenuToggle}
            >
              <FontAwesomeIcon
                className={styles.hamburgerIcon}
                icon={faBars}
              ></FontAwesomeIcon>
            </button>
            <ul id={styles.navItems} style={{ dispaly: 'flex'}}>
              {navItems.map((item, index) => {
                const { toPath, nav } = item;
                const _id = item.nav.toLowerCase() + index;
                return (
                  <li key={_id}>
                    <Link to={toPath} className={styles.navItem}>
                      {nav}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </section>
    );
  }
}

export default Header;
