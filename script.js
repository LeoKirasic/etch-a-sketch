const container = document.querySelector('#container');
const root = document.querySelector(':root');
let grid;

let input = prompt('enter the grid size');
root.style.setProperty('--grid-rows', input);
root.style.setProperty('--grid-columns', input);

if(input < 1 || input > 64) {
    alert('invalid input!');
    window.location.reload(true);
}
createGrid(input);

const clearGrid = document.querySelector('#clear-button');

clearGrid.addEventListener('click', () => {
    window.location.reload(true);
});

function colorOnHover (e) {
    e.target.style.backgroundColor = 'black';
}

function createGrid (number) {
    for(let i = 0; i < number; i++) {
        for(let j = 0; j < number; j++) {
            grid = document.createElement('div');
            grid.classList.add('grid')
            grid.style.borderStyle = 'solid';
            grid.style.borderWidth = '1px';
            grid.addEventListener('mouseover', colorOnHover);
            container.appendChild(grid);
        }
    }
}