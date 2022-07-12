const body = document.querySelector('body');
const textTitle = document.createElement('span');
const gameField = document.createElement('div');

body.append(textTitle, gameField);

const btnArray = [];

function stylizeField() {
    body.style.width = '100%';
    body.style.height = '100vh';

    body.style.backgroundColor = 'bisque';
    body.style.display = 'flex';
    body.style.flexDirection = 'column';
    body.style.justifyContent = 'space-evenly';
    body.style.alignItems = 'center';

    textTitle.textContent = 'Игра Змейка';
    textTitle.style.fontFamily = 'sans-serif';
    textTitle.style.fontSize = '1.7rem';
    textTitle.style.textShadow = '1px 0px 5px white';

    gameField.style.borderRadius = '10px';
    gameField.style.backgroundColor = 'white';
    gameField.style.padding = '1rem';
    gameField.style.display = 'grid';
    gameField.style.gridTemplateColumns = '1fr 1fr 1fr 1fr';
    gameField.style.gridTemplateRows = '1fr 1fr 1fr 1fr';
}

function createBtn() {
    for (let i = 0; i < 16; i++) {
        btn = document.createElement('button');
        btnArray.push(btn)
    }
}

function appendAllBtnOnDocument() {
    btnArray.forEach(function (elem) {
        gameField.append(elem);
    });
}

function stylizeBtn(array) {
    const colorArr = ['green', 'red', 'blue', 'yellow'];

    let greenBtn = [];
    let redBtn = [];
    let blueBtn = [];
    let yellowBtn = [];

    array.forEach(function (elem, index) {
        elem.style.width = '80px';
        elem.style.height = '80px';
        elem.style.cursor = 'pointer';
        elem.style.backgroundColor = colorArr[Math.floor(Math.random() * colorArr.length)];
        
        if (index == btnArray.length-1) {
            elem.style.backgroundColor = 'whitesmoke';
        }

        checkButtonColor(elem, 'green', greenBtn, 3);
        checkButtonColor(elem, 'red', redBtn, 4);
        checkButtonColor(elem, 'blue', blueBtn, 4);
        checkButtonColor(elem, 'yellow', yellowBtn, 4);

        function checkButtonColor(item, color, btnColorArr, amount) {
            if (item.style.backgroundColor == color) {
                btnColorArr.push(item);
                if (btnColorArr.length == amount) {
                    indexOfColor = colorArr.indexOf(color);
                    colorArr.splice(indexOfColor, 1);
                }
            }
        }
    });
}

function getStart() {
    stylizeField();
    createBtn();
    appendAllBtnOnDocument();
    stylizeBtn(btnArray);
}

getStart();