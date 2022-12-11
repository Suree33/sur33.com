const body = document.querySelector('body');
const h1 = document.querySelector('h1');
const FPS = 60;

// Logo motion velocity variables
let xPosition = 10;
let yPosition = 10;
let xSpeed = 2;
let ySpeed = 2;

let update = () => {
    h1.style.left = xPosition + 'px';
    h1.style.top = yPosition + 'px';
};

let randomColor = () => {

};

setInterval(() => {
    if (xPosition + h1.clientWidth >= window.innerWidth || xPosition <= 0) {
        xSpeed = -xSpeed;
    }
    if (yPosition + h1.clientHeight >= window.innerHeight || yPosition <= 0) {
        ySpeed = -ySpeed;
    }
    xPosition += xSpeed;
    yPosition += ySpeed;

    update();
}, 1000 / FPS);