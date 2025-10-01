function closepreloader(){
    document.getElementById("loading").style.display = 'none';
}
window.addEventListener("load", function () {
    const loader = document.getElementById("loading");
    const header = document.querySelector(".header");
    const html = document.querySelector("html");

    loader.classList.add("fade-out");

    setTimeout(function () {
        loader.style.display = "none";

        header.style.display = "flex";
        header.classList.add("fade-in");
        html.classList.add("fade-in-scroll");

        setTimeout(() => {
            html.style.overflow = "auto";
        }, 500);
    }, 500);
});

document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menu-button");
    const navbar = document.querySelector(".navbar");
  
    menuBtn.addEventListener("click", function () {
      navbar.classList.toggle("active");
    });
  });  

const textArray = ["INDONESIAN."];
  
let textArrayIndex = 0;
let charIndex = 0;
const typedText = document.getElementById("typedText");
const cursor = document.getElementById("cursor");

const erase = function() {
if (charIndex > 0) {
    cursor.classList.remove('blink');
    typedText.textContent = textArray[textArrayIndex].slice(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 80);
} else {
    cursor.classList.add('blink');
    textArrayIndex++;
    if (textArrayIndex > textArray.length - 1) {
    textArrayIndex = 0;
    }
    setTimeout(typeanimation, 1000);
}
};

const typeanimation = function() {
if (charIndex <= textArray[textArrayIndex].length - 1) {
    cursor.classList.remove('blink');
    typedText.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeanimation, 120);
} else {
    cursor.classList.add('blink');
    setTimeout(erase, 1000);
}
};

typeanimation();

const suku = function(e) {
    var myShuffle = new Shuffle(porto, {
        itemSelector: '.suku__item',
        buffer: 0,
        columnThreshold: 0.01,
        columnWidth: 0,
        delimiter: null,
        sizer: null,
        speed: 250,
        filterMode: Shuffle.FilterMode.ANY,
        group: Shuffle.ALL_ITEMS,
    });
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function(e) {
            document.querySelector('.active').classList.remove('active');
            (document.querySelector('.active')) ? document.querySelector('.active').classList.remove('active'): '';
            this.classList.add('active');
            myShuffle.filter(e.target.dataset.group);
        });
    };
};