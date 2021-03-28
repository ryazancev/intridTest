'use strict';

//Получаем элементы со страницы
const pageHeader = document.querySelector('header');
const overlay = document.querySelector('.nav--overlay');
const iconBurger = document.querySelector('.header__button--burger');
const iconCross = document.querySelector('.header__button--cross');
const navSite = document.querySelector('nav');
const popupMap = document.querySelector('.popup-map');
const tabsSection = document.querySelector('.compare');


// Открываем меню по клику на бургер и открываем карту по клику на адрес
pageHeader.addEventListener('click', evt => {
    const target = evt.target;

    if (target.closest('.header__button')) {
        iconBurger.classList.toggle('deactive');
        iconCross.classList.toggle('deactive');
        navSite.classList.toggle('menu-close');
        overlay.classList.toggle('menu-close');
    }

    if (target.matches('#map')) {
        evt.preventDefault();
        popupMap.classList.add('popup-map--active');
    }
})

//Закрываем карту кликом на оверлей

popupMap.addEventListener('click', () => {
    popupMap.classList.remove('popup-map--active');
})

//Закрытие меню по клику на пункты
navSite.addEventListener('click', evt => {
    const target = evt.target;

    if (target.matches('.nav__link')) {
        navSite.classList.add('menu-close')
        iconBurger.classList.toggle('deactive');
        iconCross.classList.toggle('deactive');
    } else {
        navSite.classList.add('menu-close')
        iconBurger.classList.toggle('deactive');
        iconCross.classList.toggle('deactive');
    }
});

//Табы

tabsSection.addEventListener('click', evt => {
    evt.preventDefault();
    const target = evt.target;

    const garlic = document.getElementById('garlic');
    const potato = document.getElementById('potato');
    const onion = document.getElementById('onion');
    const garlicTab = document.querySelector('.compare__link--g');
    const potatoTab = document.querySelector('.compare__link--p');
    const onionTab = document.querySelector('.compare__link--o');


    if (target === garlicTab) {
        garlic.style.display = 'block';
        garlicTab.classList.add('compare__link--active');

        potato.style.display = 'none';
        potatoTab.classList.remove('compare__link--active');

        onion.style.display = 'none';
        onionTab.classList.remove('compare__link--active');
    }

    if (target === potatoTab) {
        potato.style.display = 'block';
        potatoTab.classList.add('compare__link--active');

        garlic.style.display = 'none';
        garlicTab.classList.remove('compare__link--active');

        onion.style.display = 'none';
        onionTab.classList.remove('compare__link--active');
    }

    if (target === onionTab) {
        onion.style.display = 'block';
        onionTab.classList.add('compare__link--active');

        garlic.style.display = 'none';
        garlicTab.classList.remove('compare__link--active');

        potato.style.display = 'none';
        potatoTab.classList.remove('compare__link--active');
    }


})


//Видео

function findVideos() {
    const videos = document.querySelectorAll('.video');

    for (let i = 0; i < videos.length; i++) {
        setupVideo(videos[i]);
    }
}

function setupVideo(video) {
    const link = video.querySelector('.video__link');
    const media = video.querySelector('.video__media');
    const button = video.querySelector('.video__button');
    const id = parseMediaURL(media);
    video.addEventListener('click', function () {
        const iframe = createIframe(id);
        link.remove();
        button.remove();
        video.appendChild(iframe);
    });
    link.removeAttribute('href');
    video.classList.add('video--enabled');
}

function parseMediaURL(media) {
    const regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/hqdefault\.jpg/i;
    const url = media.src;
    const match = url.match(regexp);
    return match[1];
}

function createIframe(id) {
    const iframe = document.createElement('iframe');
    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('allow', 'autoplay');
    iframe.setAttribute('src', generateURL(id));
    iframe.classList.add('video__media');
    return iframe;
}

function generateURL(id) {
    const query = '?rel=0&showinfo=0&autoplay=1';
    return 'https://www.youtube.com/embed/' + id + query;
}

findVideos();

//Анимация

new WOW().init();

//owlcarousel
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        navText: ['&larr;', '&rarr;'],
        margin:0,
        responsiveClass:true,
        responsive:{
            0:{
                items:2,
                dots: true,
            },
            768: {
                items: 3,
            },
            1024:{
                dots: false,
                items:5,
            }
        }
    })
});

const carousel = document.querySelector('.owl-carousel');

carousel.addEventListener('mouseover', evt => {
    const target = evt.target;

    if (target.matches('.owl-prev')) {
        $(".owl-carousel").trigger('prev.owl.carousel');
    }

    if (target.matches('.owl-next')) {
        $(".owl-carousel").trigger('next.owl.carousel');
    }
});




