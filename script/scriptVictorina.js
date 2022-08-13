let menu = document.querySelector('.header-nav-menu');
let button = document.querySelector('.menu-icon')
button.addEventListener('click', function(event) {
    menu.classList.toggle('open');
});


let likeButton = document.querySelector('.main-mark-like');
let middleLikeButton = document.querySelector('.main-mark-middlelike');
let dislikeButton = document.querySelector('.main-mark-dislike');

let counterNumberMobile = document.querySelector('.main-progress-counter-mobile .main-progress-counter-number');
let counterBlockMobile = document.querySelectorAll('.main-progress-counter-mobile .main-progress-counter-cover');
let counterNumber = document.querySelector('.main-progress-counter .main-progress-counter-number');
let counterBlock = document.querySelectorAll('.main-progress-counter .main-progress-counter-cover');

let victorinaItems = document.querySelectorAll('.main-victorina-items');
let victorinaVideo = document.querySelectorAll('.main-victorina-items iframe');

let victorinaText = document.querySelector('.main-victorina-content-text');

let counter = 0;
let reputation = 0;

let victorinaItemGreen = document.querySelector('.main-victorina-items-green');
let victorinaItemYellow = document.querySelector('.main-victorina-items-yellow');
let victorinaItemRed = document.querySelector('.main-victorina-items-red');

let progressList = document.querySelectorAll('.main-progress-list-items');

likeButton.addEventListener('click', function(event){
    if(counter==7){
        reputation++
        console.log(reputation);
        if(reputation>3) victorinaItemGreen.classList.remove('invis');
        else if(reputation<4 & reputation>-4) victorinaItemYellow.classList.remove('invis');
        else victorinaItemRed.classList.remove('invis');
        victorinaItems[counter].classList.add('invis');
        counterBlock[counter-1].classList.remove('invis');
        counterBlockMobile[counter-1].classList.remove('invis');
        counterNumber.innerHTML = `${counter}/7`;
        counterNumberMobile.innerHTML = `${counter}/7`;
        progressList[counter].classList.add('green');
        progressList[counter].classList.remove('invis');
        victorinaVideo[counter-1].src = victorinaVideo[counter-1].src;
        counter++;
    }
})

likeButton.addEventListener('click', function(event){
    if(counter>0 & counter<7){
        reputation++;
        console.log(reputation);
        victorinaItems[counter].classList.add('invis');
        victorinaItems[counter+1].classList.remove('invis');
        counterBlock[counter-1].classList.remove('invis');
        counterBlockMobile[counter-1].classList.remove('invis');
        counterNumber.innerHTML = `${counter}/7`;
        counterNumberMobile.innerHTML = `${counter}/7`;
        progressList[counter].classList.add('green');
        progressList[counter].classList.remove('invis');
        victorinaVideo[counter-1].src = victorinaVideo[counter-1].src;
        counter++;
    }
})


likeButton.addEventListener('click', function(event){
    if(counter==0){
        console.log(reputation);
        victorinaItems[counter].classList.add('invis');
        victorinaItems[counter+1].classList.remove('invis');
        counter++;
    }
    
});

middleLikeButton.addEventListener('click', function(event){
    if(counter==7){
        console.log(reputation);
        if(reputation>3) victorinaItemGreen.classList.remove('invis');
        else if(reputation<4 & reputation>-4) victorinaItemYellow.classList.remove('invis');
        else victorinaItemRed.classList.remove('invis');
        victorinaItems[counter].classList.add('invis');
        counterBlock[counter-1].classList.remove('invis');
        counterBlockMobile[counter-1].classList.remove('invis');
        counterNumber.innerHTML = `${counter}/7`;
        counterNumberMobile.innerHTML = `${counter}/7`;
        progressList[counter].classList.add('yellow');
        progressList[counter].classList.remove('invis');
        victorinaVideo[counter-1].src = victorinaVideo[counter-1].src;
        counter++;
    }
})

middleLikeButton.addEventListener('click', function(event){
    if(counter==0) victorinaText.innerHTML = '<span>Нажми на лайк!</span>';
    if(counter>0 & counter<7){
        console.log(reputation);
        victorinaItems[counter].classList.add('invis');
        victorinaItems[counter+1].classList.remove('invis');
        counterBlock[counter-1].classList.remove('invis');
        counterBlockMobile[counter-1].classList.remove('invis');
        counterNumber.innerHTML = `${counter}/7`;
        counterNumberMobile.innerHTML = `${counter}/7`;
        progressList[counter].classList.add('yellow');
        progressList[counter].classList.remove('invis');
        victorinaVideo[counter-1].src = victorinaVideo[counter-1].src;
        counter++;
    }
});
    
dislikeButton.addEventListener('click', function(event){
    if(counter==7){
        reputation--
        console.log(reputation);
        if(reputation>3) victorinaItemGreen.classList.remove('invis');
        else if(reputation<4 & reputation>-4) victorinaItemYellow.classList.remove('invis');
        else victorinaItemRed.classList.remove('invis');
        victorinaItems[counter].classList.add('invis');
        counterBlock[counter-1].classList.remove('invis');
        counterBlockMobile[counter-1].classList.remove('invis');
        counterNumber.innerHTML = `${counter}/7`;
        counterNumberMobile.innerHTML = `${counter}/7`;
        progressList[counter].classList.add('red');
        progressList[counter].classList.remove('invis');
        victorinaVideo[counter-1].src = victorinaVideo[counter-1].src;
        counter++;
    }
})

dislikeButton.addEventListener('click', function(event){
    if(counter==0) victorinaText.innerHTML ='<span>Нажми на лайк!</span>';
    if(counter>0 & counter<7){
        reputation--;
        console.log(reputation);
        victorinaItems[counter].classList.add('invis');
        victorinaItems[counter+1].classList.remove('invis');
        counterBlock[counter-1].classList.remove('invis');
        counterBlockMobile[counter-1].classList.remove('invis');
        counterNumber.innerHTML = `${counter}/7`;
        counterNumberMobile.innerHTML = `${counter}/7`;
        progressList[counter].classList.add('red');
        progressList[counter].classList.remove('invis');
        victorinaVideo[counter-1].src = victorinaVideo[counter-1].src;
        counter++;
    }
});
