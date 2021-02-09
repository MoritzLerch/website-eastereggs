// Maybe this has to be in context to make sense <- moritz-lerch.de

var playing = false;
var toast = false;
var audio = new Audio('/wp-content/uploads/2021/02/nggyu.mp3');
var heart = "https://s.w.org/images/core/emoji/13.0.0/svg/2764.svg";
var trumpet = "https://s.w.org/images/core/emoji/13.0.0/svg/1f3ba.svg";
var bread = "https://s.w.org/images/core/emoji/13.0.0/svg/1f35e.svg";
var emojiBefore = heart;
var currentEmoji = "";

document.getElementById("neverGonnaKlickYouUp").addEventListener("dblclick", neverGonnaKlickYouUp);

function neverGonnaKlickYouUp() {
  // document.getElementById("neverGonnaKlickYouUp").innerHTML = "🍞";
  if (!toast) {
    document.getElementById("neverGonnaKlickYouUp").src = bread;
    toast = true;
    emojiBefore = bread;
  } else {
    document.getElementById("neverGonnaKlickYouUp").src = heart;
    toast = false;
    emojiBefore = heart;
  }
}

function rickAstley() {
  if (emojiBefore == currentEmoji) { 
    emojiBefore = document.getElementById("neverGonnaKlickYouUp").src; 
  }
  
  if (!playing) {
    audio.volume = 0.2;
    audio.play();
    currentEmoji = trumpet;
    document.getElementById("neverGonnaKlickYouUp").src = currentEmoji;
    playing = true;
  } else {
    audio.pause();
    playing = false;
    audio.currentTime = 0;
    document.getElementById("neverGonnaKlickYouUp").src = emojiBefore;
  }
}

console.clear();
console.log("" +
"%c███╗░░░███╗██╗░░░░░\n" +
"%c████╗░████║██║░░░░░\n" +
"%c██╔████╔██║██║░░░░░\n" +
"%c██║╚██╔╝██║██║░░░░░\n" + 
"%c██║░╚═╝░██║███████╗" +
"\n" +
"\n" +           
"%c© Moritz Lerch " + "%c(╯°□°）╯︵ ┻━┻) ", "color:#f95151", "color:#f9e35f", "color:#83d45a", "color:#62afdf", "color:#8678dd", "color:inherit", "color:#1abc9c");
