let firstNum = "";
let secondNum = "";
let currentOperator = "";

const displayTop = document.querySelector("#display1");
const displayBot = document.querySelector("#display2");
const buttons = document.querySelectorAll(".button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        switch (button.id) {
            case "button-reset":
                firstNum = "";
                secondNum = "";
                currentOperator = "";
                displayTop.textContent = "";
                displayBot.textContent = "";
                break;
            case "button-delete":
                firstNum = firstNum.slice(0, -1);
                displayBot.textContent = firstNum;
                break;
            case "button1":
                displayTwo("1");
                break;
            case "button2":
                displayTwo("2");
                break;
            case "button3":
                displayTwo("3");
                break;
            case "button4":
                displayTwo("4");
                break;
            case "button5":
                displayTwo("5");
                break;
            case "button6":
                displayTwo("6");
                break;
            case "button7":
                displayTwo("7");
                break;
            case "button8":
                displayTwo("8");
                break;
            case "button9":
                displayTwo("9");
                break;
            case "button0":
                displayTwo("0");
                break;
            case "button-divide":
                secondNum = firstNum;
                firstNum = "";
                currentOperator = "÷";
                displayOne(secondNum, currentOperator);
                break;
            case "button-multiply":
                secondNum = firstNum;
                firstNum = "";
                currentOperator = "x";
                displayOne(secondNum, currentOperator);
                break;
            case "button-minus":
                secondNum = firstNum;
                firstNum = "";
                currentOperator = "-";
                displayOne(secondNum, currentOperator);
                break;
            case "button-plus":
                secondNum = firstNum;
                firstNum = "";
                currentOperator = "+";
                displayOne(secondNum, currentOperator);
                break;
            case "button-decimal":
                break;
            case "button-equal":
                displayTop.textContent = secondNum + " " + currentOperator + " " + firstNum;
                operate(firstNum, secondNum, currentOperator);
                break;
        }
    })
})

function displayOne(number, operator) {
    displayTop.textContent = number + " " + operator;
}

function displayTwo(number) {
    firstNum += number;
    displayBot.textContent = firstNum;
}

function displayAnswer(number){
    displayBot.textContent = number;
}

function add(a, b) {
    let temp = b + a;
    console.log(temp);
    return temp;
}

function subtract(a, b) {
    let temp = b - a;
    console.log(temp);
    return temp;
}

function multiply(a, b) {
    let temp = b * a;
    console.log(temp);
    return temp;
}

function divide(a, b) {
    let temp = b / a;
    console.log(temp);
    return temp;
}

function operate(a, b, operator) {
    switch (operator) {
        case "+":
            displayAnswer(add(parseFloat(a), parseFloat(b)));
            break;
        case "-":
            displayAnswer(subtract(parseFloat(a), parseFloat(b)));
            break;
        case "x":
            displayAnswer(multiply(parseFloat(a), parseFloat(b)));
            break;
        case "÷":
            displayAnswer(divide(parseFloat(a), parseFloat(b)));
            break;
    }
}