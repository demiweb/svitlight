let headerSearch = [...document.querySelectorAll('header input[type="search"]')];
console.log(headerSearch);

function checkSearchField() {
    if (!headerSearch.length) {

    } else {
        headerSearch.forEach((srch) => {
            srch.addEventListener('input', () => {
                let val = srch.value;
                if (val.length < 1) {
                    srch.classList.remove('not-empty');
                    srch.closest('.header__search').classList.remove('have-results');

                } else {
                    srch.classList.add('not-empty');
                }
            });
            srch.addEventListener('keydown', (e) => {
                if (e.keyCode == 13) {
                    if (e.target.value < 1) {

                    } else {
                        srch.closest('.header__search').classList.add('have-results');

                    }
                }
                ;


            });
        })
    }

}

checkSearchField();

$('.main-slider').slick({
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    variableWidth: false,
    autoplay: true,
    autoplaySpeed: 2200,
    speed: 800,
    fade: true,
    cssEase: 'linear',
    nextArrow: '<button class="slick-slider-arrow slick-next"></button>',
    prevArrow: '<button class="slick-slider-arrow slick-prev"></button>'
    // useTransform: true,
});


let addFavorite = [...document.querySelectorAll('.favorite')];

function favAdding() {
    if (!addFavorite.length) {

    } else {
        addFavorite.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.classList.toggle('active')
            })
        })

    }
}

favAdding();
let addCart = [...document.querySelectorAll('.add-cart')];

function cartAdding() {
    if (!addCart.length) {

    } else {
        addCart.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.classList.toggle('active');
            })
        })

    }
}

cartAdding();

//burger menu

let burgerBtn = [...document.querySelectorAll('.header__burger')];

function burgerMenuOpen() {
    if (!burgerBtn.length) {

    } else {
        burgerBtn.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.classList.toggle('open');
                document.querySelector('.header__bottom-line').classList.toggle('open');
                btn.closest('header').classList.toggle('open');
                let activeModal = document.querySelector('.open-modal.active');
                document.body.classList.toggle('no-scroll');
                if(!activeModal) {

                } else {
                    activeModal.classList.remove('active');
                    document.querySelector('.modal-window.open').classList.remove('open');
                    document.body.classList.add('no-scroll');
                }

            })
        })
    }
}

burgerMenuOpen();

//burger menu

// document.body.addEventListener('wheel', (e) => {
//     let side = e.deltaY;
//     let btmLine = document.querySelector('.header__bottom-line');
//
//     if (!btmLine) {
//
//     } else {
//         let height = btmLine.clientHeight;
//         if (e.target.closest('.seo-block__content') || e.target.closest('.seo-block__cont')) {
//             e.stopPropagation();
//         } else {
//             if (window.innerWidth > 600) {
//                 if (side > 0) {
//                     document.querySelector('header').classList.add('scroll-down');
//                     document.querySelector('header').nextElementSibling.style.marginTop = `${height}px`;
//                 } else {
//                     document.querySelector('header').classList.remove('scroll-down');
//                     document.querySelector('header').nextElementSibling.style.marginTop = `0px`;
//                 }
//             } else {
//                 document.querySelector('header').nextElementSibling.style.marginTop = `0px`;
//                 document.querySelector('header').classList.remove('scroll-down');
//
//             }
//         }
//     }
//
//
//
// });

//slider product page

$('.slider-product-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.slider-product-nav',
    nextArrow: '<button class="slick-slider-arrow slick-next"></button>',
    prevArrow: '<button class="slick-slider-arrow slick-prev"></button>'
});
$('.slider-product-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-product-for',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    vertical: true,
    nextArrow: '<button class="slick-slider-arrow slick-next"></button>',
    prevArrow: '<button class="slick-slider-arrow slick-prev"></button>'
});

//slider product page

//filter checkbox

let filterCheckBox = [...document.querySelectorAll('.filter-prod input[type="checkbox"]')];

function ifFilterConsist() {
    if (!filterCheckBox.length) {

    } else {
        filterCheckBox.forEach((chk) => {
            if (!chk.closest('label')) {

            } else {
                chk.closest('label').classList.add('checkbox-have')

            }
        })
    }
};
ifFilterConsist();


let filterDropDown = [...document.querySelectorAll('.filter-prod .dropdown-toggle')];

function filterDropConsist() {
    if (!filterDropDown.length) {

    } else {
        filterDropDown.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.closest('.dropdown').classList.toggle('open');
            })
        })
    }
}

