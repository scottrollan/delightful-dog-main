import React, { Component } from 'react';
import { fetchGuestTrainers } from '../api/client';
import { compileRichText, compiledParagraph } from '../api/compileRichText';
import ReactHtmlParser from 'react-html-parser';
import src2 from '../assets/pekingese.jpg';
import $ from 'jquery';
import DogDivider from '../components/DogDivider';
import styles from './Trainers.module.css';

class GuestTrainers extends Component {
  state = {
    trainers: [],
  };

  getTrainers = async () => {
    let trainers = [];
    let bioStr = ``;

    const trainer = await fetchGuestTrainers;
    trainer.forEach(async (person) => {
      const rawRef = person.image.asset._ref;
      const refArray = rawRef.split('-');
      const src = `https://cdn.sanity.io/images/iln0s9zc/production/${refArray[1]}-${refArray[2]}.${refArray[3]}`;
      person['src'] = src;
      trainers = [...trainers, person]; //an array of trainers (person)s
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
    $(`#readMore${el}`).removeAttr('style');
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
        scrollTop: $(`#image${el}`).offset().top,
      },
      500
    );
  };

  render() {
    const trainers = this.state.trainers;
    return (
      <section>
        {trainers.map((t, index) => {
          const ref = t.name.split(' ');
          const refId = ref.join('').toLowerCase() + index;
          const src = t.src;
          const compiledBio = ReactHtmlParser(t.compiledBio);
          let words = '';
          const bioText = [...compiledBio];
          bioText.forEach((w) => {
            if (w.props.children.length === 0) {
              words = words.concat(' ');
            } else if (w.props.children.length > 1) {
              w.props.children.forEach((subW) => {
                words = words.concat(' ', subW.props.children[0]);
              });
            } else {
              words = words.concat(' ', w.props.children[0]);
            }
          });
          const wordCount = words.split(' ').length;
          return (
            <div key={refId}>
              <div
                className={index % 2 === 0 ? styles.picLeft : styles.picRight}
              >
                <img
                  src={src}
                  alt=""
                  className={styles.pic}
                  id={`image${refId}`}
                />
                <div
                  id={refId}
                  className={`${styles.words} ${styles.condensed}`}
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
                  <div>
                    <div
                      id={`mask${refId}`}
                      className={styles.mask}
                      style={{ display: wordCount < 200 ? 'none' : 'initial' }}
                    ></div>
                    <span id={`words${refId}`}>{compiledBio}</span>
                  </div>
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
              <DogDivider
                style={{
                  display: index === trainers.length - 1 ? 'none' : 'inherit',
                }}
              />
            </div>
          );
        })}{' '}
        <div className={styles.bottomImageHolder}>
          <img src={src2} alt="" className={styles.trainersBottomImage} />
        </div>
      </section>
    );
  }
}

export default GuestTrainers;
