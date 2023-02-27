let counterValue = 0;

const incrementBtnEl = document.querySelector('[data-action="increment"]');
const decrementBtnEl = document.querySelector('[data-action="decrement"]');
const counterValueEl = document.querySelector('#value');
const updateCounerValue = () => counterValueEl.textContent = counterValue;

incrementBtnEl.addEventListener("click", () => {
  counterValue += 1
  updateCounerValue();
});

decrementBtnEl.addEventListener("click", () => {
  counterValue -= 1
  updateCounerValue();
});