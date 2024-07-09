// operator functions

function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    if (b !== 0) {
        return a / b;
    } else {
        return NaN;
    }
    
}

// button variables

const clear = document.getElementById('ac');
const deletes = document.getElementById('c');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const zero = document.getElementById('zero');
const decimal = document.getElementById('decimal');

const plus = document.getElementById('add');
const minus = document.getElementById('subtract');
const times = document.getElementById('multiply');
const slash = document.getElementById('divide');
const equals = document.getElementById('equal');

//display function
let currentDisplay = '';

// Updated updateDisplay function
function updateDisplay(value) {
    let displayValue = document.getElementById('display');
        let hasDecimal = currentDisplay.includes('.');

    if (value === "AC") {
        currentDisplay = "";
    } else if (value === "C") {
        if (currentDisplay.length > 0) {
            currentDisplay = currentDisplay.slice(0, -1);
        }
    } else {
        if (value === "." && hasDecimal) {
            return; // Exit function if trying to add another decimal
        }
        if (operator !== '' && currentDisplay !== '' && firstNumber !== '') {
            currentDisplay = "";
            operator = '';
            firstNumber = '';
            secondNumber = '';
            currentDisplay += value;
        } else if (currentDisplay.length < 9) {
            currentDisplay += value;
        }
    }

    displayValue.innerHTML = currentDisplay;
}


let firstNumber = '';
let secondNumber = '';
let operator = '';

function operatorDisplay(value) {
    operator = value;
    if (currentDisplay !== '') {
        firstNumber = parseFloat(currentDisplay);
        currentDisplay = '';
    }
}

equals.onclick = function() {
    if (currentDisplay !== '') {
        secondNumber = parseFloat(currentDisplay);
        let result = operate(firstNumber, secondNumber, operator);
        let max = 9;
        let string = result.toString();
        // Limit the result to a specific number of decimal places
        if (string.length > max) {
            let decimalPlaces = 7; // Adjust as needed
            let final = result.toFixed(decimalPlaces);

            document.getElementById('display').innerHTML = final;
            currentDisplay = final;
        } else {
            document.getElementById('display').innerHTML = result;
            currentDisplay = result;
        }
    }
}



//onclick functions

clear.onclick = function() { updateDisplay("AC"); };
deletes.onclick = function() { updateDisplay("C"); };
one.onclick = function() { updateDisplay(1); };
two.onclick = function() { updateDisplay(2); };
three.onclick = function() { updateDisplay(3); };
four.onclick = function() { updateDisplay(4); };
five.onclick = function() { updateDisplay(5); };
six.onclick = function() { updateDisplay(6); };
seven.onclick = function() { updateDisplay(7); };
eight.onclick = function() { updateDisplay(8); };
nine.onclick = function() { updateDisplay(9); };
zero.onclick = function() { updateDisplay(0); };
decimal.onclick = function() { updateDisplay("."); };

//calculator btn function
plus.onclick = function() { operatorDisplay('+'); };
minus.onclick = function() { operatorDisplay('-'); };
times.onclick = function() { operatorDisplay('*'); };
slash.onclick = function() { operatorDisplay('/'); };


function operate(a,b,c) {
    if (c === "+") {
        return add(a,b);
    } else if (c === "-") {
        return subtract(a,b);
    } else if (c === "*") {
        return  multiply(a,b);
    } else if (c === "/") {
        return divide(a,b);
    }
}


