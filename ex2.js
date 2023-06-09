var name = "Jacki";
var age = 4;
var favorite_color = "Yellow";
var sum = add(1, multiply(2, subtract(4, 3)));
print("the sum is", sum)
function print(...args) {
    console.log(...args);
}

function add(x, y) {
    return x + y;
}

function multiply(x, y) {
    return x * y;
}

function subtract(x, y) {
    return x - y;
}

function divide(x, y) {
    return x / y;
}

function sqrt(x) {
    return Math.sqrt(x);
}

function pow(x, y) {
    return Math.pow(x, y);
}