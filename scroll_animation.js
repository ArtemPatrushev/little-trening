'use strict';

let isScrolling = false;
window.addEventListener("scroll", throttleScroll, false);

function throttleScroll(e) {
    if (!isScrolling) {
        window.requestAnimationFrame(function () {
            scrolling(e);
            isScrolling = false;
        });
    }
    isScrolling = true;
}

document.addEventListener("DOMContentLoaded", scrolling, false);
let aboutBlock = document.querySelectorAll('.about-block');

function scrolling(event) {
    aboutBlock.forEach(elem => {
        if (isPartiallyVisible(elem)) {
            elem.classList.add("slide-in-left");
        } 
    });
}

function isPartiallyVisible(elem) {
    let elementBoundary = elem.getBoundingClientRect();
    let top = elementBoundary.top;
    // let bottom = elementBoundary.bottom;
    // let height = elementBoundary.height;

    return top <= window.innerHeight;
    // return ((top + height >= -200) && (height + window.innerHeight >= bottom));
}