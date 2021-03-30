'use strict';

//Получаем элементы со страницы
const pageHeader = document.querySelector('header');
const overlay = document.querySelector('.nav--overlay');
const iconBurger = document.querySelector('.header__button--burger');
const iconCross = document.querySelector('.header__button--cross');
const navSite = document.querySelector('nav');
const popupMap = document.querySelector('.popup-map');
const tabsSection = document.querySelector('.compare');


//Scroll Nav
const scrollNav = () => {
    window.addEventListener('scroll', () => {
        const navIcon = navSite.querySelectorAll('.nav__icon--side');
        const headLink = document.querySelector('.nav__link');

        if (document.documentElement.clientWidth > 768) {
            if (document.documentElement.scrollTop >= 76) {
                navSite.style.position = 'sticky';
                navSite.style.top = 0;
                navSite.style.zIndex = 2;
                navSite.style.boxShadow = `0px 5px 10px 2px rgba(34, 60, 80, 0.2)`;
                headLink.style.display = 'block';
                navIcon.forEach(item => {
                    item.style.transform = `translateX(0)`;
                })
            } else {
                headLink.style.display = '';
                navSite.style.boxShadow = '';
                navIcon.forEach(item => item.style.transform = '')
            }
        }

    })
};

scrollNav();


// Открываем меню по клику на бургер и открываем карту по клику на адрес
const toggleMenu = () => {
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

    popupMap.addEventListener('click', evt => {
        const target = evt.target;
        if (target.matches('.popup-map__button')) {
            popupMap.classList.remove('popup-map--active');
        } else {
            popupMap.classList.remove('popup-map--active');
        }
    });

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

};

toggleMenu();

//Табы

const tabs = () => {
    if (tabsSection) {
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
    }
};

tabs();

//Видео
const video = () => {
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
};

video();


//Анимация

const animation = () => {
    const feature = document.querySelector('.features');

    if (feature) {

    new WOW().init();
    }
};

animation();


//owlcarousel

const carouselMain = () => {

    const carousel = document.querySelector('.owl-carousel');
    // const productSlider = document.querySelector('.product-slider');

    $(document).ready(function () {
        if (carousel) {
            $('.owl-carousel').owlCarousel({
                loop: true,
                navText: ['&larr;', '&rarr;'],
                margin: 0,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                        dots: true,
                    },
                    360: {
                        items: 2,
                        dots: true,
                    },
                    768: {
                        items: 3,
                    },
                    1024: {
                        dots: false,
                        items: 5,
                    }
                }
            })
        }
    });
};

carouselMain();


// Фильтр 2 страница

const filter = () => {

    const catalog = document.querySelector('.catalog');

    if (catalog) {
        const catalogTabsContainer = catalog.querySelector('.container');
        const cards = catalog.querySelectorAll('.card__wrapper');

        catalogTabsContainer.addEventListener('click', evt => {
            const target = evt.target;

            for (const item of catalogTabsContainer.children) {
                if (item === target) {
                    item.classList.add('tab-active');
                } else {
                    item.classList.remove('tab-active');
                }
            }

            cards.forEach(item => {
                if (target.dataset.filter !== item.dataset.filter) {
                    item.classList.add('hidden');

                } else {
                    item.classList.remove('hidden');
                    item.parentElement.style.justifyContent = 'normal';
                    item.style.marginRight = `30px`;
                }
            })

        });
    }

};

filter();


//product-slider

const productSlider = () => {
    const productSliderMain = document.querySelector('.product-slider__main');
    const productSliderBottom = document.querySelector('.product-slider__bottom');

    if (productSliderMain && productSliderBottom) {

        $('.product-slider__main').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.product-slider__bottom',
            responsive: [
                {
                    breakpoint: 769,
                    settings: {
                        dots: true,
                    }
                }
            ]
        });

        $('.product-slider__bottom').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.product-slider__main',
            dots: false,
            variableWidth: true,
            prevArrow: `<button type="button" id="slick-prev">&larr;</button>`,
            nextArrow: `<button type="button" id="slick-next">&rarr;</button>`,
            centerMode: false,
            focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                }
            ]


        });

    }


};

productSlider();


// modal order

const modalOrder = () => {
    const modal = document.querySelector('.modal__order');
    const priceContainer = document.querySelector('.price');

    if (priceContainer) {
        priceContainer.addEventListener('click', evt => {
            const target = evt.target;

            if (target.closest('.button--wrapper')) {
                modal.style.display = 'block';
            }
        })
    }

    if (modal) {
        const modalClose = modal.querySelector('.order__button');

        modalClose.addEventListener('click', () => {
            modal.style.display = '';
        })
    }
};

modalOrder();

// page 3 tabs

const tabPrice = () => {

    const price = document.querySelector('.price');

    if (price) {
        const tabLinks = price.querySelectorAll('.price__link');
        const tabContainer = price.querySelector('.container');
        const tab2x = price.querySelector('.price__list--2x');
        const tab3x = price.querySelector('.price__list--3x');
        const tab4x = price.querySelector('.price__list--4x');
        const tab5x = price.querySelector('.price__list--5x');

        tabContainer.addEventListener('click', evt => {
            const target = evt.target;

            for (const link of tabLinks) {
                if (target === link) {
                    link.classList.add('price__link--active')
                } else {
                    link.classList.remove('price__link--active');
                }
            }


            if (target.dataset.filter === '2x') {

                tab2x.style.display = 'block';
                tab3x.style.display = 'none';
                tab4x.style.display = 'none';
                tab5x.style.display = 'none';
            }


            if (target.dataset.filter === '3x') {

                tab2x.style.display = 'none';
                tab3x.style.display = 'block';
                tab4x.style.display = 'none';
                tab5x.style.display = 'none';
            }

            if (target.dataset.filter === '3x') {
                tab2x.style.display = 'none';
                tab3x.style.display = 'none';
                tab4x.style.display = 'block';
                tab5x.style.display = 'none';
            }

            if (target.dataset.filter === '4x') {
                tab2x.style.display = 'none';
                tab3x.style.display = 'none';
                tab4x.style.display = 'none';
                tab5x.style.display = 'block';
            }


        })

    }

};

tabPrice();



