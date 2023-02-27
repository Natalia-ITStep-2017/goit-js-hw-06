function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxesEl = document.querySelector("#boxes");
const inputEl = document.querySelector("input");
const createBtnEl = document.querySelector("[data-create]");
const destoryBtnEl = document.querySelector("[data-destroy]");

function createBoxes(amount) {
  let htmlDivs = '';
  for (let i = 0; i < amount; i++) { 
    htmlDivs += `<div style=
    "margin-top: 5px; 
    border: 1px solid black; 
   width: ${30 + i * 10}px; 
   height: ${30 + i * 10}px; 
   background-color: ${getRandomHexColor()}">
   </div>`
  }
  boxesEl.innerHTML = htmlDivs
}

function destroyBoxes() {
  let htmlDivs = '';
  boxesEl.innerHTML = htmlDivs
}

createBtnEl.addEventListener("click", () => {
  const amount = inputEl.value;
  console.log(amount);
  createBoxes(amount);
});

destoryBtnEl.addEventListener("click", () => {
  destroyBoxes();
});

