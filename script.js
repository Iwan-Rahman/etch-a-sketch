let squares = [];
let size = 0;
const grid = document.querySelector('.container');
let theme = 'classic';
const gridToggleBtn = document.querySelector('.gridConfig button:last-child');
let showGrid = true;

function generateGrid(newSize) {
  resetGrid();
  size = newSize;
  for (let i = 0; i < size; i++) {
    squares.push(document.createElement('div'));
    squares[i].setAttribute('class', 'square');
    squares[i].setAttribute('style', 'width: ' + 400 / (Math.sqrt(size)) + 'px; height: ' + 400 / (Math.sqrt(size)) + 'px;');
    grid.appendChild(squares[i]);
  }
  
  if(showGrid){
    for(square of squares){
      square.style.borderWidth = "1px";
    }
  }
  setTheme(theme);
}

function resetGrid() {
  for (let i = 0; i < size; i++) {
    squares[i].remove();
  }
}

gridToggleBtn.addEventListener("click",() => {
  if(squares[0].style.borderWidth == "0px"){
    for(square of squares){
      square.style.borderWidth = "1px";
      showGrid = true;
    }    
  }else{
    for(square of squares){
      square.style.borderWidth = "0px";
      showGrid = false;
    }
  }
})

document.body.addEventListener('mousedown', () => setHover());
document.body.addEventListener('mouseup', () => clearHover());

function setHover() {
  for (let i = 0; i < size; i++) {
    squares[i].addEventListener('mousemove', colorSquare);
  }
}

function clearHover() {
  for (let i = 0; i < size; i++) {
    squares[i].removeEventListener('mousemove', colorSquare);
  }
}

function colorSquare(event) {
  event.target.style.backgroundColor = color;
}

let colors = document.querySelectorAll('.color');
let selectedColorNode;

//Iterate through all colour divs except for the custom color
for (let i = 0; i < colors.length; i++) {
  colors[i].addEventListener('click', (e) => {
    if(i != colors.length - 1){
      color = e.target.style.backgroundColor
    }else{
      color = document.querySelector('.color input').value;
    }

    let defaultBorder = '';
    if(selectedColorNode == 0){
      defaultBorder = colors[1].style.border;
    }else{
      defaultBorder = colors[0].style.border;
    }
  
    for(let j = 0; j <colors.length; j++){
      colors[j].style.border = defaultBorder;
    }

    selectedColorNode = i;
    applyColorSelectStyle();
  })
}

function applyColorSelectStyle(){
  //deselect everything and find selected element
  //find default style.

  if(selectedColorNode != undefined){
    switch(theme){
      case 'classic':
        colors[selectedColorNode].style.border = '4px ridge black';
        break;
      case 'bubblegum':
        colors[selectedColorNode].style.border = '2px solid yellow';
        break;
      case 'space':
        colors[selectedColorNode].style.border = '2px solid aqua';
        break;
      case 'jungle':
        colors[selectedColorNode].style.border = '2px solid burlywood';
        break;
      case 'mono':
        colors[selectedColorNode].style.border = '5px solid black';
        break;
    }
  }
}

document.querySelector('.color input').addEventListener('input', (e) => {
  color = document.querySelector('.color input').value;
})

let gridSizeInput = (document.querySelector('.gridConfig input'));
document.querySelector('.gridConfig button').addEventListener('click', (e) => {
  if (gridSizeInput.value > 100) {
    alert("Grid Size cannot be more than 100 x 100");
  } else if (gridSizeInput.value < 1) {
    alert("Grid Size must at least be 1 x 1");
  } else {
    generateGrid((gridSizeInput.value) ** 2);
  }
});

let themes = document.querySelectorAll('.themeConfig button');
for (let i = 0; i < themes.length; i++) {
  themes[i].addEventListener('click', (e) => {
    setTheme(e.target.textContent);
    setMusic();
    if(audioBtn.style.textDecoration != 'line-through'){
      music.play();
    }
  })
}

