'use strict';

// мигание стрелочки

window.addEventListener('DOMContentLoaded', getBlink);

function getBlink() {
    setTimeout(her, 100, "rgb(80, 195, 175)");
    setTimeout(her, 500, "rgb(255, 255, 255)");
    setTimeout(her, 1000, "rgb(80, 195, 175)");
    setTimeout(her, 1500, "rgb(255, 255, 255)");
}

function her(colorName) {
    // let caretDownColor = window.getComputedStyle(caretDown).color;
    let caret = document.querySelector('.caret-down');
    caret.style.color = colorName;
    console.log(caret.style.color);
}
