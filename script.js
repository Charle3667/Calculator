const display = document.querySelector('#displayText');
let displayArray = []

function updateDisplay () {
display.innerHTML = displayArray.join("");
};

// Button Functions

const buttons = document.querySelectorAll("button");
buttons.forEach((div) => {
    div.addEventListener("mousedown", function (event) {
        event.target.style.opacity = 0.7;
    });
});
buttons.forEach((div) => {
    div.addEventListener("mouseup", function (event) {
        event.target.style.opacity = 1;
    });
});
buttons.forEach((div) => {
    div.addEventListener("mouseleave", function (event) {
        event.target.style.opacity = 1;
    });
});
buttons.forEach((div) => {
    div.addEventListener("mousedown", () => {
        displayArray.push(div.className)
        updateDisplay()
    });
});



//Button Functions

// Calc Function

function add(x, y) {
    return x + y;
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
    if (op === "add") {
        return add(x, y);
    } else if (op === "subtract") {
        return subtract(x, y);
    } else if (op === "multiply") {
        return multiply(x, y);
    } else if (op === "divide") {
        return divide(x, y);
    } else {
        return "ERROR";
    }
}

// Calc Function