filterDropConsist();


let openedMobFilter = [...document.querySelectorAll('.ocfilter .panel-heading')];

function openMobFilter() {
    if (!openedMobFilter.length) {

    } else {
        openedMobFilter.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.closest('.ocfilter').classList.toggle('open');
            })
        })
    }
}

openMobFilter();


$('.input-phone').each(function () {

    var lang = $(this).attr('data-lang');

    if (lang == 'ua') {
        $(this).addClass('mask-phone-ua');
    }
    ;
    if (lang == 'ru') {
        $(this).addClass('mask-phone-ru');
    }
    ;
    if (lang == 'en') {
        $(this).addClass('mask-phone-en');
    }
    ;
});


$('.input-code').each(function () {

    var lang = $(this).attr('data-lang');

    if (lang == 'code') {
        $(this).addClass('mask-code');
    }
});


$(".mask-phone-ua").mask('+38(999)999-99-99');
$(".mask-phone-ru").mask('+7(999)999-99-99');
$(".mask-code").mask('');

$.fn.setCursorPosition = function (pos) {
    if ($(this).get(0).setSelectionRange) {
        $(this).get(0).setSelectionRange(pos, pos);
    } else if ($(this).get(0).createTextRange) {
        var range = $(this).get(0).createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
    }
};

$('.mask-phone-ua').click(function () {
    $(this).setCursorPosition(4);
});
$('.mask-phone-ru').click(function () {
    $(this).setCursorPosition(3);
});


let workDates = [...document.querySelectorAll('.work-dates')];

function workDatesHave() {
    var d = new Date();
    let currentDay = d.getDay() - 1;
    if (d.getDay() === 0) {
        currentDay = 6;
    }
    if (!workDates.length) {

    } else {
        workDates.forEach((ul) => {
            [...ul.querySelectorAll('li')].forEach((day, i) => {
                if (i === currentDay) {
                    console.log(i + '  ' + currentDay)
                    day.classList.add('active')
                }
            })
        })
    }
}

workDatesHave();
//filter checkbox

let openModalBtns = [...document.querySelectorAll('.open-modal')];
let modalsWindows = [...document.querySelectorAll('.modal-window')];


function ifHaveModals() {
    if (!openModalBtns.length) {

    } else {
        openModalBtns.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                if (btn.classList.contains('open-modal--call')) {
                    if (!document.querySelector('.open-modal.active')) {
                        document.body.classList.add('no-scroll')

                    } else {
                        if (!document.querySelector('.open-modal--call.active')) {
                            document.querySelector('.open-modal.active').classList.remove('active');
                            document.querySelector('.modal-window.open').classList.remove('open');

                        } else {
                            document.body.classList.remove('no-scroll')
                        }


                    }
                    document.querySelector('.modal-window--call').classList.toggle('open');
                    btn.classList.toggle('active');
                }
                if (btn.classList.contains('open-modal--cart')) {
                    if (!document.querySelector('.open-modal.active')) {
                        document.body.classList.add('no-scroll')

                    } else {
                        if (!document.querySelector('.open-modal--cart.active')) {
                            document.querySelector('.open-modal.active').classList.remove('active');
                            document.querySelector('.modal-window.open').classList.remove('open');
                        } else {
                            document.body.classList.remove('no-scroll')

                        }


                    }
                    document.querySelector('.modal-window--cart').classList.toggle('open');
                    btn.classList.toggle('active');

                }
            })
        })
        modalsWindows.forEach((wn) => {
            wn.addEventListener('click', () => {
                wn.classList.remove('open')
                document.body.classList.remove('no-scroll');
                document.querySelector('.open-modal.active').classList.remove('active');
            })
            wn.querySelector('.modal-content').addEventListener('click', (e) => {
                e.stopPropagation();
            })
        })

    }
}

ifHaveModals();

let cont = document.querySelector('.container');
let contWidth = cont.offsetWidth - 15;
let contRight = cont.getBoundingClientRect().right - contWidth;
let allNotify = [...document.querySelectorAll('.notify')];

allNotify.forEach((not) => {
    not.style.right = `${contRight}px`;
});


let favBtns = [...document.querySelectorAll('.favorite')];
let zIndexCounter = 100;

