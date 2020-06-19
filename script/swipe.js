let swipe = new CustomEvent('swipe', {
    bubbles: true,
    cancelable: true,
});

let unswipe = new CustomEvent('unswipe', {
    bubbles: true,
    cancelable: true,
});

let initialPoint;

let finalPoint;

document.addEventListener('touchstart', (event) => {
    initialPoint = event.changedTouches[0];
}, {passive: false});

document.addEventListener('touchend', (event) => {
    finalPoint = event.changedTouches[0];

    let xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);

    let yAbs = Math.abs(initialPoint.pageY - finalPoint.pageY);
    
    if (xAbs > 20 || yAbs > 20) {
        if (xAbs > yAbs) {
            if (finalPoint.pageX > initialPoint.pageX){
                document.dispatchEvent(swipe);
            }
            else {
                menuBar.dispatchEvent(unswipe);
            }
        }
    }
}, {passive: false});


