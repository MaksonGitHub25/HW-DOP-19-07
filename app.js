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

let whiteBtn;
let whiteBtnIndex;
let whiteBtnX;
let whiteBtnY;

function stylizeBtn(array) {
    const colorArr = ['green', 'red', 'blue', 'yellow'];

    let greenBtnArr = [];
    let redBtnArr = [];
    let blueBtnArr = [];
    let yellowBtnArr = [];

    array.forEach(function (elem, index) {
        elem.style.width = '80px';
        elem.style.height = '80px';
        elem.style.cursor = 'pointer';
        elem.style.backgroundColor = colorArr[Math.floor(Math.random() * colorArr.length)];

        if (index === btnArray.length - 1) {
            elem.style.backgroundColor = 'gray';
            elem.style.disabled = true;
            elem.textContent = 'x';
            elem.style.fontSize = '2.5rem';
        }

        checkButtonColor(elem, 'green', greenBtnArr, 3);
        checkButtonColor(elem, 'red', redBtnArr, 4);
        checkButtonColor(elem, 'blue', blueBtnArr, 4);
        checkButtonColor(elem, 'yellow', yellowBtnArr, 4);

        function checkButtonColor(item, color, btnColorArr, amount) {
            if (item.style.backgroundColor === color) {
                btnColorArr.push(item);
                if (btnColorArr.length === amount) {
                    indexOfColor = colorArr.indexOf(color);
                    colorArr.splice(indexOfColor, 1);
                }
            }
        }
        
        if (index + 1 <= btnArray.length/4) {
            elem.style.gridRowStart = 1;
        } else if (index + 1 <= 2 * btnArray.length/4 && index + 1 > btnArray.length/4) {
            elem.style.gridRowStart = 2;
        } else if (index + 1 <= 3 * btnArray.length/4 && index + 1 > 2 * btnArray.length/4) {
            elem.style.gridRowStart = 3;
        } else if (index + 1 <= 4 * btnArray.length/4 && index + 1 > 3 * btnArray.length/4) {
            elem.style.gridRowStart = 4;
        }


        if ((index + 1) % 2 === 0) {
            if (index + 1 === 2 || index + 1 === 6 || index + 1 === 10 || index + 1 === 14) {
                elem.style.gridColumnStart = 2;
            } else if (index + 1 === 4 || index + 1 === 8 || index + 1 === 12 || index + 1 === 16) {
               elem.style.gridColumnStart = 4;
            }
        }
        if (!(index + 1) % 2 === 0) {
            if (index + 1 === 1 || index + 1 === 5 || index + 1 === 9 || index + 1 === 13) {
                elem.style.gridColumnStart = 1;
            } else if (index + 1 === 3 || index + 1 === 7 || index + 1 === 11 || index + 1 === 15) {
               elem.style.gridColumnStart = 3;
            }
        }

        // if (elem.style.backgroundColor === 'white') {
        //     whiteBtn = elem;
        //     whiteBtnIndex = index;
        //     whiteBtnX = elem.style.gridRowStart;
        //     whiteBtnY = elem.style.gridColumnStart;
        // }
    });
}

function switchBtn(array) {
    let direction;
    document.addEventListener('keyup', function (event) {
        switch (event.code) {
            case 'ArrowLeft':
                direction = 'left';
                break;
    
            case 'ArrowRight':
                direction = 'right';
                break;
        
            case 'ArrowUp':
                direction = 'top';
                break;
    
            case 'ArrowDown':
                direction = 'bottom';
                break;
        
            default:
                break;
        }
    });
    
    array.forEach(function (elem) {
        // elem.addEventListener('click', function () {
        //     if (elem.style.backgroundColor === 'white') {
        //         console.log('This is white btn nigger');
        //     } else {
        //         const elemX = elem.style.gridColumnStart;
        //         const elemY = elem.style.gridRowStart;
        //         const elemCoordinatesSum = +elemX + +elemY;
        //         const whiteBtnCoordinatesSum = +whiteBtnX + +whiteBtnY;
        //         let colorOfBtn;
    
        //         if (elemCoordinatesSum + 1 === whiteBtnCoordinatesSum || elemCoordinatesSum - 1 === whiteBtnCoordinatesSum) {
        //             colorOfBtn = elem.style.backgroundColor;
        //             whiteBtn.style.backgroundColor = colorOfBtn;
        //             elem.style.backgroundColor = 'white';
        //             whiteBtn = elem;
        //             whiteBtnX = elemX;
        //             whiteBtnY = elemY;
        //         }
        //     }
        // });

        elem.addEventListener('click', function () {
            const elemX = elem.style.gridRowStart;
            const elemY = elem.style.gridColumnStart;
            const elemCoordinatesSum = +elemX + +elemY;

            switch (direction) {
                case 'top':
                    const neighboringElemX = elemX - 1;
                    const neighboringElemY = elemY;

                    array.forEach(function (elem) {
                        const forEachElemX = elem.style.gridRowStart;
                        const forEachElemY = elem.style.gridColumnStart;

                        if (forEachElemY == neighboringElemY && forEachElemX == neighboringElemX) {
                            console.log(elem);
                            console.log(elem.style.backgroundColor);
                        }
                    });

                    // const neighboringElemColor = neighboringElem;
                    break;
            
                default:
                    break;
            }
        });
    });
}

// сделать чтоб переешаться могли любые притки, а не только белая
// сделать анимацию смены цвета плитки
// чтоб при этом в время анимации другие притки не могли двигаться
// сделать чтоб чекалось навидение на плитку и при нажатии на ентр она перемешалась
// сделать шкалу победы
// сделать комбинации победы

function winGame() {
    
}

function getStart() {
    stylizeField();
    createBtn();
    appendAllBtnOnDocument();
    stylizeBtn(btnArray);
    switchBtn(btnArray);
}

getStart();