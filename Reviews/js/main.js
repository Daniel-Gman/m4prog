let arrowbuttons = document.getElementsByClassName("arrow");
let reviews = document.getElementsByClassName("review");
let modus = "123";

for (let i = 0; i < arrowbuttons.length; i++) {
    arrowbuttons[i].onclick = function () {
        if (modus === "123") {
            reviews[0].style.display = "none";
            reviews[1].style.display = "none";
            reviews[2].style.display = "none";
            reviews[3].style.display = "block";
            reviews[4].style.display = "block";
            reviews[5].style.display = "block";
            modus = "456";
        }
        else {
            reviews[0].style.display = "block";
            reviews[1].style.display = "block";
            reviews[2].style.display = "block";
            reviews[3].style.display = "none";
            reviews[4].style.display = "none";
            reviews[5].style.display = "none";
            modus = "123";
        }
    }
}