import React, { useState } from 'react';
import styles from './ContactUs.module.css';
import src from '../assets/reachOut.jpg';
import Stripe from '../components/Stripe';
import src2 from '../assets/fiesty.jpg';
import $ from 'jquery';
import AlertMessageSent from '../components/AlertMessageSent';

const ContactUs = () => {
  const [status, setStatus] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [message, setMessage] = useState('');

  const encode = (data) => {
    const formData = new FormData();
    Object.keys(data).forEach((k) => {
      formData.append(k, data[k]);
    });
    return formData;
  };

  const handleSubmit = (e) => {
    const data = { 'form-name': 'contact', name, email, message };

    fetch('/', {
      method: 'POST',
      // headers: { "Content-Type": 'multipart/form-data; boundary=random' },
      body: encode(data),
    })
      .then(() => {
        setStatus('Form Submission Successful!!');
        $('#alertMessageSent').css('display', 'flex');
        $('#alertMessageSent').delay(1500).fadeOut(1000);
        setName('');
        setEmail('');
        setAddress1('');
        setAddress2('');
        setCity('');
        setState('');
        setZip('');
        setMessage('');
        $('#contactForm')[0].reset();
      })
      .catch((error) => {
        setStatus('Form Submission Failed!');
        console.log(error);
        alert(status);
      });

    e.preventDefault();
  };

  const handleChange = (e) => {
    const { setMe, value } = e.target;

    return setMe(value);
  };

  return (
    <section className={styles.ContactUs}>
      <AlertMessageSent />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h1 className={styles.h1Middle}>Reach Out To Us</h1>
        <div className={styles.reachOut}>
          <img src={src} alt="" className={styles.reachOutImg} />
        </div>
      </div>

      <Stripe />
      <div id={styles.contactArea}>
        <div className={styles.address}>
          <h3 className={styles.h3}>The Delightful Dog</h3>
          <p className={styles.p}>4958 Lower Roswell Rd.</p>
          <p className={styles.p}>Suite 124</p>
          <p className={styles.p}>Marietta, GA 30068</p>
          <h5 className={styles.h5}>
            E-mail us:{' '}
            <a className={styles.href} href="mailto:info@delightful-dog.com">
              info@delightful-dog.com
            </a>
          </h5>
          <h5 className={styles.h5}>
            {' '}
            or call us:{' '}
            <a className={styles.href} href="tel:6782733700">
              678.273.3700
            </a>
          </h5>
        </div>
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Send Us A Message</legend>
          <form
            onSubmit={handleSubmit}
            action="/thank-you/"
            className={styles.form}
          >
            <input
              className={styles.input}
              type="hidden"
              name="contact-form"
              value="contact"
            />

            <div className={styles.line}>
              <input
                className={styles.input}
                type="text"
                name="name"
                required
                placeholder="Your name"
                value={name}
                onChange={handleChange}
                setMe="setName"
              />

              <input
                className={styles.input}
                type="email"
                name="email"
                required
                placeholder="Your email"
                value={email}
                onChange={handleChange}
                setMe="setEmail"
              />
            </div>

            <div className={styles.line}>
              <input
                className={styles.input}
                type="text"
                name="address1"
                placeholder="Address line 1"
                value={address1}
                onChange={handleChange}
                setMe="setAddress1"
              />

              <input
                className={styles.input}
                type="text"
                name="address2"
                placeholder="Address line 2"
                value={address2}
                onChange={handleChange}
                setMe="setAddress2"
              />
            </div>

            <div className={styles.line}>
              <input
                className={styles.input}
                type="text"
                name="city"
                placeholder="City"
                value={city}
                onChange={handleChange}
                setMe="setCity"
              />
              <span className={styles.stZip}>
                <input
                  className={styles.select}
                  type="text"
                  name="state"
                  placeholder="State"
                  id={styles.st}
                  value={state}
                  onChange={handleChange}
                  setMe="setState"
                />

                <input
                  className={styles.input}
                  type="text"
                  id={styles.zip}
                  name="zip"
                  placeholder="ZIP Code"
                  value={zip}
                  onChange={handleChange}
                  setMe="setZip"
                />
              </span>
            </div>

            <div>
              <textarea
                className={styles.textarea}
                required
                name="message"
                rows="6"
                placeholder="Your message here..."
                style={{ flexBasis: '100%' }}
                value={message}
                onChange={handleChange}
                setMe="setMessage"
              ></textarea>
            </div>

            <button className={styles.button} type="submit">
              Submit
            </button>
          </form>
        </fieldset>
      </div>
      <div className={styles.bottomImageHolder}>
        <img src={src2} alt="" className={styles.contactBottomImage} />
      </div>
    </section>
  );
};

export default ContactUs;