function ifHaveFav() {
    if (!favBtns.length) {

    } else {
        favBtns.forEach((btn) => {
            btn.addEventListener('click', () => {
                zIndexCounter += 1;
                if (btn.classList.contains('active')) {
                    let popup = document.querySelector('.notify--add-like');
                    popup.classList.remove('notify--faced');

                    void btn.offsetWidth;
                    popup.classList.add('notify--faced');
                    popup.style.zIndex = zIndexCounter;

                } else {
                    let popup = document.querySelector('.notify--rem-like');
                    // popup.classList.remove('notify--faced');
                    popup.classList.remove('notify--faced');

                    void btn.offsetWidth;
                    popup.classList.add('notify--faced');
                    popup.style.zIndex = zIndexCounter;
                }
            })
        })
    }
}

ifHaveFav();


let addToCartBtn = [...document.querySelectorAll('.add-cart')];

function ifNoAddCart() {
    if (!addToCartBtn.length) {

    } else {
        addToCartBtn.forEach((btn) => {
            btn.addEventListener('click', () => {
                zIndexCounter += 1;
                if (btn.classList.contains('active')) {
                    let popup = document.querySelector('.notify--add-cart');
                    popup.classList.remove('notify--faced');

                    void btn.offsetWidth;
                    popup.classList.add('notify--faced');
                    popup.style.zIndex = zIndexCounter;

                } else {
                    let popup = document.querySelector('.notify--rem-cart');
                    // popup.classList.remove('notify--faced');
                    popup.classList.remove('notify--faced');

                    void btn.offsetWidth;
                    popup.classList.add('notify--faced');
                    popup.style.zIndex = zIndexCounter;
                }
            })
        })
    }
}

ifNoAddCart();


let inputsOcf = [...document.querySelectorAll('input.ocf-target')];

function ifHaveFiltersInput() {
    if (!inputsOcf.length) {

    } else {
        inputsOcf.forEach((btn) => {
            btn.addEventListener('click', () => {
                zIndexCounter += 1;
                if (!btn.closest('label').classList.contains('ocf-selected')) {
                    let popup = document.querySelector('.notify--add-filter');
                    popup.classList.remove('notify--faced');

                    void btn.offsetWidth;
                    popup.classList.add('notify--faced');
                    popup.style.zIndex = zIndexCounter;

                } else {
                    let popup = document.querySelector('.notify--rem-filter');
                    // popup.classList.remove('notify--faced');
                    popup.classList.remove('notify--faced');

                    void btn.offsetWidth;
                    popup.classList.add('notify--faced');
                    popup.style.zIndex = zIndexCounter;
                }
            })
        })
    }
}

ifHaveFiltersInput();


let changeAmount = [...document.querySelectorAll('.modal-cart__part label')];

function ifHaveAmountChange() {
    if (!changeAmount.length) {

    } else {
        changeAmount.forEach((field) => {
            let input = field.querySelector('input');
            let btns = [...field.querySelectorAll('.btn-value')];

            btns.forEach((btn) => {
                btn.addEventListener('click', () => {
                    if (btn.classList.contains('btn-value--minus')) {
                        input.value = Number(input.value) - 1;
                    } else {
                        input.value = Number(input.value) + 1;
                    }
                })
            })

        })
    }
}

ifHaveAmountChange();

let tabsBtns = [...document.querySelectorAll('.tab-btn')];
let tabsPanel = [...document.querySelectorAll('.modal-cart__tab')];

function changeTabBtn() {
    if (!tabsBtns.length) {

    } else {
        tabsBtns.forEach((tab, k) => {
            tab.addEventListener('click', () => {
                document.querySelector('.modal-cart__tab.active').classList.remove('active')
                document.querySelector('.tab-btn.active').classList.remove('active')
                tabsPanel[k].classList.add('active');
                tab.classList.add('active');

                if (tab.classList.contains('tab-btn--cart')) {
                    document.querySelector('.modal-cart__total').classList.add('active');
                    document.querySelector('.modal-cart__like-text').classList.remove('active');

                } else {
                    document.querySelector('.modal-cart__total').classList.remove('active');
                    document.querySelector('.modal-cart__like-text').classList.add('active');


                }

            })
        })
    }
}

changeTabBtn();


let addToCartBtnInCart = [...document.querySelectorAll('.add-cart--cart')];

