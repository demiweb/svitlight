

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
    if (e.target.closest('.seo-block__content')) {
        e.stopPropagation();
    } else {
        if (window.innerWidth > 600) {
            if (side > 0) {
                document.querySelector('header').classList.add('scroll-down');
            } else {
                document.querySelector('header').classList.remove('scroll-down');

            }
        }
    }


});


