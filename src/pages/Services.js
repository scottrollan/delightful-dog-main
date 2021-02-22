import React, { Component } from 'react';
import { fetchServices } from '../api/client';
import { compileRichText, compiledParagraph } from '../api/compileRichText';
import ReactHtmlParser from 'react-html-parser';
import styles from './Services.module.css';
import Stripe from '../components/Stripe';
import src2 from '../assets/doodle.jpg';

class Services extends Component {
  state = {
    services: [],
  };

  getServices = async () => {
    let services = [];
    let serviceDesc = '';

    const allServices = await fetchServices;
    allServices.forEach((service) => {
      const rawRef = service.image.asset._ref;
      const refArray = rawRef.split('-');
      const src = `https://cdn.sanity.io/images/iln0s9zc/production/${refArray[1]}-${refArray[2]}.${refArray[3]}`;
      service['src'] = src;
      services = [...services, service];
      const desc = service.description;
      desc.forEach((paragraph) => {
        compileRichText(paragraph);
        serviceDesc = serviceDesc.concat(compiledParagraph);
      }); // end paragraph forEach
      service['compiledDesc'] = serviceDesc;
      serviceDesc = '';
      this.setState({
        services,
      });
    }); //end services.map(service =>
  };
  componentDidMount() {
    this.getServices();
  }

  render() {
    const services = this.state.services;
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
            const ref = s.name.split(' ');
            const refId = ref.join('').toLowerCase() + index;
            const rawSrc = s.image.asset._ref;
            const arraySrc = rawSrc.split('-');
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
          <img src={src2} alt="" className={styles.servicesBottomImage} />
        </div>
        <Stripe />
      </section>
    );
  }
}

export default Services;
