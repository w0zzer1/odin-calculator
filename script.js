console.log("linked")

let btns = document.querySelectorAll(".numbers");
let display = document.querySelector(".displaytext1")
let operatorBtn = document.querySelectorAll(".operator")
let clearBtn = document.querySelector(".clear")
let deleteBtn = document.querySelector(".delete")
let pointBtn = document.querySelector(".point")

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
    if (b != undefined){
        return a / b;
    } else {
        return "ERROR"
    }
}

btns.forEach(function(i){
    i.addEventListener('click', ()=>{
    if (curentNumber === undefined && i.innerText != "0"){
        curentNumber = i.innerText;
    }else if (curentNumber !== undefined){
        curentNumber += i.innerText;
    }
    if (curentNumber != undefined){
        displayValue = curentNumber;
        updateDisplay();
    }
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
        if (operator === "="){
            updateDisplay(result);
            result=undefined;
            operator = undefined;
        }
    })
})

deleteBtn.addEventListener("click", ()=>{
    if (curentNumber === undefined || curentNumber.length < 2 ){
        curentNumber = undefined
    } else {
        curentNumber = curentNumber.substring(0, curentNumber.length-1);
    }
    updateDisplay();
})

clearBtn.addEventListener('click', ()=>{
    curentNumber = undefined;
    updateDisplay();
})

pointBtn.addEventListener('click', ()=>{
    if (curentNumber === undefined){
        curentNumber = "0."
    } else if (curentNumber.includes(".")){

    } else {
        curentNumber += "."
    }
    updateDisplay();    
})

function updateDisplay(){
    if (arguments[0] !== undefined){
        display.innerHTML = String(arguments[0])
    }
    else if (curentNumber == undefined){
        display.innerHTML = "0";
    }else{
    display.innerHTML = String(curentNumber);
}}

