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

document.body.addEventListener('mousedown', () => setHover());
document.body.addEventListener('mouseup', () => clearHover());

function setHover(){
  for(let i = 0 ; i < size; i++){
    squares[i].addEventListener('mousemove',color);
  }
}

function clearHover(){
  for(let i = 0; i < size; i++){
    squares[i].removeEventListener('mousemove',color);
  }
}

function color(event){
  event.target.style.backgroundColor = 'plum';
}

generateGrid(256);