// //----------- Burger Menu - Toggle------------------------------
// const toggleBtn = document.querySelector('.toggle-button');
// const navMenuLinks = document.querySelector('.nav-menu');

// toggleBtn.addEventListener('click', ()=>{
//     navMenuLinks.classList.toggle('active');
// })

//-------------Carousel-----------------------------------------
const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
const dotsNav = document.querySelector('.carousel__nav')
const dots = Array.from(dotsNav.children);
// console.log(track);
// console.log(slides);
// console.log(nextButton);

//To get the slide's size / width :
const slideWidth = slides[0].getBoundingClientRect().width;
// console.log(slideWidth);

//1. Arrange the slides next to one other
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
}
slides.forEach(setSlidePosition);


//All my Functions:
const moveToSlide = (track, currentSlide, targetSlide) => {
    //move to the next or prev slide
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';

    //to make it slide more than once:
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}

const hideShowArrow =(slides, prevButton, nextButton, targetIndex) => {
    if(targetIndex === 0){
        prevButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden')
    } else if (targetIndex === slides.length -1){
        nextButton.classList.add('is-hidden');
        prevButton.classList.remove('is-hidden');
    } else if (targetIndex > 0 ) {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.remove('is-hidden');
    }
}

//2. when I click right, move slides to the right
nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);
    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
    hideShowArrow(slides, prevButton, nextButton, nextIndex);
});

// //3. when I click left, move slides to the left
prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);
    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
    hideShowArrow(slides, prevButton, nextButton, prevIndex);
});

//4. Dots navigation
//what indicator was clicked on?
//with closest it only detects buttons and not if we just click inside the carousel-nav
dotsNav.addEventListener('click', e => {
    const targetDot = e.target.closest('button');
    if(!targetDot) return;
//with this return it actually exits the function if (false). So we only get test1 if we click outside the buttons
    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    //the next one returns the 1st dot inside dots array that is equal to targetDot
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    // console.log(dots);
    // console.log(targetIndex);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    //when I click the nav indicators, move to that slide
    hideShowArrow(slides, prevButton, nextButton, targetIndex);  
})

//-------------Carousel-----------------------------------------
