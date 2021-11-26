export function projectsGallery(figureRef, topCaptionRef, bottomCaptionRef, button) {
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
        if (topCaptionRef[figureElement].getAttribute('id') === '' || topCaptionRef[figureElement].hasAttribute('id') === false) {
            hideCaption();
            // show figure caption
            topCaptionRef[figureElement].setAttribute('id', 'top-caption');
            bottomCaptionRef[figureElement].setAttribute('id', 'bottom-caption');
        } else {
            // hide figure caption on current open image
            topCaptionRef[figureElement].setAttribute('id', '');
            bottomCaptionRef[figureElement].setAttribute('id', '');
        }
    }

    // Check if the device of the user is a touch device
    const touchScreen = 'ontouchstart' in window || navigator.msMaxTouchPoints;

    if (touchScreen) {
        // create click event on each figure element
        for (let figureElement = 0; figureElement < figureRef.length; figureElement++) {
            figureRef[figureElement].addEventListener('click', function () {
                showCaption(figureElement);
            });
        }
    }
}