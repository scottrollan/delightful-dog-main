import React, { useState } from 'react';
import styles from './ContactUs.module.css';
import src from '../assets/reachOut.jpg';
import Stripe from '../components/Stripe';
import src2 from '../assets/fiesty.jpg';
import $ from 'jquery';
import AlertMessageSent from '../components/AlertMessageSent';

const ContactUs = () => {
  const [status, setStatus] = useState('');
  const [state, setState] = useState({
    name: '',
    email: '',
    phone: null,
    address1: '',
    address2: '',
    city: '',
    st: '',
    zip: '',
    message: '',
  });

  const encode = (data) => {
    const formData = new FormData();
    Object.keys(data).forEach((k) => {
      formData.append(k, data[k]);
    });
    return formData;
  };

  const handleSubmit = (e) => {
    const data = {
      'form-name': 'contact',
      name: state.name,
      email: state.email,
      phone: state.phone,
      message: state.message,
      address1:
        state.address1 +
        ' ' +
        state.address2 +
        ', ' +
        state.city +
        ', ' +
        state.st.toUpperCase() +
        ' ' +
        state.zip,
    };

    fetch('/', {
      method: 'POST',
      // headers: { "Content-Type": 'multipart/form-data; boundary=random' },
      body: encode(data),
    })
      .then(() => {
        setStatus('Form Submission Successful!!');
        $('#alertMessageSent').css('display', 'flex');
        $('#alertMessageSent').delay(1500).fadeOut(1000);
        setState({
          name: '',
          email: '',
          phone: '',
          address1: '',
          address2: '',
          city: '',
          st: '',
          zip: '',
          message: '',
        });
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
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const phoneMask = () => {
    var num = $('#phone').val().replace(/\D/g, '');
    $('#phone').val(
      '(' +
        num.substring(0, 3) +
        ')' +
        num.substring(3, 6) +
        '-' +
        num.substring(6, 10)
    );
  };

  $('[type="tel"]').keyup(phoneMask);

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
            className={styles.form}
            id="contactForm"
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
                value={state.name}
                // oninput={replace(/[^0-9.]/g, '')}
                onChange={(e) => handleChange(e)}
              />

              <input
                className={styles.input}
                type="email"
                name="email"
                required
                placeholder="Your email"
                value={state.email}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className={styles.line}>
              <input
                id="phone"
                className={styles.input}
                type="tel"
                value={state.phone}
                name="phone"
                placeholder="Phone, ex. (111)-111-1111"
                onInput={phoneMask}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className={styles.line}>
              <input
                className={styles.input}
                type="text"
                name="address1"
                placeholder="Address line 1"
                value={state.address1}
                onChange={(e) => handleChange(e)}
              />

              <input
                className={styles.input}
                type="text"
                name="address2"
                placeholder="Address line 2"
                value={state.address2}
                onChange={(e) => handleChange(e)}
              />
            </div>

            <div className={styles.line}>
              <input
                className={styles.input}
                type="text"
                name="city"
                placeholder="City"
                value={state.city}
                onChange={(e) => handleChange(e)}
              />
              <span className={styles.stZip}>
                <input
                  className={styles.select}
                  type="text"
                  name="st"
                  placeholder="State"
                  id={styles.st}
                  value={state.state}
                  onChange={(e) => handleChange(e)}
                />

                <input
                  className={styles.input}
                  type="text"
                  id={styles.zip}
                  name="zip"
                  placeholder="ZIP Code"
                  value={state.zip}
                  onChange={(e) => handleChange(e)}
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
                value={state.message}
                onChange={(e) => handleChange(e)}
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
