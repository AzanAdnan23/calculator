let firstNum = null;
let secondNum = null;
let operator = null;
let displayNum = "0";

function populateDisplay(parameter) {
  if (!isNaN(parameter)) {
    const numberValue = parseInt(parameter, 10);

    if (displayNum === "0" || operator === "=") {
      displayNum = numberValue.toString();
    } else if (displayNum.length < 14) {
      displayNum += numberValue.toString();
    }

    updateDisplay();
  } else if (parameter === "AC") {
    allClear();
  } else if (parameter === "=") {
    if (operator !== null) {
      secondNum = parseFloat(displayNum);
      evaluate();
      operator = "=";
    }
  } else {
    if (firstNum === null) {
      firstNum = parseFloat(displayNum);
      operator = parameter;
      displayNum = "0";
    } else {
      if (operator !== "=") {
        secondNum = parseFloat(displayNum);
        evaluate();
      }
      operator = parameter;
      displayNum = "0";
    }
  }
}
function evaluate() {
  if (operator !== null) {
    switch (operator) {
      case "+":
        firstNum += secondNum;
        break;
      case "-":
        firstNum -= secondNum;
        break;
      case "*":
        firstNum *= secondNum;
        break;
      case "/":
        if (secondNum === 0) {
          displayNum = "Error";
        } else {
          firstNum /= secondNum;
        }
        break;
    }
  }
  secondNum = null;
  displayNum = firstNum.toString();
  updateDisplay();
}
function allClear() {
  firstNum = null;
  secondNum = null;
  operator = null;
  displayNum = "0";
  updateDisplay();
}

function updateDisplay() {
  const displayElement = document.querySelector("#displayNum");
  displayElement.textContent = displayNum;
}
