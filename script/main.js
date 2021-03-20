'use strict';

//Получаем элементы со страницы
const burgerButton = document.getElementById('burger');
const navSite = document.querySelector('.nav-site');
const cards = document.querySelectorAll('.card');

//Функция открытия закрытия меню
const handleClickMenu = () => {
    burgerButton.classList.toggle('page-header__button--active');
    navSite.classList.toggle('menu-close');
};

//Клик
burgerButton.addEventListener('click', handleClickMenu);

//Закрытие меню по клику на пункты и оверлей
navSite.addEventListener('click', evt => {
    const target = evt.target;

    if (target.matches('.nav-site__link')) {
        navSite.classList.add('menu-close');
    }

    if (!target.closest('.nav-site__list')) {
        navSite.classList.add('menu-close');
    }
});

//Ховер на карточки товаров
cards.forEach(item => {
    item.addEventListener('mouseenter', evt => {
        const target = evt.target;

        target.children[1].classList.add('card--active')

    });

    item.addEventListener('mouseleave', evt => {
        const target = evt.target;

        target.children[1].classList.remove('card--active')

    });
});
