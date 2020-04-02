import React, { Component } from "react";
import styles from "./Header.module.css";
import NavBar from "./components/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";

class Header extends Component {
  state = {
    showNav: true,
    smallWindow: false
  };

  render() {
    const navItems = this.props.navItems;

    return (
        <section className={styles.Header}>
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
                  size="3x"
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
                  size="3x"
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
                  size="3x"
                ></FontAwesomeIcon>
              </a>
            </div>
            <div id={styles.tabDiv}>
              <a
                href="https://sanity-delightful-dog-main.netlify.com/"
                id={styles.homeTab}
              >
                Home
              </a>

              <a href="https://delightful-dog.netlify.com/" id={styles.blogTab}>
                Blog
              </a>
            </div>
          </div>

          <NavBar navItems={navItems} />
        </section>
    );
  }
}

export default Header;
