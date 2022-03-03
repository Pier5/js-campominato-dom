// Il computer deve generare 16 numeri casuali nello stesso range 
// della difficoltà prescelta: le bombe.
// I numeri nella lista delle bombe non possono essere duplicati.
// In seguito l'utente clicca su una cella: se il numero è presente 
// nella lista dei numeri generati - abbiamo calpestato una 
// bomba - la cella si colora di rosso e la partita termina, altrimenti la cella 
// cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o raggiunge il numero
// massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, 
// cioè il numero di volte che l’utente ha cliccato su una cella che non era una b.


let btnPlay = document.querySelector('#btn-play');
let output = document.querySelector('.output');
// let easy = document.querySelector('#easy');
// let medium = document.querySelector('#medium');
// let hard = document.querySelector('#hard');
let textShadow = document.querySelector('.text-shadow');
let bombs;
let randomBombs = [];


btnPlay.addEventListener('click', function() {
    textShadow.classList.add('shadow');
    output.innerHTML = '';
    generateBombs();
    
    if(easy.selected) {
        for (let i = 1; i <= 100; i++) {
            let element = document.createElement('div');
            element.classList.add('box');
            element.innerHTML = i;
            output.append(element);
            element.style.width = `calc(100% / 10)`;
            element.style.height = `calc(100% / 10)`;
            element.addEventListener('click', changeCellsColor);
        }             
    } else if (medium.selected) {
        for (let i = 1; i <= 81; i++) {
            let element = document.createElement('div');
            element.classList.add('box');
            element.innerHTML = i;
            output.append(element);
            element.style.width = `calc(100% / 9)`;
            element.style.height = `calc(100% / 9)`;
            element.addEventListener('click', changeCellsColor);
        }
    } else if (hard.selected) {
        for (let i = 1; i <= 49; i++) {
            let element = document.createElement('div');
            element.classList.add('box');
            element.innerHTML = i;
            output.append(element);
            element.style.width = `calc(100% / 7)`;
            element.style.height = `calc(100% / 7)`;
            element.addEventListener('click', changeCellsColor);
        }  
    }
})

function changeCellsColor() {
    this.classList.add('safe-box');
}

function changeCellsColorRed() {
    this.classList.add('bomb-box');
}

function generateBombs() {
    for (b = 1; b <= 16; b++) {
        bombs = Math.floor(Math.random() * 100);
        while (randomBombs.includes(bombs)) {
        bombs = Math.floor(Math.random() * 100);
        }
        randomBombs.push(bombs); 
    }  
}

