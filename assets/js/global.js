let animationPaused = false;

window.addEventListener('scroll', function() {
    const indicator = document.querySelector('h2.indicator');
    if (indicator && !animationPaused) {
        // Set the data attribute only after the first scroll
        indicator.setAttribute('data-paused', 'true');
        animationPaused = true; // Prevent the event from triggering multiple times
    }
});

document.addEventListener("DOMContentLoaded", () => {
    // Array of image files for Apeirophobia and Doors
    const imageFilesA = [
      "Apeirophobia.png",
      //"Apeirophobia2.png",
      //"Apeirophobia3.png",
      //"Apeirophobia4.png",
      //"Apeirophobia5.png",
      //"Apeirophobia6.png",
      //"Apeirophobia7.png",
    ];
  
    const imageFilesD = [
      "Doors.png",
      "Doors2.png",
      "Doors3.png",
      "Doors4.png",
      "Doors5.png",
      "Doors6.png",
      "Doors7.png",
    ];
  
    // Function to pick a random image and set it to the respective img elements
    function pickRandomImage() {
      // Randomly pick an image from each array
      const randomImageA = imageFilesA[Math.floor(Math.random() * imageFilesA.length)];
      const randomImageD = imageFilesD[Math.floor(Math.random() * imageFilesD.length)];
      
      // Set the src of the image elements
      document.getElementById("apeirophobiaImage").src = "assets/img/showcase/apeirophobia/" + randomImageA;
      document.getElementById("doorsImage").src = "assets/img/showcase/doors/" + randomImageD;
    }
  
    // Pick a random image when the page loads
    pickRandomImage();
  });

const images = document.querySelectorAll('.hover-img');
const hoverSound = document.getElementById('hover-sound');

// Add event listeners for hover
images.forEach(image => {
  image.addEventListener('mouseenter', () => {
    hoverSound.currentTime = 0;
    hoverSound.play()
  });
});