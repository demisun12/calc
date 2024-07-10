// global variables

let num1 = '';
let num2 = '';
let operator = '';

let equalBtn = false;

let currentDisplay = '';
let display = document.getElementById('input');

// buttons
const clear = document.getElementById('ac');
const deletes = document.getElementById('c');
const neg = document.getElementById('neg');
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

// convert to 

//operations
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return "UNDEFINED";
    }
}

function clearDisplay() {
    currentDisplay = '';
    num1 = '';
    num2 = '';
    operator = '';
    equalBtn = false;
    display.innerHTML = currentDisplay;
}

function backSpace() {
    if (currentDisplay !== '') {
        currentDisplay = '';
    }
    display.innerHTML = currentDisplay;
}

function negative() {
    let result = (parseFloat(currentDisplay) * -1);
    let str = result.toString();
    if (str.length > 9) {
        if (str.includes('.') && str.length > 9) {
            result = result.toExponential(2);
        } else {
            result = result.toExponential(2);
        }
    }
    currentDisplay = result
    console.log(result);
    console.log(currentDisplay);
    display.innerHTML = currentDisplay;
}

function updateDisplay(x) {
    if (equalBtn) {
        backSpace();
        currentDisplay += x;
        equalBtn = false;
    } else {
        if (currentDisplay.length < 8) {
            currentDisplay += x;
        }
    }
    display.innerHTML = currentDisplay;
}


function operate(a,b,c) {
    a = parseFloat(a);
    b = parseFloat(b)
    if (c === "+") {
        return add(a,b);
    } else if (c === "-") {
        return subtract(a,b);
    } else if (c === "*") {
        return  multiply(a,b);
    } else if (c === "/") {
        return divide(a,b);
    };
}

function operatorClicked(x) {
    if (currentDisplay === '') {
        num1 = 0;
    } else {
        num1 = currentDisplay;
    }
    operator = x;
    backSpace();
}



function equalClicked() {
    if (!equalBtn && currentDisplay !== '') {
        num2 = currentDisplay;
        console.log(num1 + " " + operator + " " + num2)
        let result = operate(num1, num2, operator);
        let str = result.toString();
        console.log(result)

        
        // Check if the result is greater than 9 characters
        if (str.length > 9) {
                display.innerHTML = parseFloat(result).toExponential(2);
        } else {
            display.innerHTML = result;
        }

        currentDisplay = result;
        num1 = currentDisplay;
        equalBtn = true;
    }
}



//number buttons 
clear.onclick = function() { clearDisplay(); };
deletes.onclick = function() { backSpace(); };
neg.onclick = function() {negative()};
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
decimal.onclick = function() { 
    if (!currentDisplay.includes('.')) {
        updateDisplay('.'); 
    }
};


//operator buttons
plus.onclick = function() { operatorClicked('+'); };
minus.onclick = function() { operatorClicked('-'); };
times.onclick = function() { operatorClicked('*'); };
slash.onclick = function() { operatorClicked('/'); };
equals.onclick = function() { equalClicked() };