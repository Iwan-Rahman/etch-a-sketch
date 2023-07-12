function generateMusic(){
  var music = document.querySelector('audio');
  //From pixabay, credits to chillmore
  var lofiFiles = ['happiness.mp3','lofi-vibes.mp3','study.mp3','the-garden-of-bliss.mp3','the-weekend.mp3','uplifting-mood.mp3'];
  var track = 0;
  
  function nextTrack(){
    if(track == lofiFiles.length - 1){
      track = 0;
    }else{
      track++;
    }
  }
  
  music.src = './audio/lofi/' + lofiFiles[track];
  music.addEventListener('ended',nextTrack);
  
}

generateMusic();