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
    } else (b ===0) {
        return "UNDEFINED"
    }
    
}

let firstNumber = ;
let secondNumber = ;
let operator = ;

function operate(firstNumber,secondNumber,operator) {
    if (operator === "+") {
        add(firstNumber,secondNumber);
    } else if (operator === "-") {
        subtract(firstNumber,secondNumber);
    } else if (operator === "*") {
        multiply(firstNumber,secondNumber);
    } else (operator === "/") {
        divide(firstNumber,secondNumber);
    }
}