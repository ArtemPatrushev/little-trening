'use strict';

// scroll по стрелочке

const caretDown = document.querySelector('.caret-down');
const informationAbout = document.querySelector('.information-about');

function scrollToInformationAbout() {
    informationAbout.scrollIntoView({ block: "center", behavior: "smooth" });
}

caretDown.addEventListener('click', scrollToInformationAbout);

