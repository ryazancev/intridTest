'use strict';

//Получаем элементы со страницы
const pageHeader = document.querySelector('header');
const iconBurger = document.querySelector('.header__button--burger');
const iconCross = document.querySelector('.header__button--cross');
const navSite = document.querySelector('nav');
const popupMap = document.querySelector('.popup-map');


// Открываем меню по клику на бургер и открываем карту по клику на адрес
pageHeader.addEventListener('click', evt => {
    const target = evt.target;

    if (target.matches('.header__button--burger')) {
        iconBurger.classList.toggle('deactive');
        iconCross.classList.toggle('deactive');
        navSite.classList.toggle('active');
    }

    if (target.matches('#map')) {
        evt.preventDefault();
        popupMap.classList.add('popup-map--active');
    }
})

//Закрываем карту кликом на оверлей

popupMap.addEventListener('click', evt => {
    const target = evt.target;

    if (!target.matches('.popup-map__item')) popupMap.classList.remove('popup-map--active');
})

//Закрытие меню по клику на пункты и оверлей
navSite.addEventListener('click', evt => {
    const target = evt.target;

    if (target.matches('.nav-site__link')) {
        navSite.classList.add('menu-close')
        iconBurger.classList.toggle('deactive');
        iconCross.classList.toggle('deactive');
    };

    if (!target.closest('.nav-site__list')) {
        navSite.classList.add('menu-close')
        iconBurger.classList.toggle('deactive');
        iconCross.classList.toggle('deactive');
    };
});

//Видео

// function findVideos() {
//     var videos = document.querySelectorAll('.video');
//
//     for (var i = 0; i < videos.length; i++) {
//         setupVideo(videos[i]);
//     }
// }
//
// function setupVideo(video) {
//     var link = video.querySelector('.video__link');
//     var media = video.querySelector('.video__media');
//     var button = video.querySelector('.video__button');
//     var id = parseMediaURL(media);
//     video.addEventListener('click', function () {
//         var iframe = createIframe(id);
//         link.remove();
//         button.remove();
//         video.appendChild(iframe);
//     });
//     link.removeAttribute('href');
//     video.classList.add('video--enabled');
// }
//
// function parseMediaURL(media) {
//     var regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
//     var url = media.src;
//     var match = url.match(regexp);
//     return match[1];
// }
//
// function createIframe(id) {
//     var iframe = document.createElement('iframe');
//     iframe.setAttribute('allowfullscreen', '');
//     iframe.setAttribute('allow', 'autoplay');
//     iframe.setAttribute('src', generateURL(id));
//     iframe.classList.add('video__media');
//     return iframe;
// }
//
// function generateURL(id) {
//     var query = '?rel=0&showinfo=0&autoplay=1';
//     return 'https://www.youtube.com/embed/' + id + query;
// }
//
// findVideos();


