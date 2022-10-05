let firstNum = "";
let secondNum = "";

const displayTop = document.querySelector("#display1");
const displayBot = document.querySelector("#display2");
const buttons = document.querySelectorAll(".button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        switch (button.id) {
            case "button-reset":
                break;
            case "button-delete":
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
                break;
            case "button-multiply":
                break;
            case "button-minus":
                break;
            case "button-plus":
                break;
            case "button-decimal":
                break;
            case "button-equal":
                break;


        }
    })
})

function displayOne(number) {
    displayTop.textContent = firstNum;
}

function displayTwo(number) {
    firstNum += number;
    displayBot.textContent = firstNum;
}

function getInput() {

}

function add(a, b) {
    return (a + b);
}

function subtract(a, b) {
    return (a - b);
}

function multiply(a, b) {
    return (a * b);
}

function divide(a, b) {
    return (a / b);
}

function operate(a, b, operator) {
    switch (operator) {
        case "+":
            add(a, b);
            break;
        case "-":
            subtract(a, b);
            break;
        case "*":
            multiply(a, b);
            break;
        case "/":
            divide(a, b);
            break;
    }
}