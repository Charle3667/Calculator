

// Calc Function

let add = function(x, y) {
    return(x+y)
}

let subtract = function(x, y) {
    return(x-y)
}

let multiply = function(x, y) {
    return(x*y)
}

let divide = function(x, y){
    return(x/y)
}

let operate = function(x, op, y){
    if(op === "add") {
        return(add(x, y));
    }
    else if(op === "subtract"){
        return(subtract(x, y));
    }
    else if(op === "multiply"){
        return(multiply(x, y));
    }
    else if(op === "divide"){
        return(divide(x, y))
    }
    else {
        return("ERROR")
    }
}

// Calc Function
