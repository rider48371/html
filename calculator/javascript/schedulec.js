const twoYear = document.querySelector('.twoyear__form');

const twoYear__btn = document.querySelector('.twoyear__btn');



twoYear__btn.addEventListener('click', () => {

    const visibility = twoYear.getAttribute('data-visible')

 

    if(visibility === "false") {

        twoYear.setAttribute('data-visible', "true")

    } else if (visibility === "true") {

        twoYear.setAttribute('data-visible', "false")

    }

});

 

twoYear__btn.addEventListener("click", ()=> {

    if(twoYear__btn.value === "1 Year"){

        twoYear__btn.value = "2 Years";

    }else{

        twoYear__btn.value="1 Year";

    }

});
