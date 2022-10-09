import { wordOptions } from './words.js';

//<div class="word-option">foo</div>
const inputRef = document.querySelector('#input');
const popupRef = document.querySelector('#popup');

inputRef.addEventListener('input', (e) => handleInputChange(e));
const handleInputChange = (e) => {
  //get input value
  //set it as regex
  //map matching values
  popupRef.innerHTML = wordOptions
    .filter((searchString) => {
      if (searchString.match(new RegExp(`.*${e.target.value}.*`, 'i')))
        return searchString;
    })
    .map((result) => {
      return `<div class="word-option">${result}</div>`;
    })
    .join('\n');
};
