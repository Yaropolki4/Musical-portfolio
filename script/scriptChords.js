"use strict"


let menu = document.querySelector('.header-nav-menu');
let button = document.querySelector('.menu-icon');
button.addEventListener('click', function(event) {
    menu.classList.toggle('open');
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
})

let songsList = document.querySelector('.main-content-list-items');

class Song{
    constructor(title, artist, linkHTML, linkYT, linkPiano, navClass_1, navClass_2,navClass_3, navClass_4, navClass_5){
        this.title = title;
        this.artist = artist;
        this.linkHTML = linkHTML;
        this.linkYT = linkYT;
        this.linkPiano = linkPiano;
        this.navClass_1 = navClass_1;
        this.navClass_2 = navClass_2;
        this.navClass_3 = navClass_3;
        this.navClass_4 = navClass_4;
        this.navClass_5 = navClass_5;
    }
    MakeHTML(){
        return `<li class="main-content-list-item"><a href= "${this.linkHTML}" class="main-content-list-link"><span> ${this.artist} </span> — ${this.title}</a></li>
        <a target="_blank" href="${this.linkYT}" class="main-content-youtube-link"><img src="../image/icons/youtube.png" alt=""></a>
        <a target = "_blank" href = "${this.linkPiano}" class="main-content-piano-link"><img src="../image/icons/piano.png" alt=""></a>`
    }
}

let songs = [new Song('Я так соскучился', "Порнофильмы", 
            './songs/я-так-соскучился.html', 'https://www.youtube.com/watch?v=okzB9eQoHPs',
            'https://www.youtube.com/watch?v=OXOwZr2kF1k', 1, 1, 1, 0, 0),

            new Song('In the end', "Linkin park", 
            './songs/in-the-end.html', 'https://www.youtube.com/watch?v=eVTXPUF4Oz4',
            'https://www.youtube.com/watch?v=Vm0aFZBc4BE', 1, 0, 0, 0, 0),

            new Song('The kill', "30 second to mars", 
            './songs/я-так-соскучился.html', 'https://www.youtube.com/watch?v=okzB9eQoHPs',
            'https://www.youtube.com/watch?v=OXOwZr2kF1k', 0,0,0,0,0),

            new Song('Аминь', "Григорий Лепс", 
            './songs/я-так-соскучился.html', 'https://www.youtube.com/watch?v=okzB9eQoHPs',
            'https://www.youtube.com/watch?v=OXOwZr2kF1k', 0,0,0,0,0),

            new Song('Прости, прощай, привет', "Порнофильмы", 
            './songs/я-так-соскучился.html', 'https://www.youtube.com/watch?v=okzB9eQoHPs',
            'https://www.youtube.com/watch?v=OXOwZr2kF1k',0,1,1,0,0),

            new Song('Closer to the edge', "30 second to mars", 
            './songs/я-так-соскучился.html', 'https://www.youtube.com/watch?v=okzB9eQoHPs',
            'https://www.youtube.com/watch?v=OXOwZr2kF1k',0,1,0,0,0),

            new Song('My chemical romance', "Famous last words", 
            './songs/я-так-соскучился.html', 'https://www.youtube.com/watch?v=okzB9eQoHPs',
            'https://www.youtube.com/watch?v=OXOwZr2kF1k',0,0,0,0,0),

            new Song('Кукушка', "Виктор Цой", 
            './songs/я-так-соскучился.html', 'https://www.youtube.com/watch?v=okzB9eQoHPs',
            'https://www.youtube.com/watch?v=OXOwZr2kF1k',1,0,0,1,0),

            new Song('Стань', "Макс Корж", 
            './songs/я-так-соскучился.html', 'https://www.youtube.com/watch?v=okzB9eQoHPs',
            'https://www.youtube.com/watch?v=OXOwZr2kF1k',1,1,0,0,0),

            new Song('Шантаж', "Макс Корж", 
            './songs/я-так-соскучился.html', 'https://www.youtube.com/watch?v=okzB9eQoHPs',
            'https://www.youtube.com/watch?v=OXOwZr2kF1k',0,0,0,0,0),

            new Song('Тает дым', "Макс Корж", 
            './songs/я-так-соскучился.html', 'https://www.youtube.com/watch?v=okzB9eQoHPs',
            'https://www.youtube.com/watch?v=OXOwZr2kF1k',0,1,1,0,0),

            new Song('Малиновый закат', "Макс Корж", 
            './songs/я-так-соскучился.html', 'https://www.youtube.com/watch?v=okzB9eQoHPs',
            'https://www.youtube.com/watch?v=OXOwZr2kF1k',0,0,1,0,0),
            
            new Song('Малиновый свет', "Лёша Свик", 
            './songs/я-так-соскучился.html', 'https://www.youtube.com/watch?v=okzB9eQoHPs',
            'https://www.youtube.com/watch?v=OXOwZr2kF1k',0,0,1,0,0),
            
            new Song('Вечная любовь', "Денис Майданов", 
            './songs/я-так-соскучился.html', 'https://www.youtube.com/watch?v=okzB9eQoHPs',
            'https://www.youtube.com/watch?v=OXOwZr2kF1k',1,1,1,0,0),
            
            new Song('Сансара', "Баста", 
            './songs/я-так-соскучился.html', 'https://www.youtube.com/watch?v=okzB9eQoHPs',
            'https://www.youtube.com/watch?v=OXOwZr2kF1k',1,1,0,0,0),
        ];
            
        document.addEventListener("DOMContentLoaded", function(event){
            for (let song of songs){
                let beginContent = document.createElement('div');
                beginContent.classList.add('main-content-list-container');
                beginContent.innerHTML = song.MakeHTML();
                songsList.prepend(beginContent);
            }
        })


