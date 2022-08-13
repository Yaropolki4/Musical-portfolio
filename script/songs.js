"use strict"

let menu = document.querySelector('.header-nav-menu');
let button = document.querySelector('.menu-icon');
let counter = document.querySelector(".tone-counter");


button.addEventListener('click', function(event) {
    menu.classList.toggle('open');
});


let i = 0;
let j = 0;
let timeId = [];
let scrollPlus = document.querySelectorAll('.button-tone-plus')[0];
scrollPlus.addEventListener('click', function(event){
    if(i-j<=5){
        timeId[i] = setInterval(() => window.scrollBy(0,5), 1000);
        i++;
        counter.innerHTML = `Скролл: ${i-j}`;
    }
}
);
let scrollMinus = document.querySelectorAll('.button-tone-minus')[0];
scrollMinus.addEventListener('click', function(event){
    if(i!=j){
        clearInterval(timeId[j]);
        j++;
        counter.innerHTML = `Скролл: ${i-j}`;
    }
});

let majChords = ['C', 'Cd', 'D', 'Dd', 'E', 'F', 'Fd', 'G', 'Gd', 'A', 'Bb', 'H'];
let toneCounterObject = document.querySelectorAll(".tone-counter")[1];
let toneCounterNumber = 0;

let chord = document.querySelectorAll('.chord');
let toneButtonPlus = document.querySelectorAll('.button-tone-plus')[1];
let toneButtonMinus = document.querySelectorAll('.button-tone-minus')[1];

let regExp = /[A-Z]{1}d?b?/;

toneButtonPlus.addEventListener('click', function(event){
    toneCounterNumber++;
    if(toneCounterNumber==12){
        toneCounterNumber=0;
    }
    toneCounterObject.innerHTML = `Тональность: ${toneCounterNumber}`;
    for(let elem of chord){
        if (majChords.indexOf(`${elem.classList[1]}`.match(regExp)[0])==11){
            elem.classList.add(`${majChords[0]}`);
        }
        else {
            elem.classList.add(`${majChords[majChords.indexOf(`${elem.classList[1]}`.match(regExp)[0])+1]}`);
        }
        elem.classList.remove(`${elem.classList[1]}`);
    }
});

toneButtonMinus.addEventListener('click', function(event){
    toneCounterNumber--;
    if(toneCounterNumber==-12){
        toneCounterNumber=0;
    }
    toneCounterObject.innerHTML = `Тональность: ${toneCounterNumber}`;
    for(let elem of chord){
        if (majChords.indexOf(`${elem.classList[1]}`.match(regExp)[0])==0){
            elem.classList.add(`${majChords[11]}`);
        }
        else {
            elem.classList.add(`${majChords[majChords.indexOf(`${elem.classList[1]}`.match(regExp)[0])-1]}`);
        }
        elem.classList.remove(`${elem.classList[1]}`);
    }
});



let arrow = document.querySelector('.menu-arrow');
let navList = document.querySelector('.main-nav-list');

document.addEventListener('click', function(event){
    if(event.target.closest('.menu-arrow')){
        navList.classList.toggle('visible');
        arrow.classList.toggle('visible');
    }
    else if(!event.target.closest('.main-nav-list')){
        navList.classList.remove('visible');
        arrow.classList.add('visible');
    }
});


let searchForm = document.forms.searchForSong;
searchForm.addEventListener('submit', function(event){
    window.location.href = "../chords.html";
    event.preventDefault();
});
