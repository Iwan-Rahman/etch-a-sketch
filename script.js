let squares = [];
let size = 0;
const grid = document.querySelector(".container");

function generateGrid(newSize){
  resetGrid();
  size = newSize;
  for(let i = 0; i < size; i++){
    squares.push(document.createElement('div'));
    squares[i].setAttribute('class','square');
    squares[i].setAttribute('style','width: ' + 400/(Math.sqrt(size)) + 'px; height: ' + 400/(Math.sqrt(size)) + 'px;');
    grid.appendChild(squares[i]);
  }
}

function resetGrid(){
  for(let i = 0; i < size; i++){
    squares[i].remove();
  }
}
