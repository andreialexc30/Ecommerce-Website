let slideIndex = 0;
displaySlides(slideIndex); // Displays slides in carousel

function displaySlides() {
    let i;

    const slides = document.getElementsByClassName("img-sliderpromo");
    const dots = document.getElementsByClassName("dot");

    // Increments each slide and sets their display to none
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    slideIndex++; 

    // Resets the carousel once it goes past the number of images in it
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace('active', '');
    }

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';


    setTimeout(displaySlides, 10000);
}
