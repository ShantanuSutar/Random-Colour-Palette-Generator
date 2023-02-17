'use strict';

const button = document.querySelector('.btn');
const container = document.querySelector('.container');
const maxColors = 10;

const createPalette = () => {
    for(let i = 0; i < maxColors; i++){
    let randomHexNum = '#'+ Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0");
    randomHexNum.toUpperCase();

    const card = document.createElement('div');
    card.classList.add('cards');
    card.innerHTML = `<section class="color" style="background-color: ${randomHexNum};"></section><p class="name">${randomHexNum}</p>`;
    container.appendChild(card);
}
}

createPalette();
button.addEventListener('click', createPalette);
