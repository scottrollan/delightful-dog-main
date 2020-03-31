import React, { Component } from "react";
import styles from "./Trainers.module.css";
import ReactHtmlParser from "react-html-parser";

class GuestTrainers extends Component {
  state = {
    trainers: [
      {
        name: "Donna Elliot",
        photo: "https://cdn.sanity.io/images/iln0s9zc/production/594209c18371d6b22b14c34e49013de9d61f714b-750x422.jpg?h=800&fit=max",
        bio: `<p>Donna has been hooked on training since acquiring two sibling Border Collie puppies in 1999. Training became a new way of life with two very active herding dogs and no sheep in the backyard!</p><p>In 2003, Donna’s search for help with her high-drive Border Collies led her to the Association of Professional Dog Trainers' annual conference. From there, she enrolled in nationally known trainer Pat Miller's Intern Academy in Maryland. She completed an intensive week on the study of animal behavioral science and hands-on training with dogs from a local shelter. Upon returning home, Donna apprenticed with Michael and Elaine Louviere who specialize in positive reinforcement techniques. Donna worked with them at their facility Twelve Paws Training Academy for a year teaching obedience training to both dogs and their humans.</p><p>Donna began volunteering for PAWS Atlanta in 2005. PAWS is the largest no-kill shelter in GA. She helped bring a training program to the staff and dogs to increase adoption rates. Donna was an integral part of bringing Victoria Stilwell to help with PAWS Atlanta’s training program. Victoria Stilwell brought in Lowe's Home Improvement store which donated a $250,000 dollar renovation to the shelter! Victoria is well known for her Animal Planet television show, <em>It’s Me or the Dog.</em></p><p>Donna has appeared on Animal Planets, <em>It's Me or the Dog</em> and believes strongly in the message this show brings to people about positive training methods. This is a group of trainers hand selected by Victoria to join her in her quest to help promote positive training for dogs.</p><p>Donna’s business, “Mutts With Manners,” was formed from a desire to help the average dog owner have a well behaved life long companion. Her hope is that with the right training, dogs will stay in their first home and not be given up or euthanized for behavior problems.</p><p>In 2009/2010 Donna taught obedience classes at Dogma Dog Care in Smyrna, GA. She enjoyed teaching puppy classes, obedience and Rally classes.</p><p>In 2013 Donna completed a 13 week mentoring program with Jennifer Shyrock with Family Paws Parent Education. FPPE is the parent organization of two International Licensed programs: Dogs & Storks and Dogs & Toddlers. This program offers valuable information and support to help parents live peacefully with kids and dogs in the house.</p><p>In 2014 Donna was one of the founding trainers that helped launch Canine Cell Mates. This is a program where dogs are pulled from Fulton County Animal Shelter and taken to live with and be trained by an inmate for 8 weeks. Trainers go into the jail each day to teach the inmates to train their dogs. Once the training period is over the dogs are up for adoption and Canine Cell Mates help the dogs find their forever home.</p><p>In 2014 Donna completed Susan Friedman’s Living and Learning with Animals online course. This is an intensive 8 week course designed to help trainers in all fields of animal training. Trainers from all over the world and every aspect of animal training from zoos to aquariums enroll in this course to learn how to do a functional analysis of behavior problems. Solving behavior problems is based on the same principles regardless of the species.</p><p>Donna is a Certified Professional Dog Trainer though Association of Professional Dog Trainers. She has enjoyed teaching group classes at Fido Fido Dog Daycare and Dogma Dogcare. She continually keeps her training skills up to date by attending conferences and workshops around the country. These include workshops and seminars with World renowned behaviorist John Rogerson, Suzanne Clothier, Sue Sternburg, Ian Dunbar, Nicole Wild, Terry Ryan and more.</p><p><strong>Association of Professional Dog Trainers conference: 2003, 2008</strong></p><p><strong>Clicker Expo Conference: 2006, 2007, 2010</strong></p><p>Donna is currently working with her Border Collie Sunny in Rally Obedience. They have their Rally Novice A title.</p>`
      },
      {
        name: "Joyce Hagan",
        photo: "https://cdn.sanity.io/images/iln0s9zc/production/33d031910fa5107fbb33df0b794d770dcd5c1e6a-750x997.jpg?h=800&fit=max",
        bio: `<p>Joyce is the owner of The Dog Tutor LLC, a dog training company in Sandy Springs, Georgia, that provides Private (one-on-one) in-home training, consultation and behavior solutions.  She is also experienced at providing training in a group class settings, and the training of dogs that are being boarded in Board & Train facilities.</p><p>She has been a Certified Pet Dog Trainer (CPDT) since 2009.  This certification is provided by the Certification Council for Professional Dog Trainers (CCPDT), an independent testing organization not affiliated with or related to any association, organization or school.  The CCPDT is an international testing and certification program for professional pet dog trainers that administer rigorous testing of applicants.</p><p>Additionally the CCPDT requires that trainers be re-certified every three years. Further information can be obtained from the CCPDT <a href="https://www.ccpdt.org/">website</a>.</p><ul style={{ listStyleType: 'square'}}>Here’s a list of Joyce's current memberships/certifications:</ul><li>Member: Victoria Stilwell Positively Dog Trainer (VSPDT)</li><li>Member: Association of Pet Dog Trainers (APDT)</li><li>Member: Int'l. Association of Animal Behavior Consultants</li><li>Member: Pet Professional Guild-Force Free Trainers</li><li>Member: Red Rover-Disaster Relief</li><li>Certified by AKC as a: Canine Good Citizen Evaluator</li><li>Certified by AKC as a: S.T.A.R. Puppy Evaluator</li><li>Evaluator: Happy Tails Pet Therapy Dogs</li></ul><p>Joyce says, “Continuing education is very important in order to keep current in all aspects of dog training, behavior, and behavior modification. Therefore I participate in numerous continuing education forums and online Webinars such as group teleconferences in which other professional dog trainers discuss solutions to dog training issues and behavior problems. I keep up-to-date with the current literature by subscribing to dog-related publications, such as The Whole Dog Journal;  Chronicle of the Dog (APDT);  and Dog Star Daily (Dr. Ian Dunbar), among others. I always take advantage of educational opportunities offered through various Professional Organizations whenever possible."</p><p>Joyce uses only Positive Reinforcement training methods, such as Clicker/Marker & Lure-Reward Training techniques.</p><p>She has always been a good friend to dogs.  For example, she was a volunteer at Paws Atlanta Animal Shelter since 2001. It was while volunteering there that she realized the importance of training for dogs. She participated with PAWS Atlanta and the Humane Society of the United States (HSUS) in Mississippi to help care for the dogs left behind in the wake of Hurricane Katrina.  Becoming a Certified Dog Trainer was a natural progression for her.</p>`
      },
      {
        name: "Aly Lecznar",
        photo: "https://cdn.sanity.io/images/iln0s9zc/production/5bca0b5710741665b7474dd2bdf78533f5de1b8e-637x707.webp?h=800&fit=max",
        bio: `<p>Aly received her Applied Biology degree from Georgia Tech, and worked in collaboration with Zoo Atlanta for her senior thesis on animal cognition. While at Tech, Aly received her Honorary Member status with the Atlanta Police Department for her work training horses at the APD Mounted Patrol Department.  After years of working with horses, Aly turned her efforts towards her first love, dogs.  She attended the Karen Pryor Academy for Animal Behavior and Training (KPA) where she completed the Dog Training Professionals Program and became a Certified Training Partner.  After KPA, Aly realized that teaching behaviors is most effective when paired with a wellness program. She continued her education in Colorado and became a FitPawsR Master Trainer and is about to finish her Certification in Canine Fitness from the University of Tennessee. Aly currently owns and operates her in-home, private training company, The Animal Scientist, coordinates the Mentor Program for Victoria Stilwell Academy, and manages the Victoria Stilwell Positively Dog Trainer (VSPDT) licensing program. In her spare time, Aly enjoys researching for her citizen-scientist canine cognition study, blogging, training new species, and helping folks learn how to recognize signals from their dogs.
        </p>`
      }
    ]
  };

