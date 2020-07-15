let compiledParagraph = '';

const compileRichText = (paragraph) => {
  //for each item in bio array
  compiledParagraph = '';
  const paragraphSegments = paragraph.children;
  let hrefArray = [];
  let paragraphSegment = '';

  if (
    !('listItem' in paragraph) && //if it's not a list item
    paragraph.markDefs.length === 0 && //and there's no link inside
    paragraph.children.length === 1 && //and there's no rich text (b, i, u)
    paragraph.children[0].marks.length === 0 //and there is no rich text
  ) {
    compiledParagraph = `<p style="margin-top: 1rem;">${paragraph.children[0].text}</p>`;
    return compiledParagraph;
  } else {
    if (paragraph.markDefs.length > 0) {
      // if there is a 'link'

      paragraph.markDefs.forEach((hrefObj) => {
        const href_key = {
          _key: hrefObj._key,
          href: hrefObj.href,
        };
        hrefArray.push(href_key); //creates an array of all the hrefs  with reference #s for <a> tags in a paragraph
      });
    }
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

            innerText = `<${tag} style="margin-top: 1rem;">${innerText}</${tag}>`;
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
      }
      if (paragraph['listItem']) {
        paragraphSegment = paragraphSegment.concat(
          `<p style="margin-top: 1rem;">&#9642&nbsp&nbsp&nbsp${text}</p>`
        );
      } else if (marks.length === 0) {
        paragraphSegment = paragraphSegment.concat(`<span>${text}</span>`);
      }
    });
    compiledParagraph = compiledParagraph.concat(
      `<p style="margin-top: 1rem;">${paragraphSegment}</p>`
    );
    return compiledParagraph;
  } // end of forEach(segment)
};

export { compileRichText, compiledParagraph };
