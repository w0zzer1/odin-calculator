console.log("linked")

let btns = document.querySelectorAll(".numbers");
let display = document.querySelector(".displaytext1")
let operatorBtn = document.querySelectorAll(".operator")

let operator;
let curentNumber;
let result;

function operate(operator, firstNumber, secondNumber){
    switch(operator){
        case "+":
            return add(firstNumber,secondNumber);
        case "-":
            return subtract(firstNumber, secondNumber);
        case "x":
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
    if (curentNumber === undefined){
        curentNumber = i.innerText;
    }else{
        curentNumber += i.innerText;
    }
    displayValue = curentNumber;
    updateDisplay();
    })
})

operatorBtn.forEach(function(i){
    i.addEventListener('click', ()=>{
        if (result === undefined){
            result = curentNumber;
            curentNumber = undefined;
            updateDisplay();            
        }else if (curentNumber !== undefined){
            result = operate(operator, Number(result), Number(curentNumber));
            curentNumber = undefined;
            updateDisplay();
        }
        operator = i.innerText;
        console.log(result);
    })
})


function updateDisplay(){
    if (arguments[0] !== undefined){
        display.innerHTML = arguments[0]
    }
    else if (curentNumber == undefined){
        display.innerHTML = "0";
    }else{
    display.innerHTML = String(curentNumber);
}}

