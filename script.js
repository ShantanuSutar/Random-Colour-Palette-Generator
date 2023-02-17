'use strict';

const button = document.querySelector('.btn');
const container = document.querySelector('.container');
const maxColors = 10;
const createPalette = () => {

    container.innerHTML = '';

    for(let i = 0; i < maxColors; i++){
    let randomHexNum = '#'+ Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0");
    randomHexNum.toUpperCase();

    const card = document.createElement('div');
    card.classList.add('cards');
    card.innerHTML = `<section class="color" style="background-color: ${randomHexNum};"></section><p class="name">${randomHexNum}</p>`;
    container.appendChild(card);
    
    card.addEventListener('click', function(){
        const name = card.querySelector('.name');
        const num = name.textContent; 
        name.textContent = 'Copied';
        setTimeout(() => name.textContent = num, 1000);
        navigator.clipboard.writeText(num);
    })
}
}

createPalette();
button.addEventListener('click', createPalette);
