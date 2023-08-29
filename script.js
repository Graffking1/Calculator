let userInput = document.querySelector('input');
let expression = "";
let buffer = "";

function press(num) {
    expression = expression + num;
    userInput.value = expression;
}

function equal() {
    userInput.value = eval(expression);
    expression = "";
}

function erase() {
    expression = "";
    userInput.value = expression;
}

function save() {
    buffer = userInput.value;
}

function read() {
    expression = expression + buffer;//Добавили число
    userInput.value = expression;//Отобразили на экране
}

function clear() {
    buffer = "";
}

function sqrt() {
    userInput.value = Math.sqrt(expression);
}

function Mplus() {
    buffer = Number(buffer) + Number(userInput.value);
}

function Mminus() {
    buffer = Number(buffer) - Number(userInput.value)
}