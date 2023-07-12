let squares = [];
let size = 0;
const grid = document.querySelector('.container');

function generateGrid(newSize){
  resetGrid();
  size = newSize;
  for(let i = 0; i < size; i++){
    squares.push(document.createElement('div'));
    squares[i].setAttribute('class','square');
    squares[i].setAttribute('style','width: ' + 400/(Math.sqrt(size)) + 'px; height: ' + 400/(Math.sqrt(size)) + 'px;');
    grid.appendChild(squares[i]);
    //setTheme(theme);
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
    squares[i].addEventListener('mousemove',colorSquare);
  }
}

function clearHover(){
  for(let i = 0; i < size; i++){
    squares[i].removeEventListener('mousemove',colorSquare);
  }
}

function colorSquare(event){
  event.target.style.backgroundColor = color;
}

let colors = document.querySelectorAll('.color');
let color = 'black';

//Iterate through all colour divs except for the custom color
for(let i = 0; i <colors.length - 1;i++){
  colors[i].addEventListener('click',(e) => {
    color = e.target.style.backgroundColor
  })
}

document.querySelector('.color input').addEventListener('input',(e) => {
  color = document.querySelector('.color input').value;
})

let gridSizeInput = (document.querySelector('.gridConfig input'));
document.querySelector('.gridConfig button').addEventListener('click',(e) => {
  if(gridSizeInput.value > 100){
    alert("Grid Size cannot be more than 100 x 100");
  }else if(gridSizeInput.value < 1){
    alert("Grid Size must at least be 1 x 1");
  }else{
    generateGrid((gridSizeInput.value)**2);
  }
});

let themes = document.querySelectorAll('.themeConfig button');
let theme = 'classic';
for(let i = 0; i < themes.length; i++){
  themes[i].addEventListener('click',(e) => setTheme(e.target.textContent))
}

