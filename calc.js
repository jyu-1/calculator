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
                if (secondNum !== "") {
                    displayTop.textContent = secondNum + " " + currentOperator + " " + firstNum;
                    operate(firstNum, secondNum, currentOperator);
                }
                secondNum = firstNum;
                firstNum = "";
                currentOperator = "÷";
                displayOne(secondNum, currentOperator);
                document.getElementById("button-decimal").disabled = false;
                break;
            case "button-multiply":
                if (secondNum !== "") {
                    displayTop.textContent = secondNum + " " + currentOperator + " " + firstNum;
                    operate(firstNum, secondNum, currentOperator);
                }
                secondNum = firstNum;
                firstNum = "";
                currentOperator = "x";
                displayOne(secondNum, currentOperator);
                document.getElementById("button-decimal").disabled = false;
                break;
            case "button-minus":
                if (secondNum !== "") {
                    displayTop.textContent = secondNum + " " + currentOperator + " " + firstNum;
                    operate(firstNum, secondNum, currentOperator);
                }
                secondNum = firstNum;
                firstNum = "";
                currentOperator = "-";
                displayOne(secondNum, currentOperator);
                document.getElementById("button-decimal").disabled = false;
                break;
            case "button-plus":
                if (secondNum !== "") {
                    displayTop.textContent = secondNum + " " + currentOperator + " " + firstNum;
                    operate(firstNum, secondNum, currentOperator);
                }
                secondNum = firstNum;
                firstNum = "";
                currentOperator = "+";
                displayOne(secondNum, currentOperator);
                document.getElementById("button-decimal").disabled = false;
                break;
            case "button-decimal":
                document.getElementById("button-decimal").disabled = true;
                displayTwo(".");
                break;
            case "button-equal":
                if (currentOperator === "") break;
                displayTop.textContent = secondNum + " " + currentOperator + " " + firstNum;
                operate(firstNum, secondNum, currentOperator);
                document.getElementById("button-decimal").disabled = false;
                break;
        }
    })
})

window.addEventListener("keydown", (e) => {
    console.log(e.key)
    switch (e.key) {
        case "Escape":
            firstNum = "";
            secondNum = "";
            currentOperator = "";
            displayTop.textContent = "";
            displayBot.textContent = "";
            break;
        case "Backspace":
            firstNum = firstNum.slice(0, -1);
            displayBot.textContent = firstNum;
            break;
        case "1":
            displayTwo("1");
            break;
        case "2":
            displayTwo("2");
            break;
        case "3":
            displayTwo("3");
            break;
        case "4":
            displayTwo("4");
            break;
        case "5":
            displayTwo("5");
            break;
        case "6":
            displayTwo("6");
            break;
        case "7":
            displayTwo("7");
            break;
        case "8":
            displayTwo("8");
            break;
        case "9":
            displayTwo("9");
            break;
        case "0":
            displayTwo("0");
            break;
        case "/":
            if (secondNum !== "") {
                displayTop.textContent = secondNum + " " + currentOperator + " " + firstNum;
                operate(firstNum, secondNum, currentOperator);
            }
            secondNum = firstNum;
            firstNum = "";
            currentOperator = "÷";
            displayOne(secondNum, currentOperator);
            document.getElementById("button-decimal").disabled = false;
            break;
        case "*":
            if (secondNum !== "") {
                displayTop.textContent = secondNum + " " + currentOperator + " " + firstNum;
                operate(firstNum, secondNum, currentOperator);
            }
            secondNum = firstNum;
            firstNum = "";
            currentOperator = "x";
            displayOne(secondNum, currentOperator);
            document.getElementById("button-decimal").disabled = false;
            break;
        case "-":
            if (secondNum !== "") {
                displayTop.textContent = secondNum + " " + currentOperator + " " + firstNum;
                operate(firstNum, secondNum, currentOperator);
            }
            secondNum = firstNum;
            firstNum = "";
            currentOperator = "-";
            displayOne(secondNum, currentOperator);
            document.getElementById("button-decimal").disabled = false;
            break;
        case "+":
            if (secondNum !== "") {
                displayTop.textContent = secondNum + " " + currentOperator + " " + firstNum;
                operate(firstNum, secondNum, currentOperator);
            }
            secondNum = firstNum;
            firstNum = "";
            currentOperator = "+";
            displayOne(secondNum, currentOperator);
            document.getElementById("button-decimal").disabled = false;
            break;
        case ".":
            document.getElementById("button-decimal").disabled = true;
            displayTwo(".");
            break;
        case "Enter":
            if (currentOperator === "") break;
            displayTop.textContent = secondNum + " " + currentOperator + " " + firstNum;
            operate(firstNum, secondNum, currentOperator);
            document.getElementById("button-decimal").disabled = false;
            break;
    }
})


function displayOne(number, operator) {
    displayTop.textContent = number + " " + operator;
}

function displayTwo(number) {
    firstNum += number;
    displayBot.textContent = firstNum;
}

function displayAnswer(number) {
    displayBot.textContent = number;
}

function add(a, b) {
    let temp = b + a;
    console.log(temp);
    firstNum = temp;
    currentOperator = "";
    return temp;
}

function subtract(a, b) {
    let temp = b - a;
    console.log(temp);
    firstNum = temp;
    currentOperator = "";
    return temp;
}

function multiply(a, b) {
    let temp = b * a;
    console.log(temp);
    firstNum = temp;
    currentOperator = "";
    return temp;
}

function divide(a, b) {
    let temp = b / a;
    console.log(temp);
    firstNum = temp;
    currentOperator = "";
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