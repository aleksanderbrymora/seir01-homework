
const img = document.getElementsByTagName('img')[0];
const img2 = document.getElementsByTagName('img')[1];
const btn1  = document.getElementsByTagName('button')[0];
const btn2  = document.getElementsByTagName('button')[1];
const p = document.getElementsByTagName('p')[0];

//Styles
img.style.position = 'absolute';
img2.style.position = 'absolute';
btn1.style.position = 'absolute';
btn2.style.position = 'absolute';
p.style.position = 'absolute';
img.style.top  = '300px';
img.style.left = '500px';
img2.style.top = '300px';
img2.style.left = '500px';
btn1.style.top  = '700px';
btn1.style.left = '600px';
btn2.style.top  = '700px';
btn2.style.left = '770px';
p.style.top  = '70px';
p.style.left = '500px';
img2.style.visibility = "hidden";
p.innerText = "Keep the cat in the screen.";
p.style.fontSize = "40px";
btn1.style.fontSize = "35px";
btn2.style.fontSize = "35px";
let id1=0;
let id2=0;

//Function to move right.
const moveCatR = function() {
  var oldLeft = parseInt(img.style.left);
  var newLeft = oldLeft + 10;
  img.style.left = newLeft + 'px';
 
  if (newLeft > screen.width || newLeft< -350 ) {
    img2.style.visibility = "visible";
    clearInterval(id1);
    clearInterval(id2);
  }
};

//Function to move left.
const moveCatL = function() {
  var oldLeft = parseInt(img.style.left);
  var newLeft = oldLeft - 10;
  img.style.left = newLeft + 'px';
 
  if (newLeft > screen.width || newLeft< -350 ) {
    img2.style.visibility = "visible";
    clearInterval(id1);
    clearInterval(id2);
  }
};

const moveRight = function() {
  if (id2 > 0 )clearInterval(id2);
  img.style.transform = "scaleX(+1)";
  id1 = setInterval(moveCatR, 50);
}

const moveLeft = function() {
  if (id1 > 0 )clearInterval(id1);
  img.style.transform = "scaleX(-1)";
  id2 = setInterval(moveCatL, 50);
  
}

//Action listeners
btn1.addEventListener('click', moveLeft);
btn2.addEventListener('click', moveRight);
