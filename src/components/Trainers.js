import React, { Component } from "react";
import styles from "./Trainers.module.css";
import ReactHtmlParser from "react-html-parser";
import src2 from '../assets/whiteFluffy.jpg'


class Trainers extends Component {
  state = {
    trainers: []
  };

  getTrainers = () => {
    let trainers = [];
    let bioStr = ``;
    const sanityClient = require("@sanity/client");
    const client = sanityClient({
      projectId: "iln0s9zc",
      dataset: "production",
      token: "",
      useCdn: false 
    });
  client
  .fetch('*[category == "permanent trainer"] | order(displayOrder asc)')
  .then(trainer => {
    trainer.map(person => {
      const rawRef = person.image.asset._ref;
      const refArray = rawRef.split("-");
      const src = `https://cdn.sanity.io/images/iln0s9zc/production/${refArray[1]}-${refArray[2]}.${refArray[3]}`;
      person["src"] = src;
      trainers.push(person);
      const bio = person.bio;
      bio.forEach(paragraph => {
        let compiledParagraph = "";
        let hrefArray = [];
        let paragraphSegment = "";
        if (!("listItem" in paragraph) && paragraph.children.length === 1) {
          compiledParagraph = `<p>${paragraph.children[0].text}</p>`;
        } else {
          if (paragraph.markDefs.length > 0) {
            // get hrefs for links
            paragraph.markDefs.forEach(hrefObj => {
              const href_key = {
                _key: hrefObj._key,
                href: hrefObj.href
              };
              hrefArray.push(href_key); //creates an array of all the hrefs in a paragraph
            });
          } //end href for links
          const paragraphSegments = paragraph.children;

          paragraphSegments.forEach(segment => {
            let element = segment._type;
            const text = segment.text;
            const marks = segment.marks;
            if (marks.length > 0) {
              compiledParagraph = compiledParagraph.concat("<p>");
              const mark = marks[0]; //'underline', 'em', etc.
              const richText = [
                "em",
                "strong",
                "underline",
                "strike-through",
                "code"
              ];

              if (richText.includes(mark)) {
                let openTag = "";
                let closeTag = "";
                switch (mark) {
                  case "em":
                    openTag = "<em>";
                    closeTag = "</em>";
                    break;
                  case "strong":
                    openTag = "<strong>";
                    closeTag = "</strong>";
                    break;
                  case "strike-through":
                    openTag = "<strike>";
                    closeTag = "</strike>";
                    break;
                  case "underline":
                    openTag = "<u>";
                    closeTag = "</u>";
                    break;
                  case "code":
                    openTag = "<code>";
                    closeTag = "</code>";
                }
                paragraphSegment = paragraphSegment.concat(
                  `<${element}>${openTag}${text}${closeTag}</${element}>`
                );
              } else {
                hrefArray.forEach(h => {
                  if (h._key == mark) {
                    //if marks[0] is something like '3ae70bbe4sa' vs 'em' or 'strong'
                    const assignedHref = h.href;
                    paragraphSegment = paragraphSegment.concat(
                      `<${element}><a href=${assignedHref}>${text}</a></${element}>`
                    );
                  }
                });
              }
              compiledParagraph = compiledParagraph.concat("</p>");
            } else if (paragraph["listItem"]) {
              //if marks.length == 0
              const openTag =
                "<ul style='list-style-type: square; list-style-position: inside;'><li>";
              const closeTag = "</li></ul>";
              paragraphSegment = paragraphSegment.concat(
                `${openTag}${text}${closeTag}`
              );
            } else {
              paragraphSegment = paragraphSegment.concat(
                `<${element}>${text}</${element}>`
              );
            }
          });
        } // end of forEach(segment
        compiledParagraph = compiledParagraph.concat(paragraphSegment);
        bioStr = bioStr.concat(compiledParagraph);
        this.setState({
          hasLink: false
        });
      }); // end paragraph mapping
      person["compiledBio"] = bioStr;
      bioStr = "";

      this.setState({
        trainers: trainers
      });
    }); //end trainer.map(person =>
  }); //end of .then
};

componentDidMount() {
this.getTrainers();
}

readMore = event => {
const el = event.target.value;
document.getElementById(el).classList.add(styles.expanded);
document.getElementById(el).classList.remove(styles.condensed);
document.getElementById(`mask${el}`).classList.add(styles.visibilityHidden);
document.getElementById(`readMore${el}`).classList.add(styles.displayNo);
document.getElementById(`seeLess${el}`).classList.add(styles.displayYes);
};
seeLess = event => {
const el = event.target.value;
document.getElementById(el).classList.remove(styles.expanded);
document.getElementById(el).classList.add(styles.condensed);
document
  .getElementById(`mask${el}`)
  .classList.remove(styles.visibilityHidden);
document.getElementById(`readMore${el}`).classList.remove(styles.displayNo);
document.getElementById(`seeLess${el}`).classList.remove(styles.displayYes);
};



  readMore = event => {
    const el = event.target.value;
    document.getElementById(el).classList.add(styles.expanded);
    document.getElementById(el).classList.remove(styles.condensed);
    document.getElementById(`mask${el}`).classList.add(styles.visibilityHidden);
    document.getElementById(`readMore${el}`).classList.add(styles.displayNo);
    document.getElementById(`seeLess${el}`).classList.add(styles.displayYes);
  };
  seeLess = event => {
    const el = event.target.value;
    document.getElementById(el).classList.remove(styles.expanded);
    document.getElementById(el).classList.add(styles.condensed);
    document.getElementById(`mask${el}`).classList.remove(styles.visibilityHidden);
    document.getElementById(`readMore${el}`).classList.remove(styles.displayNo);
    document.getElementById(`seeLess${el}`).classList.remove(styles.displayYes);
  };

  render() {
    const trainers = this.state.trainers;
    return (
      <section>
        {trainers.map((t, index) => {
          const refId = t.name.toLowerCase() + index;
          const src = t.src
          const bio = t.compiledBio
          const name = t.name
          return (
            <div key={refId} className={index % 2 === 0 ? styles.picLeft : styles.picRight}>
              <img src={src} alt="" className={styles.pic} />
              <div id={refId} className={`${styles.words} ${styles.condensed}`}>
                <h2 className={styles.h2}>{name}</h2>
                <div id={`mask${refId}`} className={styles.mask}></div>
                <span>{ReactHtmlParser(bio)}</span>
              </div>
              <button
                id={`readMore${refId}`}
                value={refId}
                onClick={event => this.readMore(event)}
                className={index % 2 === 0 ? styles.btnRight : styles.btnLeft}
              >
                Read More
              </button>
              <button
                id={`seeLess${refId}`}
                value={refId}
                onClick={event => this.seeLess(event)}
                className={index % 2 === 0 ? styles.btnRight : styles.btnLeft}
                style={{ display: 'none' }}
              >
                See Less
              </button>
            </div>
          );
        })}
        <div className={styles.bottomImageHolder}>
          <img src={src2} atl='' className={styles.trainersBottomImage} />
        </div>
      </section>
    );
  }
}

export default Trainers;