let searchForm = document.forms.searchForSong;

searchForm.addEventListener('submit', function(event){
    let regExp = new RegExp(`${searchForm.fieldForSearch.value}`, 'i');
    songsList.innerHTML = '';
    for (let song of songs){
        if(song.artist.match(regExp)!=null || song.title.match(regExp)!=null){
            let resultOfSearch = document.createElement('div');
            resultOfSearch.classList.add('main-content-list-container');
            resultOfSearch.innerHTML = song.MakeHTML();
            songsList.prepend(resultOfSearch);
        }
    }
    event.preventDefault();
});

let navButton_0 = document.querySelector(".all");
let navButton_1 = document.querySelector(".allKnown");
let navButton_2 = document.querySelector(".soul");
let navButton_3 = document.querySelector(".love");
let navButton_4 = document.querySelector(".old");
let navButton_5 = document.querySelector(".trash");

navButton_0.addEventListener('click', function(event){
    songsList.innerHTML = '';
    for (let song of songs){
        let resultOfSearch = document.createElement('div');
        resultOfSearch.classList.add('main-content-list-container');
        resultOfSearch.innerHTML = song.MakeHTML();
        songsList.prepend(resultOfSearch);
    }
    navList.classList.remove('visible');
})


navButton_1.addEventListener('click', function(event){
    songsList.innerHTML = '';
    for (let song of songs){
        if(song.navClass_1==1){
            let resultOfSearch = document.createElement('div');
            resultOfSearch.classList.add('main-content-list-container');
            resultOfSearch.innerHTML = song.MakeHTML();
            songsList.prepend(resultOfSearch);
        }
    }
    navList.classList.remove('visible');
})

navButton_2.addEventListener('click', function(event){
    songsList.innerHTML = '';
    for (let song of songs){
        if(song.navClass_2==1){
            let resultOfSearch = document.createElement('div');
            resultOfSearch.classList.add('main-content-list-container');
            resultOfSearch.innerHTML = song.MakeHTML();
            songsList.prepend(resultOfSearch);
        }
    }
    navList.classList.remove('visible');
})

navButton_3.addEventListener('click', function(event){
    songsList.innerHTML = '';
    for (let song of songs){
        if(song.navClass_3==1){
            let resultOfSearch = document.createElement('div');
            resultOfSearch.classList.add('main-content-list-container');
            resultOfSearch.innerHTML = song.MakeHTML();
            songsList.prepend(resultOfSearch);
        }
    }
    navList.classList.remove('visible');
})

navButton_4.addEventListener('click', function(event){
    songsList.innerHTML = '';
    for (let song of songs){
        if(song.navClass_4==1){
            let resultOfSearch = document.createElement('div');
            resultOfSearch.classList.add('main-content-list-container');
            resultOfSearch.innerHTML = song.MakeHTML();
            songsList.prepend(resultOfSearch);
        }
    }
    navList.classList.remove('visible');

})

navButton_5.addEventListener('click', function(event){
    songsList.innerHTML = '';
    for (let song of songs){
        if(song.navClass_5==1){
            let resultOfSearch = document.createElement('div');
            resultOfSearch.classList.add('main-content-list-container');
            resultOfSearch.innerHTML = song.MakeHTML();
            songsList.prepend(resultOfSearch);
        }
    }
    navList.classList.remove('visible');
})

