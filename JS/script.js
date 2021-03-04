const cover = 'Images/cover.jpg';
const rabbit = 'Images/rabbit.jpg';
const bear = 'Images/bear.jpg';
const reindeer = 'Images/reindeer.jpg';
const girraffe = 'Images/girraffe.jpg';
const cat = 'Images/cat.jpg';
const pig = 'Images/pig.jpg';
const lion = 'Images/lion.jpg';
const pinguin = 'Images/pinguin.jpg'



function hideHeader(){
    const header = document.getElementById('header');
    header.setAttribute('class', 'hide');
}
function addCounter(){
    const counter = document.getElementById('counter');
    const counter1 = document.createElement('p');
    counter1.textContent = '0';
    counter1.setAttribute('id', 'counter-styles' );
    counter.appendChild(counter1);

}

function showGameBoard(){
    const card = Array.from(document.querySelectorAll('div.card'));
    for(let i = 0; i < card.length; i++){
        const elementImage = new Image();
        elementImage.setAttribute ('src', cover);
        elementImage.setAttribute('class', 'square');
        elementImage.setAttribute('id', `${i}`);
        card[i].appendChild(elementImage);
    }  
  }

function addButton(){
    const buttonContainer = document.getElementById('button2-position');
    const button = document.createElement('button');
    button.setAttribute('class', 'button-style');
    button.textContent = 'NOWA GRA';
    buttonContainer.appendChild(button);  
}


function startGame(){
    const btn = document.getElementById('button1');
    btn.addEventListener('click', hideHeader);
    btn.addEventListener('click', addCounter);
    btn.addEventListener('click', showGameBoard);
    btn.addEventListener('click', addButton);
}
startGame();


const animalArray = [rabbit, rabbit, bear, bear, reindeer, reindeer, girraffe, girraffe, cat, cat, pig, pig, lion, lion, pinguin, pinguin];
const randomArray = [];

 function getRandomArray() { 
    const helpArray = [];
    while(randomArray.length < 16){
        let randomIndex = Math.floor(Math.random()*16);

        if(helpArray.indexOf(randomIndex) === -1){
            helpArray.push(randomIndex);
            randomArray.push(animalArray[randomIndex]);
        }
        else {
            continue;
        }
    }
    return randomArray;
    
}
getRandomArray();




let movesCounter = 0;
    
let canClick = true;

const arrImg = [];
const indxArr = [];
const helpIndxArr = [];
const arrEndGame =[];

function hideCard(indxArr){
    const list = document.querySelectorAll('.square');
    list[indxArr[0]].src = cover;
    list[indxArr[1]].src = cover;
    arrImg.length = 0;
    indxArr.length = 0;
    canClick = true;
}


function addNewImage(e){
    if(canClick == true){
        let indx = e.target.getAttribute('id');
        let img = randomArray[indx];
        e.target.src = img;

        if((indxArr.indexOf(indx) === -1) && (helpIndxArr.indexOf(indx) === -1)){
            arrImg.push(img);
            indxArr.push(indx);
        }   
    
    
        if(arrImg.length === 2){
            movesCounter += 1;
            const cnt = document.getElementById('counter-styles');
            cnt.textContent = movesCounter;
        
            canClick = false;
        
            if(arrImg[0] === arrImg[1]){
            helpIndxArr.push(indxArr[0]);
            helpIndxArr.push(indxArr[1]);
            arrEndGame.push(arrImg[0]);
                arrEndGame.push(arrImg[1]);
                arrImg.length = 0;
                indxArr.length = 0;
                canClick = true;
                if(arrEndGame.length === 16){
                    endGame()
                }
            }
            else{
                setTimeout(hideCard, 2000,indxArr);
            }
        }
    }
}



function showCard(){
         
const card = document.querySelectorAll('.card'); 
card.forEach((cd) => {cd.addEventListener('click', addNewImage);})

}
showCard();





function endGame(){
    
    const counterStyles = document.getElementById('counter-styles');
    counterStyles.textContent = `GRATULACJE TWÓJ WYNIK TO ${movesCounter} RUCHÓW`;
    
}




function showNewGameboard(){
        
    const squaresList = document.querySelectorAll('.square');
    squaresList.forEach(sq => {sq.src = cover});

    movesCounter = 0;
    const cnt = document.getElementById('counter-styles');
    cnt.textContent = movesCounter;

    randomArray.length = 0;
    arrImg.length = 0;
    indxArr.length = 0;
    helpIndxArr.length = 0;
    arrEndGame.length = 0;

    getRandomArray();
        
    canClick = true;
   
    }

function startGameAgain(){
    const newGame = document.getElementById('button2-position');
    newGame.addEventListener('click', showNewGameboard);
}

startGameAgain();
