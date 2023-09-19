function closepreloader(){
    document.getElementById("loading").style.display = 'none';
}
window.addEventListener("load",function(){
    setTimeout(closepreloader, 1000);
    
});

function showNavbar() {
document.querySelector(".header").style.display = "flex";
}

setTimeout(showNavbar, 1000);

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