function ifNoAddCartInCart() {
    if (!addToCartBtnInCart.length) {

    } else {
        addToCartBtnInCart.forEach((btn) => {
            btn.addEventListener('click', () => {
                zIndexCounter += 1;
                btn.classList.toggle('active');
                if (btn.classList.contains('active')) {
                    let popup = document.querySelector('.notify--add-cart');
                    popup.classList.remove('notify--faced');

                    void btn.offsetWidth;
                    popup.classList.add('notify--faced');
                    popup.style.zIndex = zIndexCounter;

                } else {
                    let popup = document.querySelector('.notify--rem-cart');
                    // popup.classList.remove('notify--faced');
                    popup.classList.remove('notify--faced');

                    void btn.offsetWidth;
                    popup.classList.add('notify--faced');
                    popup.style.zIndex = zIndexCounter;
                }
            })
        })
    }
}

ifNoAddCartInCart();

let favBtnsCart = [...document.querySelectorAll('.rem-fav')];

function ifHaveFavCart() {
    if (!favBtnsCart.length) {

    } else {
        favBtnsCart.forEach((btn) => {
            btn.addEventListener('click', () => {
                zIndexCounter += 1;

                let popup = document.querySelector('.notify--rem-like');
                // popup.classList.remove('notify--faced');
                popup.classList.remove('notify--faced');

                void btn.offsetWidth;
                popup.classList.add('notify--faced');
                popup.style.zIndex = zIndexCounter;

            })
        })
    }
}

ifHaveFavCart();

let remCartBtnsCart = [...document.querySelectorAll('.rem-cart')];

function ifHaveFavCartRem() {
    if (!remCartBtnsCart.length) {

    } else {
        remCartBtnsCart.forEach((btn) => {
            btn.addEventListener('click', () => {
                zIndexCounter += 1;

                let popup = document.querySelector('.notify--rem-cart');
                // popup.classList.remove('notify--faced');
                popup.classList.remove('notify--faced');

                void btn.offsetWidth;
                popup.classList.add('notify--faced');
                popup.style.zIndex = zIndexCounter;

            })
        })
    }
}

ifHaveFavCartRem();

//change selectors

let allSelectors = [...document.querySelectorAll('.select-type > select')];
let allChecked = [...document.querySelectorAll('.select-type > span')];
function ifSelectTypeOnPage() {
    if (!allChecked.length) {

    } else {
        allSelectors.forEach((sel) => {
            let selOpt = [...sel.querySelectorAll('option')];
            selOpt.forEach((opt) => {
                let optValue = opt.value;
                let optInnerText = opt.innerText;
                let newSpan = document.createElement('span');
                newSpan.setAttribute('data-value', `${optValue}`);
                newSpan.innerHTML = optInnerText;
                opt.closest('.select-type').querySelector('.custom-selector div').appendChild(newSpan);
                newSpan.addEventListener('click', () => {
                    let spanInner = newSpan.innerHTML;
                    let spanValue = newSpan.dataset.value;
                    newSpan.closest('.select-type').querySelector('span').innerHTML = spanInner;
                    newSpan.closest('.select-type').querySelector('span').classList.add('active');
                    let event = new Event('change');
                    let suggestOpt = document.querySelector(`option[value='${spanValue}']`);
                    suggestOpt.selected = 'selected';
                    suggestOpt.setAttribute('selected', 'selected');
                    suggestOpt.click();
                    newSpan.closest('.select-type').querySelector('select').dispatchEvent(event);
                    // console.log(newSpan.closest('.select-type'));
                    if (!newSpan.closest('.select-type .custom-selector').querySelector('span.active')) {

                    } else {
                        newSpan.closest('.select-type  .custom-selector').querySelector('span.active').classList.remove('active');

                    }
                    document.querySelector(`span[data-value='${spanValue}']`).classList.add('active');
                    newSpan.closest('.select-type').classList.remove('open');
                })
            })
        })

        allChecked.forEach((opener) => {
            opener.addEventListener('click', () => {
                opener.closest('.select-type').classList.toggle('open')
            })
        })
    }
}

ifSelectTypeOnPage();

let formCity = [...document.querySelectorAll('.checkout-form input')];

function ifFormOnPage() {
    if (!formCity.length) {

    } else {
        formCity.forEach((inp) => {
            inp.addEventListener('click', () => {
                let selectBlock = inp.closest('.checkout-form').querySelector('.custom-selector');

                if (!selectBlock) {

                } else {
                    let spans = [...selectBlock.querySelectorAll('div span')];
                    selectBlock.classList.toggle('open');

                    spans.forEach((spn) => {
                        spn.addEventListener('click', () => {
                            let spnValue = spn.innerHTML;
                            inp.value = spnValue;
                            selectBlock.classList.remove('open');
                        })
                    })

                }
            })
        })
    }
}
ifFormOnPage();

