let currentDisplay = "0"; 
let resultDisplay = false; 

function appendToDisplay(value) {
    if (currentDisplay === "0" || resultDisplay) {
      currentDisplay = value;
    } else {
      currentDisplay += value;
    }
      resultDisplay = false;
      updateDisplay();
}

function updateDisplay() {
    const displayElement = document.getElementById("display");
    displayElement.innerText = currentDisplay;
}

function calculateResult() {
      const result = eval(currentDisplay);
      currentDisplay= result.toString();
      updateDisplay();
    resultDisplay = true;
}

function clearLastElement() {
    currentDisplay = currentDisplay.slice(0, -1);
      if (currentDisplay === "") {
      currentDisplay = "0";
    }
      updateDisplay();
}

function clearDisplay() {
    currentDisplay = "0"; 
    resultDisplay = false; 
      updateDisplay();
}