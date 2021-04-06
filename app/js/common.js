

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

let languageBtn = [...document.querySelectorAll('.header__language')];

function changeLanguage() {
    if (!languageBtn.length) {

    } else {
        languageBtn.forEach((btn) => {
            btn.querySelector('p').addEventListener('click', () => {
                btn.querySelector('p').classList.toggle('active');
            })

        })
    }
};
changeLanguage();