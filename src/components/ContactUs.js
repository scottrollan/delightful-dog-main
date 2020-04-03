import React from "react";
import styles from "./ContactUs.module.css";
import src from "../assets/reachOut.jpg"

const ContactUs = () => {
  return (
    <section className={styles.ContactUs}>
      <img src={src} alt="" className={styles.reachOut}/>
    <div id={styles.contactArea}>
      <div className={styles.address}>
        <h3 className={styles.h3}>The Delightful Dog</h3>
        <p className={styles.p}>4958 Lower Roswell Rd.</p>
        <p className={styles.p}>Suite 124</p>
        <p className={styles.p}>Marietta, GA 30068</p>
        <h5 className={styles.h5}>
          E-mail us:{" "}
          <a className={styles.href} href="mailto:info@delightful-dog.com">info@delightful-dog.com</a>
        </h5>
        <h5 className={styles.h5}>
          {" "}
          or call us: <a className={styles.href} href="tel:6782733700">678.273.3700</a>
        </h5>
      </div>
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Send Us A Message</legend>
        <form
          className={styles.form}
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
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
              id="name"
              name="name"
              required
              placeholder="Your name"
            />

            <input
              className={styles.input}
              type="email"
              id="email"
              name="email"
              required
              placeholder="Your email"
            />
          </div>

          <div className={styles.line}>
            <input
              className={styles.input}
              type="text"
              id="address1"
              name="address1"
              placeholder="Address line 1"
            />

            <input
              className={styles.input}
              type="text"
              id="address2"
              name="address2"
              placeholder="Address line 2"
            />
          </div>

          <div className={styles.line}>
            <input
              className={styles.input}
              type="text"
              name="city"
              placeholder="City"
            />
            <span className={styles.stZip}>
              <select
                className={styles.select}
                defaultValue="GA"
                name="state"
                id={styles.st}
              >
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
                <option value="AS">American Samoa</option>
                <option value="GU">Guam</option>
                <option value="MP">Northern Mariana Islands</option>
                <option value="PR">Puerto Rico</option>
                <option value="UM">United States Minor Outlying Islands</option>
                <option value="VI">Virgin Islands</option>
              </select>
              <input
                className={styles.input}
                type="text"
                id={styles.zip}
                name="zip"
                placeholder="ZIP Code"
              />
            </span>
          </div>

          <div>
            <textarea
              className={styles.textarea}
              required
              id="message"
              name="message"
              rows="6"
              placeholder="Your message here..."
              style={{ flexBasis: "100%" }}
            ></textarea>
          </div>

          <button className={styles.button} type="submit">
            Submit
          </button>
        </form>
      </fieldset>
    </div>
    </section>
  );
};

export default ContactUs;
