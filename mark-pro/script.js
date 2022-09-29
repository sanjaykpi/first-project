document.getElementById("start").addEventListener("click", stage1Oprtn);
let problemsEle=document.getElementsByClassName("problems")[0];
let calculateEle=document.getElementById("calculate");

function stage1Oprtn() {
    let operationEle = document.getElementById("operation"),
        rangeEle = document.getElementById("range"), randomNumber1, randomNumber2,
        operation=operationEle.value,
        range = parseInt(rangeEle.value);

        resetproblemsEle();
        for (i = 1; i <= 16; i++) {
            randomNumber1 = generateRandomNumber(range);
            randomNumber2 = generateRandomNumber(range);
           
            updateProblem(randomNumber1, randomNumber2,operation);
        }
        enableCalculate();
    }
function generateRandomNumber(max) {
    return parseInt(Math.random() * max);
}
function enableCalculate(){
    calculateEle.removeAttribute('disabled');
}
function texttosymbol(text) {
    switch (text) {
        case "add":
            return '+'
            break;
        case "sub":
            return '-'
            break;
        case "multiplication":
            return '*'
            break;
        default:
            return '/'
            break;
    }
}
function resetproblemsEle(){
    problemsEle.innerHTML="";
}
function updateProblem(number1, number2, operation) {
    // create Problem div
    let problemEle = document.createElement('div');
    problemEle.setAttribute("class", "problem");

    let number1Ele = document.createElement('h3');

    number1Ele.innerText = number1;
    console.log(number1Ele);

    let number2Ele = document.createElement('h3');

    number2Ele.innerText = number2;
    console.log(number2Ele);

    let oprtnEle = document.createElement("h3");

    oprtnEle.innerText = texttosymbol(operation);
    console.log(oprtnEle);

    let hrEle = document.createElement('hr');

    // create input box 
    let inptEle = document.createElement('input');

    inptEle.setAttribute("class", 'answer');

    // create input type text
    inptEle.setAttribute("type", 'text');
   
    problemEle.append(number1Ele);
    problemEle.append(oprtnEle);
    problemEle.append(number2Ele);
    problemEle.append(inptEle);

    problemsEle.append(problemEle);
}