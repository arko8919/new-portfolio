import './style.scss';

import { changeMenu } from './app/js/nav-layout';
import { projectsGallery } from './app/js/gallery';

// references - mobile menu
const navIconRef = document.querySelector('.nav-icon'); // menu bar ( hamburger icon )
const navRef = document.querySelector('.menu'); // list of menu items

// references - gallery images
const figureRef = document.querySelectorAll('.my-work figure');
const topCaptionRef = document.querySelectorAll(
    '.my-work figcaption div:nth-child(1)'
);
const bottomCaptionRef = document.querySelectorAll(
    '.my-work figcaption div:nth-child(2)'
);

const button = document.querySelectorAll('.button');

changeMenu(navIconRef, navRef);
projectsGallery(figureRef, topCaptionRef, bottomCaptionRef, button);
