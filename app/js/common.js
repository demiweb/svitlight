

let headerSearch = [...document.querySelectorAll('header input[type="search"]')];
console.log(headerSearch);

function checkSearchField() {
    if(!headerSearch.length) {

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
            srch.addEventListener('keydown', (e)=> {
                if (e.keyCode == 13) {
                    if (e.target.value < 1) {

                    } else {
                        srch.closest('.header__search').classList.add('have-results');

                    }
                };


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
    if(!burgerBtn.length) {

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
    if (e.target.closest('.seo-block__content') || e.target.closest('.seo-block__cont') ) {
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
    if(!filterCheckBox.length) {

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

    }  else {
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
//filter checkbox


