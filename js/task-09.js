function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtnEl = document.querySelector('.change-color');
const changeBgColorEl = document.querySelector('body');
const outputColorEl = document.querySelector('.color');

changeColorBtnEl.addEventListener("click", () => {
  const color = getRandomHexColor();
  changeBgColorEl.style.backgroundColor = color;
  outputColorEl.textContent = color;
});