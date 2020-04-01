import React, { Component } from "react";
import styles from "./Trainers.module.css";
import ReactHtmlParser from "react-html-parser";

class Trainers extends Component {
  state = {
    trainers: [
      {
        name: 'Melony',
        photo: "https://cdn.sanity.io/images/iln0s9zc/production/a6eeb2925cea14fdba48fe5f60994ce53afcd71f-600x600.jpg",
        bio: "<p>Melony has been a professional dog trainer and training instructor for over 8 years. Using proven positive training and behavior-modification techniques, she works to facilitate a happy, healthy relationship between dogs and their human families.</p><ul style={{ listStyletype: 'square' }}><strong>Certifications, licenses, and memberships include:</strong></ul><li>CPDT-KA (Certified Professional Dog Trainer-Knowledge Assessed)</li><li>Certified Canine Water Therapist</li><li>AKC Canine Good Citizen Evaluator</li><li>S.T.A.R. Puppy Evaluator</li><li>Red Cross Certified in Dog and Cat CPR and First Aid</li><li>Certified Massage Therapist</li><li>Licensed VSPDT (Victoria Stilwell Positively Dog Trainer)</li><li>Licensed Presenter: Dogs and Storks, Dogs and Baby Connection, and Dogs and Toddlers</li><li>Member, Pet Professional Guild</li><li>Member, The Association of Professional Dog Trainers</li><li>Member, Certification Council for Professional Dog Trainers</li></ul><p></p>She shares her home with her husband, David, and their 2 Cavalier King Charles Spaniels, an Old English Mastiff, an Australian shepherd and 2 wonderful cats.</p>"
      },
      {
        name: "Biya",
        photo: "https://cdn.sanity.io/images/iln0s9zc/production/d2a890d2f6c0931fa45eb03ca2308813205069e1-359x394.jpg",
        bio: '<p>Biya was raised overseas & worked at a private zoo as a teenager. She is a licensed vet technician with knowledge of pet First Aid & pet CPR. She is actively involved with local pet rescues, Ahimsa House & does other volunteer work. She has her own personal "zoo" at her home. She was as a General Manager at a large daycare facility- a position she held for 9 years. Before partnering with Delightful Dog, she owned & operated PAWtopia Professional Pet Sitting.</p>'

      }
    ]
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
          const src = t.photo
          return (
            <div key={refId} className={index % 2 === 0 ? styles.picLeft : styles.picRight}>
              <img src={src} alt="" className={styles.pic} />
              <div id={refId} className={`${styles.words} ${styles.condensed}`}>
                <h2 className={styles.h2}>{t.name}</h2>
                <div id={`mask${refId}`} className={styles.mask}></div>
                <span>{ReactHtmlParser(t.bio)}</span>
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
      </section>
    );
  }
}

export default Trainers;
