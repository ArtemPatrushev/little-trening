'use strict';

const templateButtons = document.querySelectorAll('.about-template__button');
templateButtons.forEach(elem => {
    elem.addEventListener('click', handleClick);
})

function handleClick(clickEventButton) {
    const aboutTemplateNode = clickEventButton.target.parentNode;
    const aboutTemplate = {
        moreText: aboutTemplateNode.querySelector('.about-template__show-text'),
        button: aboutTemplateNode.querySelector('.about-template__button'),
    };
    const buttonText = aboutTemplate.button.textContent;

    if (buttonText === 'Read more') {
        showText(aboutTemplate);
    } else {
        deleteText(aboutTemplate);
    }
    
}

function showText(aboutTemplate) {
    let setText = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum fugit sint culpa dignissimos nisi illum aut laborum maiores aspernatur.Officiis, amet quod, corrupti harum nemo aliquam veritatis ducimus perspiciatis deleniti eius, sapiente maiores quibusdam.Saepe asperiores debitis maxime culpa similique tenetur.Repellendus distinctio quae asperiores impedit aliquid possimus animi recusandae.'
    aboutTemplate.moreText.classList.remove('swing-out-top-bck');
    aboutTemplate.moreText.classList.add('swing-in-top-fwd');
    aboutTemplate.button.style.transition = 'transform .2s ease-in-out';
    aboutTemplate.button.style.transform = '';
    aboutTemplate.moreText.innerHTML = setText;
    aboutTemplate.button.innerHTML = 'Back';
}

function deleteText(aboutTemplate) {
    aboutTemplate.moreText.classList.remove('swing-in-top-fwd');
    aboutTemplate.moreText.classList.add('swing-out-top-bck');
    setTimeout(function() {
        aboutTemplate.button.style.transition = 'transform .9s ease-in-out';
        aboutTemplate.button.style.transform = 'translate(0, -200px)';
    }, 500);
    aboutTemplate.button.innerHTML = 'Read more';
}

