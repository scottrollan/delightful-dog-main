import React from 'react'
import styles from './SocialFollow.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faFacebook,
    faInstagram,
    faTwitter
} from '@fortawesome/free-brands-svg-icons'

export default function SocialFollow() {
    return (
        <div className={styles.socialContainer}>
            <a href="https://www.facebook.com/DelightfulDogMarietta?fref=ts" target="_blank"><FontAwesomeIcon className={styles.icon} icon={faFacebook} size="3x"></FontAwesomeIcon></a>
            <a href="https://www.instagram.com/delightfuldog/" target="_blank"><FontAwesomeIcon className={styles.icon} icon={faInstagram} size="3x"></FontAwesomeIcon></a>
            <a href="https://twitter.com/adoptagolden?lang=en" target="_blank"><FontAwesomeIcon className={styles.icon} icon={faTwitter} size="3x"></FontAwesomeIcon></a>
        </div>
    )
}