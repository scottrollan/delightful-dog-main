import React, { Component } from "react";
import ReactHtmlParser from "react-html-parser";
import styles from "./Services.module.css";
import Stripe from "./Stripe"
import { jsxAttribute } from "@babel/types";

class Services extends Component {
  state = {
    services: [
      {
        name: "Training",
        subtitle: "",
        photo: "https://cdn.sanity.io/images/iln0s9zc/production/2f88f9e0a86f0d9b1cb59c90c22023409c21a6be-466x588.jpg?h=500&fit=max",
        description: `<ul style={{ listStyleType: 'square' }}>Board & Train, includes one-on-one training with dog in our facility, with an evaluation and post training session.<li>One or Two Week Board and Train</li><li>Day Training / Exercise Daycare</li><li>Group Classes</li><li>One on One Sessions (On and Off Site)</li><li>Canine Good Citizen Classes</li><li>Behavior Modification Sessions (4 Sessions On Site)</li></ul>`
      },
      {
        name: "Boarding",
        subtitle: "",
        photo: "https://cdn.sanity.io/images/iln0s9zc/production/28a28b2325da35a4258b34984331a050c1d4865e-620x345.jpg?h=200&fit=max",
        description: `<p>Our boarding area is designed specifically to reduce stress for boarding dogs. In addition, our boarding guests are taken out for a late night potty break, much like they would at home.</p><ul style={{ listStyleType: 'square' }}><li>Boarding (includes daycare or individual play)</li></ul>`
      },
      {
        name: "Daycare",
        subtitle: "",
        photo: "https://cdn.sanity.io/images/iln0s9zc/production/c045466bcab7699d11ed0087a9c4f5d866cfe249-600x450.jpg?h=200&fit=max",
        description: `<p>Delightful Dog's Daycare is an organized, controlled and monitored environment where non-aggressive dogs interact and play throughout the day in a secure and safe setting. Our supervised day care exercises the dogs both physically and mentally.</p><ul style={{ listStyleType: 'square' }}><li>Package Discounts Available</li></ul>`
      },
      {
        name: "Additional Services",
        subtitle: "https://cdn.sanity.io/images/iln0s9zc/production/5f6ee215d6966363d71b6bad09b278cc355d8110-1000x650.jpg?h=500&fit=max",
        photo: "",
        description: `<ul><li>Additional playtime</li><li>Fitness Session</li><li>Stuffed Kongs & Treats</li><li>Bedtime Story</li><li>Holiday Meals</li>`
      },
      {
        name: "Grooming",
        subtitle: "",
        photo: "https://cdn.sanity.io/images/iln0s9zc/production/cc4c0e5514d54dea018705d7f70e7da2c5fb74c9-1000x1000.jpg?h=500&fit=max",
        description: `We offer a full service grooming salon. Please call us & we will be glad to answer any questions including pricing, reservations, etc...`
      },
      {
        name: "Nursery Daycare Program",
        subtitle: "(for puppies under 16 weeks of age)",
        photo: "https://cdn.sanity.io/images/iln0s9zc/production/117a1adf878ad66f83abc8ac4d9b0afddbd29a32-3234x1796.jpg?h=500&fit=max",
        description: `<p>Structured day program to ensure your puppy is learning and happy while you are away. We provide a stimulating environment for your puppy to expand his/her confidence and develop life-long positive coping strategies. Using science based, force free, positive teaching methods, our nursery reinforces the learning your puppy is receiving at home. From potty training to basic cues, we incorporate a range of activities appropriate for the current developmental stage of your puppy. We also include time for your puppy to meet and interact with adult dogs who like and are appropriately temperament tested to be good with them.</p>`
      }
    ]
  };

  // getServices = () => {
  //   let descArray = [];
  //   let services = [];
  //   const sanityClient = require("@sanity/client");
  //   const client = sanityClient({
  //     projectId: "iln0s9zc",
  //     dataset: "production",
  //     token: "",
  //     //   "skpCGRaJUsHt3ggfZKfLOzBVXpgL6s8KqLXbOk0GNSCQvISZZc13Gkl7ulh8N506utsY2xydYjL1qN2H7nEy9DbkNnCmtFW9axNXveeLPNOfHj1W7MFFXk26X3g5S5iMHsrnfPHrgjRrdMjGNSc6Q5c796GILqWcqn5CDuvAMhF2YRVoxYXT", // or leave blank to be anonymous user
  //     useCdn: false // `false` if you want to ensure fresh data
  //   });
  //   client.fetch('*[_type == "service"] | order(displayOrder asc)').then(result => {
  //     result.map(service => {
  //       services.push(service);
  //       this.setState({
  //         services: services
  //       });
  //     }); //end service.map()
  //     services.forEach(s => {
  //       let blurb = ``;
  //       let ulCreated = this.state.ulCreated;
  //       descArray = s.description;
  //       descArray.forEach(d => {
  //         let bulleted = false;
  //         let text = d.children[0].text;
  //         if (d["listItem"]) {
  //           bulleted = true;
  //         }
  //         if (d.children[0].text == "") {
  //           return;
  //         } else if (bulleted && !ulCreated) {
  //           const str = `<ul><li>${text}</li>`;
  //           blurb = blurb.concat(str);
  //           ulCreated = true;
  //         } else if(bulleted && ulCreated) {
  //           const str = `<li>${text}</li>`
  //           blurb = blurb.concat(str)
  //         } else if (!bulleted && ulCreated) {
  //           blurb = blurb.concat(`</ul><p>${text}</p>`);
  //         } else if (!bulleted && !ulCreated) {
  //           blurb = blurb.concat(`<p>${text}</p>`);
  //         }
  //       });
  //       let strLength = blurb.length
  //       const lastTag = blurb.substring(strLength - 5) //if the last tag was </li>
  //       if(lastTag == "</li>"){
  //           blurb = blurb.concat("</ul>") //adds </ul>
  //       }
  //       s["compiledDesc"] = blurb;
  //     });
  //     this.setState({ services: services });
  //   });
  // };

  // componentDidMount() {
  //   this.getServices();
  // }

  render() {
    const services = this.state.services
    return (
      <section className={styles.containerServices}>
        {services.map((s, index) => {
          const ref = s.name.split(' ')
          const refId = ref.join('').toLowerCase() + index
          const src = s.photo;
          return (
            <div className={styles.flexWrapperServices} key={refId}>
              <div id={styles.imageDivServices}>
                <img src={src} alt="" className={styles.imgServices} />
              </div>
              <div id={styles.wordsDivServices}>
                <h3 style={{ marginTop: '0' }}>{s.name}</h3>
                {s.subtitle != '' ? <h5>{s.subtitle}</h5> : null}
                <span>{ReactHtmlParser(s.description)}</span>
              </div>
            </div>
          );
        })}
        <Stripe />
      </section>
    );
  }
}

export default Services;
