const display = document.querySelector("#displayText");
let digitArray = [];
let operationArray = [];

function updateDisplay() {
    display.innerHTML = digitArray.join("");
}

// Button Functions

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
        return updateDisplay();
    });
});

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
        operationArray.push(display.innerHTML);
        operationArray.push(div.innerHTML);
        digitArray = [];
        arrayCalc(operationArray);
        clearToggle();
        // operator button would push digit content and operator to array.
    });
});

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
    digitArray = [];
    operationArray = [];
    clearToggle();
    return updateDisplay();
});

//Button Functions

// Calc Function

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
    } else {
        return "ERROR";
    }
}

// Calc Function

// functions for calc

function arrayCalc(array) {
    if (array.length > 3) {
        console.log("array calc fires");
        let calc = operate(array[0], array[1], array[2]);
        operationArray = [];
        digitArray = [];
        digitArray.push(calc);
        console.log("new digit array " + digitArray);
        console.log("operator array " + operationArray);
        return updateDisplay();
    } else {
        console.log("Error on arrayCalc");
    }
}

function clearToggle() {
    if (digitArray.length === 0) {
        return (clear.innerHTML = "AC");
    } else {
        return (clear.innerHTML = "C");
    }
}

// functions for calc

//take initial set of digits. when an operator is called, push digets and operator to array. when second set
// of digits and the second oporatpr is called, the calc function will fun because array length is greater than 0.s
