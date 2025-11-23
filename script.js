let currentDisplay = '0';
let num1 = null;
let operator = null;
let waitingForSecondNumber = false;

const display = document.getElementById('display');

function updateDisplay() {
    display.textContent = currentDisplay;
}

function appendNumber(num) {
    if (waitingForSecondNumber) {
        currentDisplay = num;
        waitingForSecondNumber = false;
    } else {
        if (currentDisplay === '0' || currentDisplay === 'ERROR') {
            currentDisplay = num;
        } else {
            currentDisplay += num;
        }
    }
    updateDisplay();
}

function setOperator(op) {
    if (operator !== null && !waitingForSecondNumber) {
        calculate();
    }
    
    num1 = parseFloat(currentDisplay);
    operator = op;
    waitingForSecondNumber = true;
}

function calculate() {
    if (operator === null || num1 === null) {
        return;
    }
    
    const num2 = parseFloat(currentDisplay);
    let result;
    
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                currentDisplay = 'ERROR';
                updateDisplay();
                num1 = null;
                operator = null;
                return;
            }
            result = num1 / num2;
            break;
    }
    
    currentDisplay = result.toString();
    updateDisplay();
    num1 = null;
    operator = null;
    waitingForSecondNumber = true;
}

function clearDisplay() {
    currentDisplay = '0';
    num1 = null;
    operator = null;
    waitingForSecondNumber = false;
    updateDisplay();
}

updateDisplay();
