console.log("linked")

let btns = document.querySelectorAll("button");
let display = document.querySelector(".displaytext1")

let firstNumber = 0;
let secondNumber = 0;
let operator = "";
let displayValue = 0;
let buttonValue;

function operate(operator, firstNumber, secondNumber){
    switch(operator){
        case "+":
            return add(firstNumber,secondNumber);
        case "-":
            return subtract(firstNumber, secondNumber);
        case "*":
            return multiply(firstNumber, secondNumber);
        case "/":
            return divide(firstNumber, secondNumber);
        default:
            return 0;
    }
}

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a,b){
    return a / b;
}

btns.forEach(function(i){
    i.addEventListener('click', ()=>{
    if (buttonValue === undefined){
        buttonValue = i.innerText;
    }else{
    buttonValue += i.innerText;
    }
    display.innerText = String(buttonValue);
    })
})

