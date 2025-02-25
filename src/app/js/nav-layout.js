export function changeMenu(navIconRef, navRef) {
    // Disable and enable menu items on small devices
    navIconRef.addEventListener('click', function () {
        if (navRef.getAttribute('class') === 'menu') {
            navRef.setAttribute('class', 'menu active');
            navIconRef.setAttribute('class', 'nav-icon open');
        } else {
            navRef.setAttribute('class', 'menu');
            navIconRef.setAttribute('class', 'nav-icon');
        }
    });

    // When viewport change, it makes sure that menu items shows on large devices and hide on small devices
    //   window.addEventListener("resize", function () {
    //     if (window.innerWidth > "1024") {
    //       navRef.setAttribute("class", "menu active");
    //     } else {
    //       navRef.setAttribute("class", "menu");
    //     }
    //   });
}