function setTheme(newTheme){
  let theme = newTheme.toLowerCase();
  let body = document.body;
  let main = document.querySelector('.main');
  let settings = document.querySelectorAll('h3');
  let h1 = document.querySelector('h1')
  let h2 = document.querySelector('h2')
  let footer = document.querySelector('.footer');
  let buttons = document.querySelectorAll('button');
  
  switch(theme){
    case 'classic':
      body.style.cssText = "background-color: white; font-family: sans-serif;";
      main.style.cssText = "border: none; background-color: white; box-shadow: none; border-radius: 0%;";
      h1.style.cssText = "font-weight: 400; color: black; text-shadow: none;";
      h2.style.cssText = "font-weight: 400; color: black; text-shadow: none;";
      
      for(let i = 0; i < colors.length; i++){
        colors[i].style.borderRadius = '0%';
        colors[i].style.borderColor = 'black';
      }
      for(let i = 0; i < settings.length; i++){
        settings[i].style.cssText = "color: black; text-shadow: none;";
      }
      grid.style.cssText = 'border-color: black; box-shadow:none;';
      footer.style.cssText = 'color: black; text-shadow: none';
      for(let i = 0; i < squares.length; i++){
        squares[i].style.border = "1px solid grey";
      }
      for(let i = 0; i < buttons.length; i++){
        buttons[i].removeAttribute('style');
      }
      break;
    case 'bubblegum':
      body.style.cssText = "background-color: hotpink; font-family: cursive, sans-serif;";
      main.style.cssText = "border: none; background-color: pink; box-shadow: 15px 15px yellow; border-radius: 5%;";
      h1.style.cssText = "font-weight: 900; color: yellow; text-shadow: 1px 1px aquamarine";
      h2.style.cssText = "font-weight: 900; color: hotpink; text-shadow: 1px 1px yellow";
      
      for(let i = 0; i < colors.length; i++){
        if(i < colors.length - 1){
          colors[i].style.borderRadius = '50%';
        }
        colors[i].style.borderColor = 'black';
      }
      for(let i = 0; i < settings.length; i++){
        settings[i].style.cssText = "color: hotpink; text-shadow: 1px 1px yellow";
      }
      grid.style.cssText = 'border-color: hotpink; box-shadow:none;';
      footer.style.cssText = 'color: yellow; text-shadow: 1px 1px aquamarine';
      for(let i = 0; i < squares.length; i++){
        squares[i].style.border = "1px solid yellow";
      }
      for(let i = 0; i < buttons.length; i++){
        buttons[i].style.cssText= "font-family: cursive, sans-serif; color:yellow; border:none; border-radius:50%; background-color:hotpink; box-shadow:2px 2px yellow;";
      }
      break;
    case 'space':
      body.style.cssText = "background-color: black; font-family: 'Impact', sans-serif;";
      main.style.cssText = "background-color: black; box-shadow: none; border-radius: 0%; border: 5px dashed aqua";
      h1.style.cssText = "font-weight: 900; color: blanchedalmond; text-shadow: 1px 1px aqua";
      h2.style.cssText = "font-weight: 900; color: blanchedalmond; text-shadow: 1px 1px aqua";
      
      for(let i = 0; i < colors.length; i++){
        colors[i].style.borderRadius = '0%';
        colors[i].style.borderColor = 'blanchedalmond';
      }
      for(let i = 0; i < settings.length; i++){
        settings[i].style.cssText = "color: blanchedalmond; text-shadow: 1px 1px aqua";
      }
      grid.style.cssText = 'border-color: blanchedalmond; box-shadow:none;';
      footer.style.cssText = 'color: blanchedalmond; text-shadow: 1px 1px aqua';
      for(let i = 0; i < squares.length; i++){
        squares[i].style.border = "1px solid aqua";
      }
      for(let i = 0; i < buttons.length; i++){
        buttons[i].style.cssText= "font-family:'Audiowide','Impact', 'Franklin Gothic Medium', sans-serif; color:blanchedalmond; border-top: 1px solid blanchedalmond; border-left: 1px solid blanchedalmond; border-radius:0%; background-color:black; box-shadow:2px 2px aqua;";
      }
      break;
    case 'jungle':
      body.style.cssText = "background-color: burlywood; font-family: 'Papyrus', sans-serif;";
      main.style.cssText = "background-color: forestgreen; box-shadow: none; border-radius: 0%;";
      h1.style.cssText = "font-weight: 900; color: rgb(68, 34, 9); text-shadow: none";
      h2.style.cssText = "font-weight: 900; color: rgb(68, 34, 9); text-shadow: 1px 1px burlywood";
      
      for(let i = 0; i < colors.length; i++){
        colors[i].style.borderRadius = '0%';
        colors[i].style.borderColor = 'rgb(68, 34, 9)';
      }
      for(let i = 0; i < settings.length; i++){
        settings[i].style.cssText = "color: rgb(68, 34, 9); text-shadow: 1px 1px burlywood";
      }
      grid.style.cssText = 'border-color: saddlebrown; box-shadow:none;';
      footer.style.cssText = 'color: rgb(68, 34, 9); text-shadow: none';
      for(let i = 0; i < squares.length; i++){
        squares[i].style.border = "1px solid burlywood";
      }
      for(let i = 0; i < buttons.length; i++){
        buttons[i].style.cssText= "font-family:'Franklin Gothic Medium','Georgia', Times, sans-serif; color:burlywood; border: 1.5px dashed burlywood; border-radius:25%; background-color: rgb(68, 34, 9); box-shadow:none";
      }
      break;
    case 'mono':
      body.style.cssText = "background-color: black; font-family: 'Franklin Gothic Medium', sans-serif;";
      main.style.cssText = "border: none; background-color: white; box-shadow: 15px 15px grey; border-radius: 0%;";
      h1.style.cssText = "font-weight: 400; color: white; text-shadow: 1px 1px grey;";
      h2.style.cssText = "font-weight: 400; color: black; text-shadow: 1px 1px grey;";
      
      for(let i = 0; i < colors.length; i++){
        colors[i].style.borderRadius = '0%';
        colors[i].style.borderColor = 'black';
      }
      for(let i = 0; i < settings.length; i++){
        settings[i].style.cssText = "color: black; text-shadow: 1px 1px grey;";
      }
      grid.style.cssText = 'border-color: black; box-shadow: 10px 10px black';
      footer.style.cssText = 'color: white; text-shadow: 1px 1px grey';
      for(let i = 0; i < squares.length; i++){
        squares[i].style.border = "1px solid black";
      }
      for(let i = 0; i < buttons.length; i++){
        buttons[i].style.cssText= "font-family: 'Franklin Gothic Medium', sans-serif; color:white; border-top: 2px solid grey; border-left: 2px solid grey; border-radius:0%; background-color:black; box-shadow:none;";
      }
      break;
  }
}
generateGrid(256);