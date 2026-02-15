const toggle = document.querySelector(".box-ball");
const ball = document.querySelector(".ball");

const basicPrice = document.querySelector(".box-basic p");
const professionalPrice = document.querySelector(".box-professional p");
const masterPrice = document.querySelector(".box-master p");

const originalPrices = {
    basic: basicPrice.innerHTML,
    professional: professionalPrice.innerHTML,
    master: masterPrice.innerHTML
};

let monthly = false;

toggle.addEventListener("click", () => {

   if (!monthly) {

        basicPrice.innerHTML = "<span>R$</span>19,99";
        professionalPrice.innerHTML = "<span>R$</span>24,99";
        masterPrice.innerHTML = "<span>R$</span>39,99";

        ball.style.transform = "translateX(43px)";
        monthly = true;

    } else {

        basicPrice.innerHTML = originalPrices.basic;
        professionalPrice.innerHTML = originalPrices.professional;
        masterPrice.innerHTML = originalPrices.master;

        ball.style.transform = "translateX(0px)";
        monthly = false;
    }

});
