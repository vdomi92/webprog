import { wordOptions } from './words.js';

const leftSelect = document.querySelector('#left-select');
const rightSelect = document.querySelector('#right-select');
const selectParent = document.querySelector('#multiselect-move');

//Function to generate select options from indices array and data array
const createSelectOptionsByIndex = (indices) => {
  return indices.map((index) => {
    return `<option value="${index}"> ${wordOptions[index]} </option>`;
  });
};

//Filling up options with initial data
const initializeSelectOptions = () => {
  let selectOptions = wordOptions.map((word, i) => {
    return `<option value="${i}"> ${word} </option>`;
  });
  leftSelect.innerHTML = selectOptions.join('\n');
};
window.addEventListener('load', initializeSelectOptions());

//Getting selected options HTML collection
const getSelectedOptionsOnArrowButtonClick = (event) => {
  if (event.target.matches('#left-arrow')) {
    return rightSelect.selectedOptions;
  } else if (event.target.matches('#right-arrow')) {
    return leftSelect.selectedOptions;
  }
};

//Removing selected elements from options
const removeOptionsFromSelect = (arrayOfIndices) => {
  for (let i = 0; i < arrayOfIndices.length; i++) {
    document.querySelector(`option[value="${arrayOfIndices[i]}"]`).remove();
  }
};
//Adding selected elements to options
const addOptionsFromDataArrayToSelect = (selectNodeRef, arrayOfIndices) => {
  selectNodeRef.innerHTML +=
    createSelectOptionsByIndex(arrayOfIndices).join('\n');
};

//Event listener and handler function for arrow clicks
selectParent.addEventListener('click', (e) => handleArrowButtonClick(e));
const handleArrowButtonClick = (e) => {
  if (e.target.matches('#left-arrow') || e.target.matches('#right-arrow')) {
    let selectedOptions = getSelectedOptionsOnArrowButtonClick(e);
    let selectedIndices = [...selectedOptions].map((elem) => elem.value);
    if (e.target.matches('#left-arrow')) {
      removeOptionsFromSelect(selectedIndices);
      addOptionsFromDataArrayToSelect(leftSelect, selectedIndices);
    } else if (e.target.matches('#right-arrow')) {
      removeOptionsFromSelect(selectedIndices);
      addOptionsFromDataArrayToSelect(rightSelect, selectedIndices);
    }
  } else {
    e.preventDefault();
  }
};