function setTheme(newTheme) {
  theme = newTheme.toLowerCase();
  let body = document.body;
  let main = document.querySelector('.main');
  let settings = document.querySelectorAll('h3');
  let h1 = document.querySelector('h1')
  let h2 = document.querySelector('h2')
  let footer = document.querySelector('.footer');
  let buttons = document.querySelectorAll('button');
  let audioBtnTextDecoration = document.querySelector(".extraConfig button").style.textDecoration;

  switch (theme) {
    case 'classic':
      body.style.cssText = "background-color: white; font-family: sans-serif;";
      main.style.cssText = "border: none; background-color: white; box-shadow: none; border-radius: 0%;";
      h1.style.cssText = "font-weight: 400; color: black; text-shadow: none;";
      h2.style.cssText = "font-weight: 400; color: black; text-shadow: none;";

      for (let i = 0; i < colors.length; i++) {
        colors[i].style.borderRadius = '0%';
        colors[i].style.borderColor = 'black';
      }
      for (let i = 0; i < settings.length; i++) {
        settings[i].style.cssText = "color: black; text-shadow: none;";
      }
      grid.style.cssText = 'border-color: black; box-shadow:none;';
      footer.style.cssText = 'color: black; text-shadow: none';
      for (let i = 0; i < squares.length; i++) {
        squares[i].style.borderColor = "grey";
      }
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].removeAttribute('style');
      }

      //Keeps the line decoration for the audio button the same as before
      audioBtn.style.textDecoration = audioBtnTextDecoration;

      //Change gridIcon button colour
      document.querySelector("#gridIcon").style.fill = "#000000"
      //Change Save button colour
      document.querySelector("#floppy").style.fill = "#021691";
      break;
    case 'bubblegum':
      body.style.cssText = "background-color: hotpink; font-family: cursive, sans-serif;";
      main.style.cssText = "border: none; background-color: pink; box-shadow: 15px 15px yellow; border-radius: 5%;";
      h1.style.cssText = "font-weight: 900; color: yellow; text-shadow: 1px 1px aquamarine";
      h2.style.cssText = "font-weight: 900; color: hotpink; text-shadow: 1px 1px yellow";

      for (let i = 0; i < colors.length; i++) {
        if (i < colors.length - 1) {
          colors[i].style.borderRadius = '50%';
        }
        colors[i].style.borderColor = 'black';
      }
      for (let i = 0; i < settings.length; i++) {
        settings[i].style.cssText = "color: hotpink; text-shadow: 1px 1px yellow";
      }
      grid.style.cssText = 'border-color: hotpink; box-shadow:none;';
      footer.style.cssText = 'color: yellow; text-shadow: 1px 1px aquamarine';
      for (let i = 0; i < squares.length; i++) {
        squares[i].style.borderColor = "yellow";
      }
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.cssText = "font-family: cursive, sans-serif; color:yellow; border:none; border-radius:50%; background-color:hotpink; box-shadow:2px 2px yellow;";
      }
      //Keeps the line decoration for the audio button the same as before
      audioBtn.style.textDecoration = audioBtnTextDecoration;
      document.querySelector("#gridIcon").style.fill = "#FFFF00"
      document.querySelector("#floppy").style.fill = "#FFFF00";
      break;
    case 'space':
      body.style.cssText = "background-color: black; font-family: 'Impact', sans-serif;";
      main.style.cssText = "background-color: black; box-shadow: none; border-radius: 0%; border: 5px dashed aqua";
      h1.style.cssText = "font-weight: 900; color: blanchedalmond; text-shadow: 1px 1px aqua";
      h2.style.cssText = "font-weight: 900; color: blanchedalmond; text-shadow: 1px 1px aqua";

      for (let i = 0; i < colors.length; i++) {
        colors[i].style.borderRadius = '0%';
        colors[i].style.borderColor = 'blanchedalmond';
      }
      for (let i = 0; i < settings.length; i++) {
        settings[i].style.cssText = "color: blanchedalmond; text-shadow: 1px 1px aqua";
      }
      grid.style.cssText = 'border-color: blanchedalmond; box-shadow:none;';
      footer.style.cssText = 'color: blanchedalmond; text-shadow: 1px 1px aqua';
      for (let i = 0; i < squares.length; i++) {
        squares[i].style.borderColor = "aqua";
      }
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.cssText = "font-family:'Audiowide','Impact', 'Franklin Gothic Medium', sans-serif; color:blanchedalmond; border-top: 1px solid blanchedalmond; border-left: 1px solid blanchedalmond; border-radius:0%; background-color:black; box-shadow:2px 2px aqua;";
      }
      //Keeps the line decoration for the audio button the same as before
      audioBtn.style.textDecoration = audioBtnTextDecoration;
      document.querySelector("#gridIcon").style.fill = "#00ffff"
      document.querySelector("#floppy").style.fill = "#00ffff";
      break;
    case 'jungle':
      body.style.cssText = "background-color: burlywood; font-family: 'Papyrus', sans-serif;";
      main.style.cssText = "border: 4px dashed rgb(68, 34, 9); background-color: forestgreen; box-shadow: none; border-radius: 0%;";
      h1.style.cssText = "font-weight: 900; color: rgb(68, 34, 9); text-shadow: none";
      h2.style.cssText = "font-weight: 900; color: rgb(68, 34, 9); text-shadow: 1px 1px burlywood";

      for (let i = 0; i < colors.length; i++) {
        colors[i].style.borderRadius = '0%';
        colors[i].style.borderColor = 'rgb(68, 34, 9)';
      }
      for (let i = 0; i < settings.length; i++) {
        settings[i].style.cssText = "color: rgb(68, 34, 9); text-shadow: 1px 1px burlywood";
      }
      grid.style.cssText = 'border-color: saddlebrown; box-shadow:none;';
      footer.style.cssText = 'color: rgb(68, 34, 9); text-shadow: none';
      for (let i = 0; i < squares.length; i++) {
        squares[i].style.borderColor = "burlywood";
      }
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.cssText = "font-family:'Franklin Gothic Medium','Georgia', Times, sans-serif; color:burlywood; border: 1.5px dashed burlywood; border-radius:25%; background-color: rgb(68, 34, 9); box-shadow:none";
      }
      //Keeps the line decoration for the audio button the same as before
      audioBtn.style.textDecoration = audioBtnTextDecoration;
      document.querySelector("#gridIcon").style.fill = "#DEB887"
      document.querySelector("#floppy").style.fill = "#DEB887";
      break;
    case 'mono':
      body.style.cssText = "background-color: black; font-family: 'Franklin Gothic Medium', sans-serif;";
      main.style.cssText = "border: none; background-color: white; box-shadow: 15px 15px grey; border-radius: 0%;";
      h1.style.cssText = "font-weight: 400; color: white; text-shadow: 1px 1px grey;";
      h2.style.cssText = "font-weight: 400; color: black; text-shadow: 1px 1px grey;";

      for (let i = 0; i < colors.length; i++) {
        colors[i].style.borderRadius = '0%';
        colors[i].style.borderColor = 'black';
      }
      for (let i = 0; i < settings.length; i++) {
        settings[i].style.cssText = "color: black; text-shadow: 1px 1px grey;";
      }
      grid.style.cssText = 'border-color: black; box-shadow: 10px 10px black';
      footer.style.cssText = 'color: white; text-shadow: 1px 1px grey';
      for (let i = 0; i < squares.length; i++) {
        squares[i].style.borderColor = "black";
      }
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.cssText = "font-family: 'Franklin Gothic Medium', sans-serif; color:white; border-top: 2px solid grey; border-left: 2px solid grey; border-radius:0%; background-color:black; box-shadow:none;";
      }
      //Keeps the line decoration for the audio button the same as before
      audioBtn.style.textDecoration = audioBtnTextDecoration;
      document.querySelector("#gridIcon").style.fill = "#ffffff"
      document.querySelector("#floppy").style.fill = "#ffffff";
      break;
  }
  applyColorSelectStyle();
}


