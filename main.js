const darkThemeBtn = document.querySelector("#checkbox");
const screen = document.querySelector("#screen");
const numbers = document.querySelectorAll(".number");
const operator = document.querySelectorAll(".operator");
const pointBtn = document.querySelector("#point");
const sumBtn = document.querySelector("#sum");
const reset = document.querySelector("#reset");
const sumDisplay = document.querySelector("#sum-display");
const container = document.querySelector("#container");
const legend = document.querySelector("#legend")

function darkMode(element) {
    element.classList.toggle("dark-mode");
}

function darkTheme() {
    for (let i = 0; i < numbers.length; i++){
        darkMode(numbers[i]);
    }
    for (let i = 0; i < operator.length; i++){
        darkMode(operator[i]);
    }
    darkMode(screen);
    darkMode(sumBtn);
    darkMode(reset)
    darkMode(legend)
    container.classList.toggle("dark-background")
}

darkThemeBtn.addEventListener('click',darkTheme);

const calcul = () => {
    let totalArray = []
    for (let number of numbers) {
    number.addEventListener('click', () => {
        let total;
        let joinArray
        let result
        total = number.textContent;
        totalArray.push(total);
        joinArray = totalArray.join("");
        sumDisplay.textContent = joinArray;
        result = eval(joinArray);
        sumBtn.addEventListener('click',() => {
            sumDisplay.textContent = result
            totalArray = [result]
        })
    })
    }
}

calcul()

reset.addEventListener('click',() => {
    sumDisplay.textContent = ""
    calcul()
})