  // getTrainers = () => {
  //   let trainers = [];
  //   let bioStr = ``;
  //   const sanityClient = require("@sanity/client");
  //   const client = sanityClient({
  //     projectId: "iln0s9zc",
  //     dataset: "production",
  //     token: "",
  //     //   "skpCGRaJUsHt3ggfZKfLOzBVXpgL6s8KqLXbOk0GNSCQvISZZc13Gkl7ulh8N506utsY2xydYjL1qN2H7nEy9DbkNnCmtFW9axNXveeLPNOfHj1W7MFFXk26X3g5S5iMHsrnfPHrgjRrdMjGNSc6Q5c796GILqWcqn5CDuvAMhF2YRVoxYXT", // or leave blank to be anonymous user
  //     useCdn: false // `false` if you want to ensure fresh data
  //   });
  //   client
  //     .fetch('*[category == "guest trainer"] | order(displayOrder asc)')
  //     .then(trainer => {
  //       trainer.map(person => {
  //         const rawRef = person.image.asset._ref;
  //         const refArray = rawRef.split("-");
  //         const src = `https://cdn.sanity.io/images/iln0s9zc/production/${refArray[1]}-${refArray[2]}.${refArray[3]}?h=200&fit=max`;
  //         person["src"] = src;
  //         trainers.push(person);
  //         const bio = person.bio;
  //         bio.forEach(paragraph => {
  //           let compiledParagraph = "";
  //           let hrefArray = [];
  //           let paragraphSegment = "";