let music = document.querySelector('audio');
music.volume = 0.1;


//From pixabay
let lofiFiles = ['happiness.mp3', 'lofi-vibes.mp3', 'study.mp3', 'the-garden-of-bliss.mp3', 'the-weekend.mp3', 'uplifting-mood.mp3'];
let elecFiles = ['cosmic-glow.mp3', 'mezhdunami-flashes.mp3', 'my-universe.mp3', 'night-prowler.mp3', 'space-age.mp3', 'synthwave-background-music.mp3'];
let jazzFiles = ['cool-jazz-loops.mp3', 'dreamy jazz.mp3', 'everythings-gonna-be-alright.mp3', 'french-jazz-music.mp3', 'night-jazz.mp3', 'saloon-piano.mp3', 'spy-jazz.mp3'];
let eightBitFiles = ['8-bit-arcade.mp3', '64-commodores.mp3', 'default.mp3', 'dial-up-blues.mp3', 'pixel-perfect', 'x-com.mp3'];
let elevatorFiles = ['elevator-music.mp3', 'glass-of-wine.mp3', 'the-ghost-of-shepards-pie.mp3', 'call-center.mp3', 'cocktail-music.mp3'];

let musicFilePath = './audio/elevator/';
let trackFiles;
let track;
let audioBtn = document.querySelector('.extraConfig button');
audioBtn.style.textDecoration = 'line-through';

function toggleMusic(e){
  if(e.target.style.textDecoration == 'line-through'){
    music.play();
    e.target.style.textDecoration = 'none';
  }else{
    music.pause();
    e.target.style.textDecoration = 'line-through';
  }
}

audioBtn.addEventListener('click',toggleMusic);

function nextTrack() {
  if (track == trackFiles.length - 1) {
    track = 0;
  } else {
    track++;
  }

  music.src = musicFilePath + trackFiles[track];
  music.play();
}

music.addEventListener('ended', nextTrack);

function setMusic() {
  switch (theme) {
    case 'classic':
      musicFilePath = './audio/elevator/';
      trackFiles = elevatorFiles;
      break;
    case 'bubblegum':
      musicFilePath = './audio/lofi/';
      trackFiles = lofiFiles;
      break;
    case 'space':
      musicFilePath = './audio/electronic/';
      trackFiles = elecFiles;
      break;
    case 'jungle':
      musicFilePath = './audio/jazz/';
      trackFiles = jazzFiles;
      break;
    case 'mono':
      musicFilePath = './audio/8-bit/';
      trackFiles = eightBitFiles;
      break;
  }
  track = 0;
  music.src = musicFilePath + trackFiles[track];
}

//Screenshot Code
// document.querySelector('button').addEventListener('click', function() {
//   html2canvas(document.querySelector('.specific'), {
//       onrendered: function(canvas) {
//           // document.body.appendChild(canvas);
//         return Canvas2Image.saveAsPNG(canvas);
//       }
//   });
// });


generateGrid(256);
setMusic();
