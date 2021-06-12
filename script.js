'use strict';

 const randomColor = () => {
    let letters = '0123456789ABCDEF',
        color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

const changeColor = () => {
    const newColor = randomColor();
    document.body.style.backgroundColor = newColor;
    document.querySelector('h1').textContent = newColor;
};

document.querySelector('button').addEventListener('click', changeColor);