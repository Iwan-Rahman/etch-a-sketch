let squares = [];
let size = 256;
const grid = document.querySelector(".container");

for(let i = 0; i < size; i++){
  squares.push(document.createElement('div'));
  squares[i].setAttribute('class','square');
  grid.appendChild(squares[i]);
}

for(let i = 0; i < squares.length; i++){
}
