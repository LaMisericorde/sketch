const container = document.querySelector('.container');
const gridSizeInput = document.getElementById('grid-size');
const writeSize = document.getElementById('write-size');
let gridSize = 16;
createDivs();

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) {
        return;
    } else {
        e.target.style.backgroundColor = "yellow";
    }
}

gridSizeInput.addEventListener('input', e => {
    gridSize = e.target.value;
    writeSize.value = gridSize
    removeOldDivs();
    createDivs();
})

writeSize.addEventListener('change', e => {
    gridSize = e.target.value;
    gridSizeInput.value = gridSize;
    if (gridSize < 10 || gridSize > 100) {
        alert("Choose a number between 9 and 101");
        gridSize = 16;
        gridSizeInput.value = 16;
        writeSize.value = 16;
    }
    removeOldDivs();
    createDivs();
})

function createDivs() {
    for (let i = 0; i < (gridSize ** 2); i++) {
        const cell = document.createElement('div');
        cell.setAttribute('class', 'cell');
        cell.setAttribute('id', 'n' + i);
        container.appendChild(cell);
        container.style.setProperty('--size', gridSize);
        cell.addEventListener('mouseover', changeColor);
        cell.addEventListener('mousedown', changeColor);
    }
}

function removeOldDivs() {
    while (container.lastChild) {
        container.removeChild(container.lastChild);
    }
}
