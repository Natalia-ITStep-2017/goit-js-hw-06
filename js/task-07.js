const inputRangeEl = document.querySelector('#font-size-control');
const outputTextEl = document.querySelector('#text');

outputTextEl.style.fontSize = `${inputRangeEl.value}px`

inputRangeEl.addEventListener("input", () => {
  outputTextEl.style.fontSize = `${inputRangeEl.value}px`;
});