let openMoreInfo = [...document.querySelectorAll('.info-open')];

function ifInfoPage() {
    if(!openMoreInfo) {

    } else {

        openMoreInfo.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.classList.toggle('active');
            })
        })
    }
}
ifInfoPage();
jQuery(function($) {

    const section = $('.info-content__part'),
        nav = $('.info-links'),
        navHeight = nav.outerHeight(); // получаем высоту навигации

    // поворот экрана

    $(window).on('scroll', function () {
        const position = $(this).scrollTop();

        section.each(function () {
            const top = $(this).offset().top - navHeight - 5,
                bottom = top + $(this).outerHeight();

            if (position >= top && position <= bottom) {
                nav.find('a').removeClass('active');
                section.removeClass('active');

                $(this).addClass('active');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    });

    nav.find('a').on('click', function () {
        const id = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top - navHeight
        }, 487);

        return false;
    });

});


//change selectors

let menuMobileItems = [...document.querySelectorAll('.header__menu>ul>li>a')];

function menuMobileClick() {
    if(!menuMobileItems.length) {

    } else {
        menuMobileItems.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                if (window.innerWidth > 640) {

                } else {
                    e.preventDefault();
                    if (document.querySelector('.header__menu>ul>li>a.show')) {
                        document.querySelector('.header__menu>ul>li>a.show').classList.remove('show');
                    } else {

                    }
                    btn.classList.toggle('show');

                }

            })
        })
    }
};

menuMobileClick();


// Получаем нужный элемент
var elementBtns = document.querySelector('.product-head .product-head__price');

var Visible = function (target) {
    if (!elementBtns) {

    } else {
        var targetPosition = {
                top: window.pageYOffset + target.getBoundingClientRect().top,
                left: window.pageXOffset + target.getBoundingClientRect().left,
                right: window.pageXOffset + target.getBoundingClientRect().right,
                bottom: window.pageYOffset + target.getBoundingClientRect().bottom
            },
            // Получаем позиции окна
            windowPosition = {
                top: window.pageYOffset + 80,
                left: window.pageXOffset,
                right: window.pageXOffset + document.documentElement.clientWidth,
                bottom: window.pageYOffset + document.documentElement.clientHeight
            };

        if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
            targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
            targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
            targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
            // Если элемент полностью видно, то запускаем следующий код
            document.querySelector('.prod-banner').classList.remove('visible');
        } else {
            // Если элемент не видно, то запускаем этот код
            document.querySelector('.prod-banner').classList.add('visible');
        };
    }
    // Все позиции элемента

};

// Запускаем функцию при прокрутке страницы
window.addEventListener('scroll', function() {
    Visible (elementBtns);
});

// А также запустим функцию сразу. А то вдруг, элемент изначально видно
Visible (elementBtns);
//-----------
var elementBtnsSlider = document.querySelector('.prod-banner');

var Visible2 = function (target) {
    if (!elementBtnsSlider) {

    } else {
        var targetPosition = {
                top: window.pageYOffset + target.getBoundingClientRect().top,
                left: window.pageXOffset + target.getBoundingClientRect().left,
                right: window.pageXOffset + target.getBoundingClientRect().right,
                bottom: window.pageYOffset + target.getBoundingClientRect().bottom
            },
            // Получаем позиции окна
            windowPosition = {
                top: window.pageYOffset + 80,
                left: window.pageXOffset,
                right: window.pageXOffset + document.documentElement.clientWidth,
                bottom: window.pageYOffset + document.documentElement.clientHeight
            };

        if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
            targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
            targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
            targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
            // Если элемент полностью видно, то запускаем следующий код
            document.querySelector('.product-page__info .product-info__head').classList.remove('visible');
        } else {
            // Если элемент не видно, то запускаем этот код
            document.querySelector('.product-page__info .product-info__head').classList.add('visible');
        };
    }
    // Все позиции элемента

};

// Запускаем функцию при прокрутке страницы
window.addEventListener('scroll', function() {
    Visible2 (elementBtnsSlider);
});

// А также запустим функцию сразу. А то вдруг, элемент изначально видно
Visible2 (elementBtnsSlider);


