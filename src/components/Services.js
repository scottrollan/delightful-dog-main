import React, { Component } from "react";
import ReactHtmlParser from "react-html-parser";
import styles from "./Services.module.css";
import Stripe from "./Stripe"
import src2 from '../assets/doodle.jpg'

class Services extends Component {
  state = {
    services: [],
    ulCreated: false
  };

  getServices = () => {
    let descArray = [];
    let services = [];
    const sanityClient = require("@sanity/client");
    const client = sanityClient({
      projectId: "iln0s9zc",
      dataset: "production",
      token: "",
      useCdn: false // `false` if you want to ensure fresh data
    });
    client.fetch('*[_type == "service"] | order(displayOrder asc)').then(result => {
      result.map(service => {
        services.push(service);
        this.setState({
          services: services
        });
      }); //end service.map()
      services.forEach(s => {
        let blurb = ``;
        let ulCreated = this.state.ulCreated;
        descArray = s.description;
        descArray.forEach(d => {
          let bulleted = false;
          let text = d.children[0].text;
          if (d["listItem"]) {
            bulleted = true;
          }
          if (d.children[0].text == "") {
            return;
          } else if (bulleted && !ulCreated) {
            const str = `<ul style="list-style-type: square; list-style-position: insided;"><li>${text}</li>`;
            blurb = blurb.concat(str);
            ulCreated = true;
          } else if(bulleted && ulCreated) {
            const str = `<li>${text}</li>`
            blurb = blurb.concat(str)
          } else if (!bulleted && ulCreated) {
            blurb = blurb.concat(`</ul><p>${text}</p>`);
          } else if (!bulleted && !ulCreated) {
            blurb = blurb.concat(`<p>${text}</p>`);
          }
        });
        let strLength = blurb.length
        const lastTag = blurb.substring(strLength - 5) //if the last five characters were "</li>""
        if(lastTag == "</li>"){
            blurb = blurb.concat("</ul>") //adds </ul>
        }
        s["compiledDesc"] = blurb;
      });
      this.setState({ services: services });
    });
  };

  componentDidMount() {
    this.getServices();
  }

  render() {
    const services = this.state.services
    return (
      <section>
        <div className={styles.h2Wrapper}>
        <h2 className={styles.h2Middle}>
          The comfort, safety and well-being of your dog is our only priority.
        </h2>
      </div>
      <Stripe />
        <div className={styles.containerServices}>
        {services.map((s, index) => {
          const ref = s.name.split(' ')
          const refId = ref.join('').toLowerCase() + index
          const rawSrc = s.image.asset._ref;
          const arraySrc = rawSrc.split("-");
          const src = `https://cdn.sanity.io/images/iln0s9zc/production/${arraySrc[1]}-${arraySrc[2]}.${arraySrc[3]}?h=500&fit=max`;
          return (
            <div className={styles.flexWrapperServices} key={refId}>
              <div id={styles.wordsDivServices}>
                <h3 style={{ marginTop: '0' }}>{s.name}</h3>
                {s.subtitle !== '' ? <h5>{s.subtitle}</h5> : null}
                <span>{ReactHtmlParser(s.compiledDesc)}</span>
              </div>
              <div id={styles.imageDivServices}>
                <img src={src} alt="" className={styles.imgServices} />
              </div>
            </div>
          );
        })}
        </div>
        <div className={styles.bottomImageHolder}>
        <img src={src2} alt='' className={styles.servicesBottomImage} />
        </div>
        <Stripe />
      </section>
    );
  }
}

export default Services;
