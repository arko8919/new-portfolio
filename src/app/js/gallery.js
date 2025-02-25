export function projectsGallery(
    figureRef,
    topCaptionRef,
    bottomCaptionRef,
    button
) {
    // hide description of each project if they are open
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
        if (
            topCaptionRef[figureElement].getAttribute('id') === '' ||
            topCaptionRef[figureElement].hasAttribute('id') === false
        ) {
            hideCaption(); // check if all other figure elements  have closed captions, if not then close it
            // show figure caption
            topCaptionRef[figureElement].setAttribute('id', 'top-caption');
            bottomCaptionRef[figureElement].setAttribute(
                'id',
                'bottom-caption'
            );
        } else {
            // hide figure caption on current open image
            topCaptionRef[figureElement].setAttribute('id', '');
            bottomCaptionRef[figureElement].setAttribute('id', '');
        }
    }

    // Check if the device of the user is a touch device
    // - Checks if the ontouchstart event (used for touch interactions) is available in the window object.
    // If true, the device supports touch events (e.g., smartphones, tablets).
    // - Checks if the browser provides maximum touch points (msMaxTouchPoints).
    // Used mostly for older versions of Internet Explorer (IE11) and some Windows devices.
    const touchScreen = 'ontouchstart' in window || navigator.msMaxTouchPoints;

    if (touchScreen) {
        // create click event on each figure element
        for (
            let figureElement = 0;
            figureElement < figureRef.length;
            figureElement++
        ) {
            figureRef[figureElement].addEventListener('click', function () {
                showCaption(figureElement);
            });
        }
    }
}
