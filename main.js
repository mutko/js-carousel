// paths to carousel imgs
const paths = [
    'img/image-0.jpg',
    'img/image-1.jpg',
    'img/image-2.jpg',
    'img/image-3.jpg',
    'img/image-4.jpg',
]

const prevArrow = document.querySelector('.arrow-left');
const nextArrow = document.querySelector('.arrow-right');
const img = document.querySelector('.carousel-content img');

let imgNumber = 0;

// function for swiping images to right
function next() {
    imgNumber++;
    img.setAttribute('src', paths[imgNumber]);
    if(imgNumber === paths.length-1) {
        imgNumber = -1;
    }
}

// function for swiping images to left
function prev() {
    imgNumber--;
    if(imgNumber === -1) {
        imgNumber = paths.length-1;
    }
    img.setAttribute('src', paths[imgNumber]);
}

// assign next function to right arrow
nextArrow.addEventListener('click', next);
// assign previous function to left arrow
prevArrow.addEventListener('click', prev);

// allowing left and right arrow keys for changing imgs
window.addEventListener('keydown', function(event) {
    if (event.keyCode === 37) prev();
    if (event.keyCode === 39) next();
})
