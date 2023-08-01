const OPERATION_ADD = "ADD";
const OPERATION_SUBTRACT = "SUBTRACT";
const OPERATION_MULTIPLY = "MULTIPLY";
const OPERATION_DIVIDE = "DIVIDE";
const defaultResult = 0;

let currentResult = defaultResult;
let logEntries = [];

// Gets input from input field
function getUserNumberInput() {
	return parseInt(usrInput.value);
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
	const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
	outputResult(currentResult, calcDescription); // from vendor file
}

function writeToLog(
	operationIdentifier,
	prevResult,
	operationNumber,
	newResult
) {
	const logEntry = {
		operation: operationIdentifier,
		prevResult: prevResult,
		number: operationNumber,
		result: newResult,
	};
	logEntries.push(logEntry);
	console.log(logEntries);
}

function calculate(operation) {
	const enteredNumber = getUserNumberInput();
	const initialResult = currentResult;
	let operator;
	if (operation === OPERATION_ADD) {
		currentResult += enteredNumber;
		operator = "+";
	} else if (operation === OPERATION_SUBTRACT) {
		currentResult -= enteredNumber;
		operator = "-";
	} else if (operation === OPERATION_MULTIPLY) {
		currentResult *= enteredNumber;
		operator = "*";
	} else if (operation === OPERATION_DIVIDE) {
		currentResult /= enteredNumber;
		operator = "/";
	}
	createAndWriteOutput(operator, initialResult, enteredNumber);
	writeToLog(operation, initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener("click", calculate.bind(this, OPERATION_ADD));
subtractBtn.addEventListener("click", calculate.bind(this, OPERATION_SUBTRACT));
multiplyBtn.addEventListener("click", calculate.bind(this, OPERATION_MULTIPLY));
divideBtn.addEventListener("click", calculate.bind(this, OPERATION_DIVIDE));
