import './style.scss';

import { changeMenu } from './app/js/nav-layout';
import { projectsGallery } from './app/js/gallery';

// references - mobile menu
const buttonRef = document.querySelector('.icon-nav');
const navRef = document.querySelector('.menu');


// references - gallery images
const figCapRef = document.querySelectorAll('.my-work figcaption');
const figureRef = document.querySelectorAll('.my-work figure');
const topCaptionRef = document.querySelectorAll('.my-work figcaption div:nth-child(1)');
const bottomCaptionRef = document.querySelectorAll('.my-work figcaption div:nth-child(2)');
const captionRef = document.querySelectorAll('.caption');

const button = document.querySelectorAll('.button');


changeMenu(buttonRef, navRef);
projectsGallery(figureRef, topCaptionRef, bottomCaptionRef, button);

