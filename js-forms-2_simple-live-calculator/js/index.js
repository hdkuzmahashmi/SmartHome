console.clear();

const firstInput = document.querySelector('[data-js="firstValue"]');
const secondInput = document.querySelector('[data-js="secondValue"]');
const result = document.querySelector('[data-js="result"]');

firstInput.addEventListener("input", () => {
  multiplyValues();
});

secondInput.addEventListener("input", () => {
  multiplyValues();
});

function multiplyValues() {
  const resultvalue = firstInput.value * secondInput.value;
  result.textContent = resultvalue;
}
