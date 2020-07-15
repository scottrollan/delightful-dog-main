import React, { Component } from 'react';
import { fetchTrainingCourses } from '../api/client';
import { compileRichText, compiledParagraph } from '../api/compileRichText';
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
    let courses = [];
    let courseDesc = ``;

    courses = await fetchTrainingCourses;
    courses.forEach((course) => {
      courses = [...courses, course];
      const desc = course.description;
      desc.forEach((paragraph) => {
        compileRichText(paragraph);
        courseDesc = courseDesc.concat(compiledParagraph);
      }); // end paragraph forEach
      course['compiledDesc'] = courseDesc;
      courseDesc = '';

      this.setState({
        courses,
      });
    }); //end trainer.map(person =>
  };
  componentDidMount() {
    this.getCourses();
  }

  render() {
    const src1 =
      'https://cdn.sanity.io/images/iln0s9zc/production/117a1adf878ad66f83abc8ac4d9b0afddbd29a32-3234x1796.jpg';

    const courses = [...this.state.courses];
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
