const display = document.querySelector("#displayText");
let digitArray = [];
let operationArray = [];
let equalsAnswer = [];

function updateDisplay() {
    display.innerHTML = digitArray.join("");
}

// Digit Button Functions

const digitButtons = document.querySelectorAll(".digit");
digitButtons.forEach((div) => {
    div.addEventListener("mousedown", function (event) {
        event.target.style.opacity = 0.7;
    });
});
digitButtons.forEach((div) => {
    div.addEventListener("mouseup", function (event) {
        event.target.style.opacity = 1;
    });
});
digitButtons.forEach((div) => {
    div.addEventListener("mouseleave", function (event) {
        event.target.style.opacity = 1;
    });
});
digitButtons.forEach((div) => {
    div.addEventListener("mousedown", () => {
        digitArray.push(div.innerHTML);
        clearToggle();
        console.log("digit array: " + digitArray);
        console.log("op array: " + operationArray);
        return updateDisplay();
    });
});

// Digit Button Functions

// Clear button Functions

const clear = document.querySelector(".clear");
clear.addEventListener("mousedown", function (event) {
    event.target.style.opacity = 0.7;
});
clear.addEventListener("mouseup", function (event) {
    event.target.style.opacity = 1;
});
clear.addEventListener("mouseleave", function (event) {
    event.target.style.opacity = 1;
});
clear.addEventListener("mousedown", () => {
    if (digitArray.length > 0) {
        digitArray.pop();
        clearToggle();
        return updateDisplay();
    } else {
        digitArray = [];
        operationArray = [];
        clearToggle();
        return updateDisplay();
    }
});

function clearToggle() {
    if (digitArray.length > 0) {
        return (clear.innerHTML = "C");
    } else {
        return (clear.innerHTML = "AC");
    }
}

// Clear button Functions

// Negative button function

const turnNeg = document.querySelector(".turnNegative");
turnNeg.addEventListener("mousedown", function (event) {
    event.target.style.opacity = 0.7;
});
turnNeg.addEventListener("mouseup", function (event) {
    event.target.style.opacity = 1;
});
turnNeg.addEventListener("mouseleave", function (event) {
    event.target.style.opacity = 1;
});
turnNeg.addEventListener("mousedown", () => {
    currentNumber = digitArray.join("");
    digitArray = [];
    negNumber = turnNegative(currentNumber);
    digitArray.push(negNumber);
    return updateDisplay();
});

function turnNegative(x) {
    return x * -1;
}

// Negative button function

// Calc Function

function remainder(x, y) {
    return x % y;
}

function add(x, y) {
    return parseInt(x) + parseInt(y);
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function operate(x, op, y) {
    if (op === "+") {
        return add(x, y);
    } else if (op === "-") {
        return subtract(x, y);
    } else if (op === "x") {
        return multiply(x, y);
    } else if (op === "/") {
        return divide(x, y);
    } else if (op === "%") {
        return remainder(x, y);
    } else {
        return "ERROR";
    }
}

// Calc Function

// operator button functions

const opButtons = document.querySelectorAll(".operator");
opButtons.forEach((div) => {
    div.addEventListener("mousedown", function (event) {
        event.target.style.opacity = 0.7;
    });
});
opButtons.forEach((div) => {
    div.addEventListener("mouseup", function (event) {
        event.target.style.opacity = 1;
    });
});
opButtons.forEach((div) => {
    div.addEventListener("mouseleave", function (event) {
        event.target.style.opacity = 1;
    });
});
opButtons.forEach((div) => {
    div.addEventListener("mousedown", () => {
        console.log("digit array before: " + digitArray);
        console.log("op array before: " + operationArray);
        operationArray.push(display.innerHTML);
        operationArray.push(div.innerHTML);
        digitArray = [];
        equalsAnswer = [];
        arrayCalc(operationArray, div.innerHTML);
        clearToggle();
        console.log("digit array after: " + digitArray);
        console.log("op array after: " + operationArray);
        // operator button would push digit content and operator to array.
    });
});

// operator button functions

// functions for calc

function arrayCalc(array, op) {
    if (array.length === 4) {
        let calc = operate(array[0], array[1], array[2]);
        operationArray = [calc, op];
        digitArray = [];
        digitArray.push(calc);
        updateDisplay();
        digitArray = [];
        return console.log("array calc fires");
    } else {
        console.log("No fire on arrayCalc");
    }
}

function equalsArrayCalc(array) {
    let calc = operate(array[0], array[1], array[2]);
    operationArray = [];
    digitArray = [];
    equalsAnswer = [calc, array[1], array[2]];
    digitArray.push(calc);
    updateDisplay();
    digitArray = [];
    console.log("digit array after: " + digitArray);
    console.log("op array after: " + operationArray);
    return console.log("equals calc fires");
}

// functions for calc

//Equals function
const equals = document.querySelector(".equals");
equals.addEventListener("mousedown", function (event) {
    event.target.style.opacity = 0.7;
});
equals.addEventListener("mouseup", function (event) {
    event.target.style.opacity = 1;
});
equals.addEventListener("mouseleave", function (event) {
    event.target.style.opacity = 1;
});
equals.addEventListener("mousedown", () => {
    if (equalsAnswer.length > 1) {
        console.log("equalsAnswer Array is full")
        return(equalsArrayCalc(equalsAnswer));   
    } else if (operationArray.length === 2) {
        operationArray.push(display.innerHTML);
        console.log("equalsAnswer Array is empty")
        return equalsArrayCalc(operationArray);
    } else (console.log("both empty"))
});

//take initial set of digits. when an operator is called, push digets and operator to array. when second set
// of digits and the second oporatpr is called, the calc function will fun because array length is greater than 0.s
