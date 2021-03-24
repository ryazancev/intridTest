'use strict';

//Получаем элементы со страницы
const pageHeader = document.querySelector('header');
const iconBurger = document.querySelector('.page-header__button--burger');
const iconCross = document.querySelector('.page-header__button--cross');
const navSite = document.querySelector('nav');
const popupMap = document.querySelector('.popup-map');

//Функция открытия закрытия меню
// const handleClickMenu = () => {
//     iconBurger.classList.toggle('deactive');
//     iconCross.classList.toggle('deactive');
//     navSite.classList.toggle('menu-close');
// };
//
// //Клик
// burgerButton.addEventListener('click', handleClickMenu);

// Открываем меню по клику на бургер и открываем карту по клику на адрес
pageHeader.addEventListener('click', evt => {
    const target = evt.target;

    if (target.closest('#burger')) {
        iconBurger.classList.toggle('deactive');
        iconCross.classList.toggle('deactive');
        navSite.classList.toggle('menu-close');
    }

    if (target.matches('.page-header__item--map')) {
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


