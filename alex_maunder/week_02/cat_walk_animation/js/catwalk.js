// <!-- # Exercises: Animation
//
// ## The Cat Walk
//
// Who needs Milan when you have JavaScript?
//
// Start with this webpage, which has a single img tag of an animated GIF of a cat walking.
// ```html
// <!DOCTYPE html>
// <html>
//  <head>
//   <meta charset="utf-8" />
//   <title>Cat Walk</title>
//  </head>
//  <body>
//
//   <img style="position:absolute;" src="http://www.anniemation.com/clip_art/images/cat-walk.gif">
//
//  </body>
// </html>
// ```
//
// - Create a new Javascript file and link to it with a script tag at the bottom.
// - Create a variable to store a reference to the img.
// - Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
// - Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
// - Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!
//
// - Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever.
//
// - Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. They should keep walking back and forth forever and ever.
//
// - Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.
//
// - Bonus #4: Pretty much go nuts or whatever. -->


const img = document.getElementsByClassName('catwalk')[0];
img.style.position = 'absolute';
img.style.left = '0px';

const unmute = document.getElementById('unmuteButton');
const fullJoelMode = document.getElementById('fullJoelMode');

let executedBack = false; // prevent the function from running multiple times.

const makeCatWalkForward = function() {
  executedBack = false;
  const oldLeft = parseInt(img.style.left);
  const newLeft = oldLeft + 10;
  img.style.left = newLeft + 'px';

  if (oldLeft > 700 && oldLeft < 720) {
    middleScreen();
  };

  if (oldLeft > 1400) {
    img.style.transform = "scaleX(-1)"
    makeCatWalkBack();
    clearInterval(timerID);
  }
};

const makeCatWalkBack = function () {
  const oldLeft = parseInt(img.style.left);
  const newLeft = oldLeft - 10;
  img.style.left = newLeft + 'px';
  if (!executedBack) {
    makeCatWalkBackInterval();
  };
  if (oldLeft < 20) {
    img.style.transform = "scaleX(1)"
    timerID = setInterval(makeCatWalkForward, 50);
    makeCatWalkForward();
    clearInterval(timerIDBack);
  }
};


const makeCatWalkBackInterval = function () {
  executedBack = true;
  timerIDBack = setInterval(makeCatWalkBack, 50);
};

const middleScreen = function () {
  clearInterval(timerID);
  timerIDMiddle = setInterval(changeImg, 100);
};

const changeImg = function () {
  img.setAttribute('src', 'https://www.fillmurray.com/400/230');
  img.setAttribute('z-index', "1");
  unmute.style.visibility = "visible";

  unmuteButton.addEventListener('click', function() {
    audio.muted = false;
    const sound = new Audio('audio/TheBladeCena.mp3');
    sound.play()
  });

  fullJoelMode.addEventListener('click', function() {
    const joelSoundCrash = new Audio('audio/wtf_Audrey.mp3');
    joelSoundCrash.play()
    joels()
  });


  let strHTML = '';

  let begintop=700;
  let beginleft=700;

  let secondtop=700;
  let secondleft=700;

  let vbottom=900;
  let vright=900;

  let secondbottom=900;
  let secondright=900;


  // to bottom left
  for (let i = 0; i < 50; i++) {
    begintop += 5;
    beginleft += 5;
    strHTML += "<span class='imgbg imgpos' style='top:" + begintop + "px" + ";left:" + beginleft + "px" + ";'></span>";
  };
  document.getElementById("divOutput").innerHTML = strHTML;

  // to bottom right
  for (let i = 0; i < 50; i++) {
    secondtop += 5;
    secondleft += 5;
    strHTML += "<span class='imgbg imgpos' style='top:" + secondtop + "px" + ";right:" + secondleft + "px" + ";'></span>";
  };
  document.getElementById("divOutput").innerHTML = strHTML;

  // to top right
  for (let i = 0; i < 50; i++) {
    vbottom += 5;
    vright += 5;
    strHTML += "<span class='imgbg imgpos' style='bottom:" + vbottom + "px" + ";left:" + vright + "px" + ";'></span>";
  };
  document.getElementById("divOutput").innerHTML = strHTML;

  // to top left
  for (let i = 0; i < 50; i++) {

    secondbottom += 5;
    secondright += 5;
    strHTML += "<span class='imgbg imgpos' style='bottom:" + secondbottom + "px" + ";right:" + secondright + "px" + ";'></span>";
  };
  document.getElementById("divOutput").innerHTML = strHTML;

  sleep(10000).then(() => {
    img.setAttribute('src', 'http://www.anniemation.com/clip_art/images/cat-walk.gif');
    timerID = setInterval(makeCatWalkForward, 50);
    document.body.style.backgroundImage = "url('https://cataas.com/cat/gif')";
    fullJoelMode.style.visibility = "visible";
  });

  makeCatWalkForward()
  clearInterval(timerIDMiddle);


};

let count = 0;

let joels = function () {
  let strHTML = '';
  let vtop= (Math.random()*1300);
  let vleft= (Math.random()*1300);
  console.log(vtop);
  console.log(vleft);

  for (let i = 0; i < 30; i++) {
    vtop += 5;
    vleft += 5;
    strHTML += "<span class='imgbg imgpos' style='top:" + vtop + "px" + ";left:" + vleft + "px" + ";'></span>";

  };
  document.getElementById("divOutput").innerHTML = strHTML;
  const joelSound = new Audio('audio/wtf_Audrey_nocrash.mp3');
  // joelSound.play()
  if (count > 9) {
    sleep((Math.random()*1300)).then(() => {
      joelSound.play();
    }); };
  sleep(320).then(() => {
    joels();
    count++;
  });
};


// sleep time expects milliseconds
function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
};


var timerID = setInterval(makeCatWalkForward, 50);
