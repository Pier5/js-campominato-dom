
let btnPlay = document.querySelector('#btn-play');
let output = document.querySelector('.output');
let outputTwo = document.querySelector('.output-two');
let difficulty = document.querySelector('#difficulty');
let easy = document.querySelector('#easy');
let medium = document.querySelector('#medium');
let hard = document.querySelector('#hard');
let textShadow = document.querySelector('.text-shadow');
let arrRandom = [];

btnPlay.addEventListener('click', function() {
    textShadow.classList.add('shadow');
    output.innerHTML = ''; 
    outputTwo.innerHTML = ''; 
    score = 0;
    
    if(easy.selected) {
        for (let i = 0; i < 16; i++) {
            let randomNumber;
            do {
                randomNumber = getRandomNumber(1, 100);
            } while (arrRandom.includes(randomNumber))
                arrRandom.push(randomNumber);  
            }
        for (let i = 1; i <= 100; i++) {
            let element = document.createElement('div');
            element.classList.add('box');
            element.innerHTML = i;
            output.append(element);
            element.style.width = `calc(100% / 10)`;
            element.style.height = `calc(100% / 10)`;    
            element.addEventListener('click', manageClick);   
        }  
    } else if (medium.selected) {
        for (let i = 0; i < 16; i++) {
            let randomNumber;
            do {
                randomNumber = getRandomNumber(1, 81);
            } while (arrRandom.includes(randomNumber))
                arrRandom.push(randomNumber);  
            }
        for (let i = 1; i <= 81; i++) {
            let element = document.createElement('div');
            element.classList.add('box');
            element.innerHTML = i;
            output.append(element);
            element.style.width = `calc(100% / 9)`;
            element.style.height = `calc(100% / 9)`;
            element.addEventListener('click', manageClick);   

        }
    } else if (hard.selected) {
        for (let i = 0; i < 16; i++) {
            let randomNumber;
            do {
                randomNumber = getRandomNumber(1, 49);
            } while (arrRandom.includes(randomNumber))
                arrRandom.push(randomNumber);  
            }
        for (let i = 1; i <= 49; i++) {
            let element = document.createElement('div');
            element.classList.add('box');
            element.innerHTML = i;
            output.append(element);
            element.style.width = `calc(100% / 7)`;
            element.style.height = `calc(100% / 7)`;
            element.addEventListener('click', manageClick);  
        }  
    }
})

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function manageClick() {
    cellValue = parseInt(this.innerHTML);
    if (arrRandom.includes(cellValue)) {
        this.classList.add('bomb-box');
        outputTwo.innerHTML = `Hai perso: il tuo punteggio è ${score}`;
        let cells = document.querySelectorAll('.box');
        for (i = 0; i < cells.length; i++) {
            cells[i].removeEventListener('click', manageClick);
        }
    } else {
        this.classList.add('safe-box');
        ++score;
    }
    this.removeEventListener('click', manageClick);
}



  



