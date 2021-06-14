const container = document.querySelector('#container');
let root = document.querySelector(':root');
let grid;
function createGrid(divNumber) {

    for(let i = 0; i < divNumber; i++) {
        for(let j = 0; j < divNumber; j++) {
            grid = document.createElement('div');
            grid.style.borderStyle = 'solid';
            grid.style.borderWidth = '1px';
            grid.addEventListener('mouseover', function (e) {
                e.target.style.backgroundColor = 'black';
            })
            container.appendChild(grid);
        } 
    }
}

const clearGrid = document.querySelector('#clear-grid');

clearGrid.addEventListener('click', () => {
    let input = prompt('enter the grid size');
    root.style.setProperty('--grid-rows', input);
    root.style.setProperty('--grid-columns', input);
    createGrid(input);
});
