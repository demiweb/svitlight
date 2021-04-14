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
                btn.closest('header').classList.toggle('open');

            })
        })
    }
}

burgerMenuOpen();

//burger menu

document.body.addEventListener('wheel', (e) => {
    let side = e.deltaY;
    let btmLine = document.querySelector('.header__bottom-line');
    let height = btmLine.clientHeight;
    if (e.target.closest('.seo-block__content') || e.target.closest('.seo-block__cont')) {
        e.stopPropagation();
    } else {
        if (window.innerWidth > 600) {
            if (side > 0) {
                document.querySelector('header').classList.add('scroll-down');
                document.querySelector('header').nextElementSibling.style.marginTop = `${height}px`;
            } else {
                document.querySelector('header').classList.remove('scroll-down');
                document.querySelector('header').nextElementSibling.style.marginTop = `0px`;
            }
        } else {
            document.querySelector('header').nextElementSibling.style.marginTop = `0px`;
            document.querySelector('header').classList.remove('scroll-down');

        }
    }


});

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
            chk.closest('label').classList.add('checkbox-have')
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

$(".mask-phone-ua").mask('+38(999)999-99-99');
$(".mask-phone-ru").mask('+7(999)999-99-99');

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

function ifHaveModals() {
    if (!openModalBtns.length) {

    } else {
        openModalBtns.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                if (btn.classList.contains('open-modal--call')) {
                    document.querySelector('.modal-window--call').classList.toggle('open');
                    btn.classList.toggle('active');
                    document.body.classList.toggle('no-scroll')
                }
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
                    popup.classList.add('notify--faced');
                    popup.style.zIndex = zIndexCounter;
                    setTimeout(() => {

                        popup.classList.remove('notify--faced');

                    }, 4000);
                } else {
                    let popup = document.querySelector('.notify--rem-like');
                    popup.classList.add('notify--faced');
                    popup.style.zIndex = zIndexCounter;
                    setTimeout(() => {

                        popup.classList.remove('notify--faced');

                    }, 4000);

                }
            })
        })
    }
}

ifHaveFav();


