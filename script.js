let equation = '';

function updateDisplay(value) {
  const display = document.getElementById('display');
  equation += value;
  display.value = equation;
}

function clearDisplay() {
  const display = document.getElementById('display');
  equation = '';
  display.value = equation;
}

function calculate() {
  const display = document.getElementById('display');
  let result = eval(equation);
  display.value = result.toFixed(2);
  equation = result.toFixed(2);
}