  //           if (paragraph.markDefs.length > 0) {
  //             // get hrefs for links
  //             paragraph.markDefs.forEach(hrefObj => {
  //               const href_key = {
  //                 _key: hrefObj._key,
  //                 href: hrefObj.href
  //               };
  //               hrefArray.push(href_key); //creates an array of all the hrefs in a paragraph
  //             });
  //           } //end href for links
  //           const paragraphSegments = paragraph.children;
  //           paragraphSegments.forEach(segment => {
  //             let element = segment._type;
  //             const text = segment.text;
  //             const marks = segment.marks;
  //             if (marks.length > 0) {
  //               compiledParagraph = compiledParagraph.concat("<p>");
  //               const mark = marks[0]; //'underline', 'em', etc.
  //               const richText = [
  //                 "em",
  //                 "strong",
  //                 "underline",
  //                 "strike-through",
  //                 "code"
  //               ];

  //               if (richText.includes(mark)) {
  //                 let openTag = "";
  //                 let closeTag = "";
  //                 switch (mark) {
  //                   case "em":
  //                     openTag = "<em>";
  //                     closeTag = "</em>";
  //                     break;
  //                   case "strong":
  //                     openTag = "<strong>";
  //                     closeTag = "</strong>";
  //                     break;
  //                   case "strike-through":
  //                     openTag = "<strike>";
  //                     closeTag = "</strike>";
  //                     break;
  //                   case "underline":
  //                     openTag = "<u>";
  //                     closeTag = "</u>";
  //                     break;
  //                   case "code":
  //                     openTag = "<code>";
  //                     closeTag = "</code>";
  //                 }
  //                 paragraphSegment = paragraphSegment.concat(
  //                   `<${element}>${openTag}${text}${closeTag}</${element}>`
  //                 );
  //               } else {
  //                 hrefArray.forEach(h => {
  //                   if (h._key == mark) {
  //                     //if marks[0] is something like '3ae70bbe4sa' vs 'em' or 'strong'
  //                     const assignedHref = h.href;
  //                     paragraphSegment = paragraphSegment.concat(
  //                       `<${element}><a href=${assignedHref}>${text}</a></${element}>`
  //                     );
  //                   }
  //                 });
  //               }
  //               compiledParagraph = compiledParagraph.concat("</p>");
  //             } else if (paragraph["listItem"]) {
  //               //if marks.length == 0
  //               const openTag = "<ul><li>";
  //               const closeTag = "</li></ul>";
  //               paragraphSegment = paragraphSegment.concat(
  //                 `${openTag}${text}${closeTag}`
  //               );
  //             } else {
  //               paragraphSegment = paragraphSegment.concat(
  //                 `<${element}>${text}</${element}>`
  //               );
  //             }
  //           }); // end of forEach(segment
  //           compiledParagraph = compiledParagraph.concat(paragraphSegment);
  //           bioStr = bioStr.concat(compiledParagraph);
  //           this.setState({
  //             hasLink: false
  //           });
  //         }); // end paragraph mapping
  //         person["compiledBio"] = bioStr;
  //         bioStr = "";

  //         this.setState({
  //           trainers: trainers
  //         });
  //       }); //end trainer.map(person =>
  //     }); //end of .then
  // };

  // componentDidMount() {
  //   this.getTrainers();
  // }

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

  render() {
    const trainers = this.state.trainers;
    return (
      <section>
        {trainers.map((t, index) => {
          const ref = t.name.split(' ');
          const refId = ref.join('').toLowerCase() + index;
          const src = t.photo;
          return (
            <div
              key={refId}
              className={index % 2 === 0 ? styles.picLeft : styles.picRight}
            >
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
                style={{ display: "none" }}
              >
                See Less
              </button>
            </div>
          );
        })}{" "}
      </section>
    );
  }
}

export default GuestTrainers;
