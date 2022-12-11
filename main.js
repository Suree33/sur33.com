const body = document.querySelector('body');
const h1 = document.querySelector('h1');
const FPS = 60;
const colors = ['#f94144', '#f3722c', '#f8961e', '#f9844a', '#f9c74f', '#90be6d', '#43aa8b', '#4d908e', '#577590', '#277da1'];

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
    return colors[Math.floor(Math.random() * colors.length)];
};

h1.style.color = randomColor();
setInterval(() => {
    if (xPosition + h1.clientWidth >= window.innerWidth || xPosition <= 0) {
        xSpeed = -xSpeed;
        h1.style.color = randomColor();
    }
    if (yPosition + h1.clientHeight >= window.innerHeight || yPosition <= 0) {
        ySpeed = -ySpeed;
        h1.style.color = randomColor();
    }
    xPosition += xSpeed;
    yPosition += ySpeed;

    update();
}, 1000 / FPS);