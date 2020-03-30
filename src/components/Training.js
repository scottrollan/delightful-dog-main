import React, { Component } from "react";
import ReactHtmlParser from "react-html-parser";
import styles from "./Training.module.css";

class Training extends Component {
  state = {
    courses: [
      {
        name: "It's All About Puppies!",
        subtitle: "",
        description: `<p><a href="/ContactUs" >Contact us</a> for more information.</p>`
      },
      {
        name: "Manners 1",
        subtitle: "5 weeks/ one hour a week/ $175 - $250",
        description: `<p>For dogs over 4 months old, in good health and current on all vaccines. The curriculum focuses on the foundation work for a well-mannered dog: pay attention, sit, leave it, down, stay, emergency recall, and beginning to walk nicely on a leash as well as communication, how dogs learn, and polite greetings.</p>`
      },
      {
        name: "Terrific Teens",
        subtitle: "5 weeks/ one hour a week/ $175 - $250",
        description: `<p>For dogs 6 to 24 months old, in good health and current on all vaccines.</p><p>Dogs must have completed Manners 1.</p><p>This is applied manners for young dogs and the focus is on how to help your dog work with you in spite of distractions and exciting events around them. Adolescence is a trying time for dogs and their families. This class helps you not only survive but enjoy your dog’s teenage period.</p>`
      },
      {
        name: "Rally Obedience 1",
        subtitle: "5 weeks/ one hour a week/ $250",
        description: `<p>For dogs that have completed Manners 1, in good health and current on all vaccines. This teaches the basics of this fun and exciting team sport for dogs and their handlers. Dogs and handlers learn some of the more advanced cues needed to work toward navigating a course with numbered signs and different obedience activities at each station.</p>`
      },
      {
        name: "Canine Good Citizen",
        subtitle: "5 weeks/ one hour a week/ $200",
        description: `For dogs who have completed Manners 1 in good health and current on all vaccines. The focus is on preparing for the CGC test which will be conducted on class 5.`
      }
    ]
  };

  // getCourses = () => {
  //   let coursesArray = [];
  //   let courses = [];
  //   const sanityClient = require("@sanity/client");
  //   const client = sanityClient({
  //     projectId: "iln0s9zc",
  //     dataset: "production",
  //     token: "",
  //     //   "skpCGRaJUsHt3ggfZKfLOzBVXpgL6s8KqLXbOk0GNSCQvISZZc13Gkl7ulh8N506utsY2xydYjL1qN2H7nEy9DbkNnCmtFW9axNXveeLPNOfHj1W7MFFXk26X3g5S5iMHsrnfPHrgjRrdMjGNSc6Q5c796GILqWcqn5CDuvAMhF2YRVoxYXT", // or leave blank to be anonymous user
  //     useCdn: false // `false` if you want to ensure fresh data
  //   });
  //   client.fetch('*[_type == "training"] | order(displayOrder asc)').then(result => {
  //     result.map(course => {
  //       courses.push(course);
  //       this.setState({
  //         courses: courses
  //       });
  //     }); //end service.map()
  //     courses.forEach(c => {
  //       let blurb = ``;
  //       let ulCreated = this.state.ulCreated;
  //       coursesArray = c.description;
  //       coursesArray.forEach(t => {
  //         let bulleted = false;
  //         let text = t.children[0].text;
  //         if (t["listItem"]) {
  //           bulleted = true;
  //         }
  //         if (t.children[0].text == "") {
  //           return;
  //         } else if (bulleted && !ulCreated) {
  //           const str = `<ul><li>${text}</li>`;
  //           blurb = blurb.concat(str);
  //           ulCreated = true;
  //         } else if (bulleted && ulCreated) {
  //           const str = `<li>${text}</li>`;
  //           blurb = blurb.concat(str);
  //         } else if (!bulleted && ulCreated) {
  //           blurb = blurb.concat(`</ul><p>${text}</p>`);
  //         } else if (!bulleted && !ulCreated) {
  //           blurb = blurb.concat(`<p>${text}</p>`);
  //         }
  //       });
  //       let strLength = blurb.length;
  //       const lastTag = blurb.substring(strLength - 5); //if the last tag was </li>
  //       if (lastTag == "</li>") {
  //         blurb = blurb.concat("</ul>"); //adds </ul>
  //       }
  //       c["compiledDesc"] = blurb;
  //     });
  //     this.setState({ courses: courses });
  //   });
  // };

  // componentDidMount() {
  //   this.getCourses();
  // }

  render() {
    const src1 =
      "https://cdn.sanity.io/images/xavhj4r4/production/f48231c126126c00341705ab78107f17ac72edac-840x1040.jpg?h=250&fit=max";
    const src2 =
      "https://cdn.sanity.io/images/xavhj4r4/production/db860cf20e504803b9034a6521f5d261b0f72ed1-480x768.webp?h=250&fit=max";
      const courses = this.state.courses
    return (
      <section className={styles.container}>
        <img src={src1} alt="" className={styles.topImage} />
        <div className={styles.flexWrapper}>
          {courses.map((s, index) => (
            <div key={index}>
              <h3 style={{ marginTop: "0" }}>{s.name}</h3>
              <h5>{s.subtitle}</h5>
              <span>{ReactHtmlParser(s.description)}</span>
            </div>
          ))}
        </div>
        <img src={src2} className={styles.bottomImage} alt="" />
      </section>
    );
  }
}

export default Training;
