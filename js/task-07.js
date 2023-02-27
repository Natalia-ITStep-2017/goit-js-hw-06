const inputRangeEl = document.querySelector('#font-size-control');
const outputTextEl = document.querySelector('#text');

inputRangeEl.addEventListener("input", () => {
  outputTextEl.style.fontSize = `${inputRangeEl.value}px`;
});
