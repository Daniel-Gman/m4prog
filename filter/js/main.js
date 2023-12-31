let allGames = document.getElementsByClassName("game");
let filters = document.getElementsByClassName("filter");

setInterval(function () {
    document.getElementsByTagName("body")[0].style.overflow = "auto";
}, 1500);

window.scrollTo(0, 0);

for (let i = 0; i < filters.length; i++) {
    filters[i].checked = true;
}

let PS5 = document.getElementById("checkbox-PS5");
let Xbox = document.getElementById("checkbox-Xbox");
let Nintendo = document.getElementById("checkbox-Nintendo");

PS5.onchange = function () {
    if (PS5.checked === true) {
        for (let i = 0; i < allGames.length; i++) {
            if (allGames[i].dataset.category === "PS5") {
                allGames[i].style.display = "block";
            }
        }
    }
    else {
        for (let i = 0; i < allGames.length; i++) {
            if (allGames[i].dataset.category === "PS5") {
                allGames[i].style.display = "none";
            }
        }
    }
}

Xbox.onchange = function () {
    if (Xbox.checked === true) {
        for (let i = 0; i < allGames.length; i++) {
            if (allGames[i].dataset.category === "Xbox") {
                allGames[i].style.display = "block";
            }
        }
    }
    else {
        for (let i = 0; i < allGames.length; i++) {
            if (allGames[i].dataset.category === "Xbox") {
                allGames[i].style.display = "none";
            }
        }
    }
}

Nintendo.onchange = function () {
    if (Nintendo.checked === true) {
        for (let i = 0; i < allGames.length; i++) {
            if (allGames[i].dataset.category === "Nintendo") {
                allGames[i].style.display = "block";
            }
        }
    }
    else {
        for (let i = 0; i < allGames.length; i++) {
            if (allGames[i].dataset.category === "Nintendo") {
                allGames[i].style.display = "none";
            }
        }
    }
}