let currentResult = 0;
const defaultResult = currentResult;
let calculationDescription = 'Yankee'

currentResult = currentResult + 10;

function subtract(num1, num2) {
    return num1 - num2;
}

function add(num1, num2) {
    return num1 + num2;
}

addBtn.addEventListener('click', add);

outputResult(currentResult, calculationDescription)
