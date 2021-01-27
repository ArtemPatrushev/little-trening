'use strict';

const getYourCopyBtn = document.querySelector('.button-copy');
const modalWindow = document.querySelector('.modal-window');
const blackout = document.querySelector('.blackout');

getYourCopyBtn.addEventListener('click', showModalWindow);

function showModalWindow(clickEventBtn) {
    modalWindow.classList.remove('scale-out-center');
    modalWindow.classList.add('scale-in-center');
    blackout.style.display = 'block';
    modalWindow.style.display = 'flex';
    modalWindow.style.flexDirection = 'column';
}

document.addEventListener('click', function(e) {
    let elem = e.target;
    let its_menu = elem == modalWindow || modalWindow.contains(elem);
    let its_btnMenu = elem == getYourCopyBtn;

    if (!its_menu && !its_btnMenu) {
        modalWindow.classList.remove('scale-in-center');
        modalWindow.classList.add('scale-out-center');
        setTimeout(() => {
            blackout.style.display = 'none';
        }, 500);
    }
});