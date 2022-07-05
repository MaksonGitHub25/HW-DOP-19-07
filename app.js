const body = document.querySelector('body');

body.style.width = '100%';
body.style.height = '100vh';

body.style.backgroundColor = 'bisque';
body.style.display = 'flex';
body.style.flexDirection = 'column';
body.style.justifyContent = 'space-evenly';
body.style.alignItems = 'center';

const textTitle = document.createElement('span');
textTitle.textContent = 'Игра Змейка';
textTitle.style.fontFamily = 'sans-serif';
textTitle.style.fontSize = '1.7rem';
textTitle.style.textShadow = '1px 0px 5px white';

const gameField = document.createElement('div');
gameField.style.borderRadius = '10px';
gameField.style.backgroundColor = 'white';
gameField.style.padding = '1rem';
gameField.style.display = 'grid';
gameField.style.gridTemplateColumns = '1fr 1fr 1fr 1fr';
gameField.style.gridTemplateRows = '1fr 1fr 1fr 1fr';

const colorArr = ['green', 'red', 'blue', 'yellow'];

const btnArr = [
    btn1 = document.createElement('button'), 
    btn2 = document.createElement('button'),
    btn3 = document.createElement('button'),
    btn4 = document.createElement('button'),
    btn5 = document.createElement('button'),
    btn6 = document.createElement('button'),
    btn7 = document.createElement('button'),
    btn8 = document.createElement('button'),
    btn9 = document.createElement('button'),
    btn10 = document.createElement('button'),
    btn11 = document.createElement('button'),
    btn12 = document.createElement('button'),
    btn13 = document.createElement('button'),
    btn14 = document.createElement('button'),
    btn15 = document.createElement('button'),
    btn16 = document.createElement('button')
];

gameField.append(btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9, btn10, btn11, btn12, btn13, btn14, btn15, btn16);

let greenBtn = [];
let redBtn = [];
let blueBtn = [];
let yellowBtn = [];

btnArr.forEach(function (elem, index) {
    elem.style.width = '80px';
    elem.style.height = '80px';
    elem.style.cursor = 'pointer';
    elem.style.backgroundColor = colorArr[Math.floor(Math.random() * colorArr.length)];
    
    if (index == btnArr.length-1) {
        elem.style.backgroundColor = 'whitesmoke';
    }

    console.log(index, colorArr);
    if (elem.style.backgroundColor == 'green') {
        greenBtn.push(elem);
        console.log(elem.style.backgroundColor);
        if (greenBtn.length == 3) {
            indexOfGreen = colorArr.indexOf('green');
            colorArr.splice(indexOfGreen, 1);
            console.log(index, colorArr, indexOfGreen);
        }
    }if (elem.style.backgroundColor == 'red') {
        redBtn.push(elem);
        console.log(elem.style.backgroundColor);
        if (redBtn.length == 4) {
            indexOfRed = colorArr.indexOf('red');
            colorArr.splice(indexOfRed, 1);
            console.log(index, colorArr, indexOfRed);
        }
    }
    if (elem.style.backgroundColor == 'blue') {
        blueBtn.push(elem);
        console.log(elem.style.backgroundColor);
        if (blueBtn.length == 4) {
            indexOfBlue = colorArr.indexOf('blue');
            colorArr.splice(indexOfBlue, 1);
            console.log(index, colorArr, indexOfBlue);
        }
    }
    if (elem.style.backgroundColor == 'yellow') {
        yellowBtn.push(elem);
        console.log(elem.style.backgroundColor);
        if (yellowBtn.length == 4) {
            indexOfYellow = colorArr.indexOf('yellow');
            colorArr.splice(indexOfYellow, 1);
            console.log(index, colorArr);
        }
    }
});

body.append(textTitle, gameField);