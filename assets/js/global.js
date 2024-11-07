let animationPaused = false;

window.addEventListener('scroll', function() {
    const indicator = document.querySelector('h2.indicator');
    if (indicator && !animationPaused) {
        // Set the data attribute only after the first scroll
        indicator.setAttribute('data-paused', 'true');
        animationPaused = true; // Prevent the event from triggering multiple times
    }
});