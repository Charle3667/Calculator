// Calc Function

function add (x, y) {
    return (x + y)
}

function subtract (x, y) {
    return (x - y)
}

function multiply (x, y) {
    return (x * y)
}

function divide (x, y) {
    return (x / y)
}

function operate (x, op, y) {
    if (op === "add") {
        return (add(x, y));
    } else if (op === "subtract") {
        return (subtract(x, y));
    } else if (op === "multiply") {
        return (multiply(x, y));
    } else if (op === "divide") {
        return (divide(x, y))
    } else {
        return ("ERROR")
    }
}

// Calc Function
