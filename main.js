const container = document.querySelector('.container');
const gridSizeInput = document.getElementById('grid-size');
const sizeText = document.querySelector('.size');
let gridSize;
gridSizeInput.addEventListener('click', e => {
    gridSize = e.target.value;
    sizeText.textContent = gridSize;
    removeOldDivs();
    createDivs();
})

function createDivs() {
    for (let i = 0; i < (gridSize ** 2); i++) {
        const cell = document.createElement('div');
        cell.setAttribute('class', 'cell');
        cell.setAttribute('id', 'n' + i);
        cell.textContent = i;
        container.appendChild(cell);
        container.style.setProperty('--size', gridSize);
    }
}

function removeOldDivs() {
    while (container.lastChild) {
        container.removeChild(container.lastChild);
    }
}
