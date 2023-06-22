const adds = document.getElementsByClassName("legos__button");
let cart = 0;
const cartvalue = document.getElementsByClassName("shoppingCart__message")[0];
const modal = document.getElementById("js--shoppingModal");
let modalOpen = false;

let tank = 0;
let gunship = 0;
let falcon = 0;
let price_tank = 0;
let price_gunship = 0;
let price_falcon = 0;

for (let i = 0; i < adds.length; i++) {
    adds[i].onclick = function () {
        cart += 1;
        cartvalue.innerHTML = cart;
        switch (adds[i].dataset.product) {
            case "tank":
                tank += 1;
                price_tank = 90 * tank;
                break;
            case "gunship":
                gunship += 1;
                price_gunship = 90 * gunship;
                break;
            case "falcon":
                falcon += 1;
                price_falcon = 90 * falcon;
                break;
        }
        if (modalOpen === false) {
            modal.style.display = "flex";
            modalOpen = true
            setTimeout(function () {
                modal.style.display = "none";
                modalOpen = false;
            }, 2000);
        }
    }
}

const checkout = document.getElementById("checkoutButton");
const checkoutWindow = document.getElementById("checkoutWindow");
const icon_arrow = document.getElementsByClassName("fa-arrow-left")[0];
const icon_cart = document.getElementsByClassName("fa-cart-shopping")[0];
let checkoutOpen = false;

checkout.onclick = function () {
    if (checkoutOpen === false) {
        document.querySelector("main").style.display = "none";
        checkoutWindow.style.display = "block"
        icon_arrow.style.display = "block"
        icon_cart.style.display = "none"
        checkoutOpen = true;
        document.getElementById("js--tank").innerHTML = tank + "x  €" + price_tank;
        document.getElementById("js--gunship").innerHTML = gunship + "x  €" + price_gunship;
        document.getElementById("js--falcon").innerHTML = falcon + "x  €" + price_falcon;
        return;
    }
    document.querySelector("main").style.display = "block";
    checkoutWindow.style.display = "none"
    icon_arrow.style.display = "none"
    icon_cart.style.display = "block"
    checkoutOpen = false;
}