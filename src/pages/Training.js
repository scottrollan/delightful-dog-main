import React, { Component } from 'react';
import { fetchTrainingCourses } from '../api/client';
import ReactHtmlParser from 'react-html-parser';
import styles from './Training.module.css';
import Stripe from '../components/Stripe';
import DogDivider from '../components/DogDivider';
import src2 from '../assets/grad.jpg';

class Training extends Component {
  state = {
    courses: [],
  };

  getCourses = async () => {
    let coursesArray = [];
    let courses = [];

    const service = await fetchTrainingCourses;
    service.forEach((course) => {
      courses = [...courses, course];
      this.setState({
        courses,
      });
    }); //end service.forEach()
    courses.forEach((c) => {
      let blurb = ``;
      let ulCreated = this.state.ulCreated;
      coursesArray = c.description;
      coursesArray.forEach((t) => {
        let bulleted = false;
        let text = t.children[0].text;
        if (t['listItem']) {
          bulleted = true;
        }
        if (t.children[0].text === '') {
          return;
        } else if (bulleted && !ulCreated) {
          const str = `<ul><li>${text}</li>`;
          blurb = blurb.concat(str);
          ulCreated = true;
        } else if (bulleted && ulCreated) {
          const str = `<li>${text}</li>`;
          blurb = blurb.concat(str);
        } else if (!bulleted && ulCreated) {
          blurb = blurb.concat(`</ul><p>${text}</p>`);
        } else if (!bulleted && !ulCreated) {
          blurb = blurb.concat(`<p>${text}</p>`);
        }
      });
      let strLength = blurb.length;
      const lastTag = blurb.substring(strLength - 5); //if the last tag was </li>
      if (lastTag === '</li>') {
        blurb = blurb.concat('</ul>'); //adds </ul>
      }
      c['compiledDesc'] = blurb;
    });
    this.setState({ courses: courses });
    // });
  };

  componentDidMount() {
    this.getCourses();
  }

  render() {
    const src1 =
      'https://cdn.sanity.io/images/iln0s9zc/production/117a1adf878ad66f83abc8ac4d9b0afddbd29a32-3234x1796.jpg';

    const courses = this.state.courses;
    return (
      <section className={styles.container}>
        <div className={styles.topImageHolder}>
          <img src={src1} alt="" className={styles.topImage} />
        </div>
        <Stripe />
        <div className={styles.mapped}>
          {courses.map((s, index) => (
            <div
              className={styles.course}
              key={index}
              style={{
                marginBottom: index === courses.length - 1 ? '40px' : '0.5em',
              }}
            >
              <h3 style={{ marginTop: '0' }}>{s.name}</h3>
              <h5>{s.subtitle}</h5>

              <span>{ReactHtmlParser(s.compiledDesc)}</span>
              <div
                style={{
                  display: index === courses.length - 1 ? 'none' : 'inherit',
                }}
              >
                <DogDivider />
              </div>
            </div>
          ))}
        </div>
        <div className={styles.bottomImageHolder}>
          <img src={src2} className={styles.bottomImage} alt="" />
        </div>
        <Stripe />
      </section>
    );
  }
}

export default Training;
