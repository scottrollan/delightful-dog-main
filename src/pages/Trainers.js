import React, { Component } from 'react';
import styles from './Trainers.module.css';
import ReactHtmlParser from 'react-html-parser';
import src2 from '../assets/whiteFluffy.jpg';
import $ from 'jquery';
import DogDivider from '../components/DogDivider';

class Trainers extends Component {
  state = {
    trainers: [],
  };

  getTrainers = async () => {
    let trainers = [];
    let bioStr = ``;
    const sanityClient = require('@sanity/client');
    const client = sanityClient({
      projectId: 'iln0s9zc',
      dataset: 'production',
      token: '',
      useCdn: false,
    });
    const trainer = await client.fetch(
      '*[category == "permanent trainer"] | order(displayOrder asc)'
    );
    // .then(trainer => {
    trainer.forEach((person) => {
      const rawRef = person.image.asset._ref;
      const refArray = rawRef.split('-');
      const src = `https://cdn.sanity.io/images/iln0s9zc/production/${refArray[1]}-${refArray[2]}.${refArray[3]}`;
      person['src'] = src;
      trainers.push(person);
      const bio = person.bio;
      bio.forEach((paragraph) => {
        //for each item in bio array
        let compiledParagraph = '';
        let hrefArray = [];
        let paragraphSegment = '';
        //listItem is only present if the segment is "<li>" type,
        //if no listItem and children.length equal to 1, then entire
        //segment is simple paragraph text with no marks (em, u,..)
        if (!('listItem' in paragraph) && paragraph.markDefs.length === 0) {
          compiledParagraph = `<p>${paragraph.children[0].text}</p>`;
        } else {
          if (paragraph.markDefs.length > 0) {
            // markDefs only contains an item if there is a 'link'
            paragraph.markDefs.forEach((hrefObj) => {
              const href_key = {
                _key: hrefObj._key,
                href: hrefObj.href,
              };
              hrefArray.push(href_key); //creates an array of all the hrefs  with reference #s for <a> tags in a paragraph
            });
          }
          const paragraphSegments = paragraph.children;
          //for each segment of paragraphs containing any extra tags
          //like <u> <em> <i>, or links, or listItems
          paragraphSegments.forEach((segment) => {
            let text = segment.text;
            const marks = segment.marks;

            //if there is a <em>, <u> etc.
            if (marks.length > 0) {
              const mark = marks[0];
              const richText = [
                'em',
                'strong',
                'underline',
                'strike-through',
                'code',
              ];

              if (richText.includes(mark)) {
                let innerText = text;
                marks.forEach((t) => {
                  let tag = '';
                  switch (t) {
                    case 'em':
                      tag = 'em';
                      break;
                    case 'strong':
                      tag = 'strong';
                      break;
                    case 'strike-through':
                      tag = 'strike';
                      break;
                    case 'underline':
                      tag = 'u';
                      break;
                    case 'code':
                      tag = 'code';
                      break;
                    default:
                      break;
                  }

                  innerText = `<${tag}>${innerText}</${tag}>`;
                });
                paragraphSegment = paragraphSegment.concat(innerText);
              } else {
                hrefArray.forEach((h) => {
                  if (h._key === mark) {
                    //if marks[0] is something like '3ae70bbe4sa' vs 'em' or 'strong'
                    const assignedHref = h.href;
                    paragraphSegment = paragraphSegment.concat(
                      `<a href=${assignedHref}>${text}</a>`
                    );
                  }
                });
              }
            } else if (paragraph['listItem']) {
              paragraphSegment = paragraphSegment.concat(
                `<p style="margin-top: 1rem; font-weight: 500;">&#9642&nbsp&nbsp&nbsp${text}</p>`
              );
            } else {
              paragraphSegment = paragraphSegment.concat(
                `<span>${text}</span>`
              );
            }
          });
        } // end of forEach(segment
        compiledParagraph = compiledParagraph.concat(paragraphSegment);
        bioStr = bioStr.concat(compiledParagraph);
        this.setState({
          hasLink: false,
        });
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
      <section>
        {trainers.map((t, index) => {
          const ref = t.name.split(' ');
          const refId = ref.join('').toLowerCase() + index;
          const src = t.src;
          const compiledBio = ReactHtmlParser(t.compiledBio);
          const elText = [...compiledBio];
          let words = '';
          elText.forEach((w) => {
            words = words.concat(w.props.children[0]);
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
                            maxHeight: '1000px',
                          }
                        : null
                    }
                  >
                    <h2 className={styles.h2}>{t.name}</h2>
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