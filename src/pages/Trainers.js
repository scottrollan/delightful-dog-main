import React, { Component } from 'react';
import { fetchTrainers } from '../api/client';
import { compileRichText, compiledParagraph } from '../api/compileRichText';
import ReactHtmlParser from 'react-html-parser';
import src2 from '../assets/whiteFluffy.jpg';
import $ from 'jquery';
import DogDivider from '../components/DogDivider';
import styles from './Trainers.module.css';

class Trainers extends Component {
  state = {
    trainers: [],
  };

  getTrainers = async () => {
    let trainers = [];
    let bioStr = ``;

    const trainer = await fetchTrainers;
    trainer.forEach((person) => {
      const rawRef = person.image.asset._ref;
      const refArray = rawRef.split('-');
      const src = `https://cdn.sanity.io/images/iln0s9zc/production/${refArray[1]}-${refArray[2]}.${refArray[3]}`;
      person['src'] = src;
      trainers = [...trainers, person];
      const bio = person.bio;
      bio.forEach((paragraph) => {
        compileRichText(paragraph);
        bioStr = bioStr.concat(compiledParagraph);
      }); // end paragraph forEach
      person['compiledBio'] = bioStr;
      bioStr = '';

      this.setState({
        trainers,
      });
    }); //end trainer.map(person =>
  };

  componentDidMount() {
    this.getTrainers();
  }

  readMore = (event) => {
    const el = event.target.value;
    $(`#${el}`).addClass(styles.expanded);
    $(`#${el}`).removeClass(styles.condensed);
    $(`#mask${el}`).addClass(styles.visibilityHidden);
    $(`#readMore${el}`).addClass(styles.displayNo);
    $(`#seeLess${el}`).addClass(styles.displayYes);
  };
  seeLess = (event) => {
    const el = event.target.value;
    $(`#${el}`).removeClass(styles.expanded);
    $(`#${el}`).addClass(styles.condensed);
    $(`#mask${el}`).removeClass(styles.visibilityHidden);
    $(`#readMore${el}`).removeClass(styles.displayNo);
    $(`#seeLess${el}`).removeClass(styles.displayYes);
    $('html, body').animate(
      {
        scrollTop: $(`#${el}`).offset().top,
      },
      500
    );
  };

  render() {
    const trainers = this.state.trainers;
    return (
      <section style={{ width: '100%' }}>
        {trainers.map((t, index) => {
          const ref = t.name.split(' ');
          const refId = ref.join('').toLowerCase() + index;
          const src = t.src;
          const compiledBio = ReactHtmlParser(t.compiledBio);
          const bioText = [...compiledBio];
          let words = '';
          bioText.forEach((w) => {
            if (w.props.children.length === 0) {
              words = words.concat(' ');
            } else {
              words = words.concat(w.props.children[0]);
            }
          });
          const wordCount = words.split(' ').length;
          return (
            <div key={refId}>
              <div
                className={index % 2 === 0 ? styles.picLeft : styles.picRight}
              >
                <img src={src} alt="" className={styles.pic} />
                <div>
                  <div
                    id={refId}
                    className={[`${styles.words} ${styles.condensed}`]}
                    style={
                      wordCount < 200
                        ? {
                            minHeight: 'var(--pic-height)',
                            height: 'auto',
                            overflowY: 'visible',
                            maxHeight: 'none',
                            display: 'contents',
                          }
                        : null
                    }
                  >
                    <h2 className={styles.name}>{t.name}</h2>
                    <div
                      id={`mask${refId}`}
                      className={styles.mask}
                      style={{ display: wordCount < 200 ? 'none' : 'initial' }}
                    ></div>
                    <span id={`words${refId}`}>{compiledBio}</span>
                  </div>
                  <button
                    id={`readMore${refId}`}
                    value={refId}
                    onClick={(event) => this.readMore(event)}
                    className={styles.button}
                    style={{ display: wordCount < 200 ? 'none' : 'initial' }}
                  >
                    Read More
                  </button>
                  <button
                    id={`seeLess${refId}`}
                    value={refId}
                    onClick={(event) => this.seeLess(event)}
                    className={styles.button}
                    style={{ display: 'none' }}
                  >
                    See Less
                  </button>
                </div>
              </div>
              <DogDivider
                style={{
                  display: index === trainers.length - 1 ? 'none' : 'inherit',
                }}
              />
            </div>
          );
        })}

        <div className={styles.bottomImageHolder}>
          <img src={src2} alt="" className={styles.trainersBottomImage} />
        </div>
      </section>
    );
  }
}

export default Trainers;
