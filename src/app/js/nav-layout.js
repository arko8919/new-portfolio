export function changeMenu(buttonRef, navRef) {
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
        if (window.innerWidth > '1024') {
            navRef.setAttribute('class', 'menu active');
        } else {
            navRef.setAttribute('class', 'menu');
        }
    });
}
