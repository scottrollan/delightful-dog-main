import React, { Component } from "react";
import Router from './components/NavRouter'
import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import logoDefault from './assets/dDWholeLogo'
import logoAltSrc from './assets/dogOnly.png'
import textOnly from './assets/delightfulText'


class Header extends Component {
  state = { showNav: false }; 

  hideMenu = () => {
    this.setState({ showNav: false });
  };

  handleMenuToggle = () => {
    const { showNav } = this.state;
    this.setState({
      showNav: !showNav
    });
  };

  render() {
    const { showNav } = this.state;

    return (
      <section id={styles.headerSection}>
        <div className={styles.topInfo}>
          <div id={styles.infoDiv}>
            <a className={styles.contactBtn} href="tel:678-273-3700">
              (678) 273-3700
            </a>
            <a className={styles.contactBtn} href="email:info@delightful-dog.com">
              info@delightful-dog.com
            </a>
            <FontAwesomeIcon className={styles.icon} icon={faFacebook} size="2x">
              <a href="https://www.facebook.com/DelightfulDogMarietta?fref=ts" target="_blank"></a>
            </FontAwesomeIcon>
            <FontAwesomeIcon className={styles.icon} icon={faInstagram} size="2x">
              <a href="https://www.instagram.com/delightfuldog/" target="_blank"></a>
            </FontAwesomeIcon>
            <FontAwesomeIcon className={styles.icon} icon={faTwitter} size="2x">
              <a href="https://twitter.com/adoptagolden?lang=en" target="_blank"></a>
            </FontAwesomeIcon>
          </div>
          <div id={styles.tabDiv}>
            <a href="https://sanity-delightful-dog-main.netlify.com/" a id={styles.homeTab}>
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
              <img id={styles.logo}  src={logoDefault} alt="" id={styles.logo} />
            </a>

            <a className={styles.logoHolder} title={title} href="/">
              <img src={logoAltSrc} alt="" id={styles.logoAlt} />
            </a>
          </h1>
          <div id={styles.textHolder}>
            <img src={textOnly} alt="" className={styles.textOnly} />
          </div>
          <nav className={styles.nav}>
           <Router />
            <button className={styles.showNavButton} onClick={this.handleMenuToggle}>
            <FontAwesomeIcon className={styles.hamburgerIcon} icon={faBars}></FontAwesomeIcon></button>
          </nav>
        </div>
      </section>
    );
  }
}

export default Header;
