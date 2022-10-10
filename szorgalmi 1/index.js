import { dictionary, movies } from "./data.js";

window.onload = () => {
  setTitleList();
  handleBtnClick();
};

//Egyes feladat. Kicsit kiegészítettem, hogy a 'va do' beírt keresésre a 'Vatai Domonkos' is találat legyen
// viszont a 'vadon' ne legyen eredmény.
const searchField = document.querySelector("#searchField");
const movieList = document.querySelector(".movieList");

searchField.addEventListener("input", () => inputHandler());
const inputHandler = () => {
  movieList.innerHTML = "";
  const regexGroups = searchField.value.split(" ");
  let regex = "";
  if (searchField.value === "") {
    regex = `^.*.*`;
  } else {
    regex = ``;
    for (const regexString of regexGroups) {
      regex += `.*`;
      regex += regexString;
      regex += `.* `;
    }
  }
  setTitleList(regex, regexGroups);
};

const setTitleList = (regex = `^.*.*$`, regexGroups = false) => {
  const regexp = new RegExp(regex, "i");
  const resultArray = movies.filter((movie) => movie.Title.match(regexp));
  const titles = resultArray.map((movie) => movie.Title);
  for (const title of titles) {
    const li = document.createElement("li");
    let newTitle = title;
    if (regexGroups) {
      for (const regexStr of regexGroups) {
        newTitle = newTitle.replace(
          new RegExp(regexStr, "i"),
          (match) => `<u>${match}</u>`
        );
      }
    } else {
      newTitle = title;
    }
    li.innerHTML = newTitle;
    movieList.appendChild(li);
  }
};

// Kettes feladat
const card = document.querySelector("#card");
const newBtn = document.querySelector("#newBtn");

const front = document.querySelector(".cardFront");
const back = document.querySelector(".cardBack");

let currentIndex = -1;

newBtn.addEventListener("click", () => handleBtnClick());
card.addEventListener("click", () => handleCardClick());

const handleCardClick = () => {
  let state = front.hidden;
  front.hidden = !state;
  back.hidden = state;
};

const handleBtnClick = () => {
  let newCardObj = getNewCard();
  renderCard(newCardObj);
};

const getNewCard = () => {
  let newIndex = Math.floor(Math.random() * dictionary.length);
  if (newIndex === currentIndex) {
    getNewCard();
  } else {
    currentIndex = newIndex;
    console.log(dictionary[newIndex]);
    return dictionary[newIndex];
  }
};

const renderCard = (newCard) => {
  front.innerHTML = newCard.En;
  front.hidden = false;
  back.innerHTML = newCard.Hu;
  back.hidden = true;
};
