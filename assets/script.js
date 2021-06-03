// references - mobile menu
const buttonRef = document.querySelector('.icon-nav');
const navRef = document.querySelector('.menu');


// disable and enable menu items on small devices
buttonRef.addEventListener('click', function () {
    if (navRef.getAttribute('class') === 'menu') {
        navRef.setAttribute('class', 'menu active');
    } else {
        navRef.setAttribute('class', 'menu');
    }
});

// when viewport change, it makes sure that menu items shows on large devices and hide on small devices

window.addEventListener('resize', function () {
    if (window.innerWidth > '805') {
        navRef.setAttribute('class', 'menu active');
    } else {
        navRef.setAttribute('class', 'menu');
    }
});


// references - gallery images
const figCapRef = document.querySelectorAll('.my-work figcaption');
const figureRef = document.querySelectorAll('.my-work figure');
const topCaptionRef = document.querySelectorAll('.my-work figcaption div:nth-child(1)');
const bottomCaptionRef = document.querySelectorAll('.my-work figcaption div:nth-child(2)');
const captionRef = document.querySelectorAll('.caption');

// hide caption if visible on other figure elements
function hideCaption() {
    for (let i = 0; i < topCaptionRef.length; i++) {
        if (topCaptionRef[i].getAttribute('id') === 'top-caption') {
            topCaptionRef[i].setAttribute('id', '');
            bottomCaptionRef[i].setAttribute('id', '');
        }
    }
}

// show and hides figure captions on images
function showCaption(figureElement) {
    if(topCaptionRef[figureElement].getAttribute('id') === ''|| topCaptionRef[figureElement].hasAttribute('id') === false) {
        hideCaption();
        console.log('I m');
        // show figure caption
        topCaptionRef[figureElement].setAttribute('id', 'top-caption');
        bottomCaptionRef[figureElement].setAttribute('id', 'bottom-caption');
    } else {
        // hide figure caption on current open image
        console.log('I m here');
        topCaptionRef[figureElement].setAttribute('id', '');
        bottomCaptionRef[figureElement].setAttribute('id', '');
    }
}

// create click event on each figure element
for (let figureElement = 0; figureElement < figureRef.length; figureElement++) {
    figureRef[figureElement].addEventListener('click', function() {
        showCaption(figureElement);
    });
}







