//Create a variable to store a reference to the img.
const img1 = document.getElementsByTagName ('img')[0];

// Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
img1.style.left = '0px';
img1.style.top = '0px';
let newLeft = 0;
let newTop = 0;

// Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
const catWalk = function() {
  const oldLeft = parseInt(img1.style.left);
  const oldTop = parseInt(img1.style.top);
  //Use parseInt to change values to numbers.
  newLeft = oldLeft + 10;
  newTop = oldTop + 5;
  img1.style.left = newLeft + 'px';
  img1.style.top = newTop + 'px';
  if (newLeft > 1200 && newTop > 15) {
    const stopWalking2 = setInterval(walkBack, 80);
    clearInterval(stopWalking);
  }
};

// Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!
const stopWalking = setInterval(catWalk, 50);


const walkBack = function() {
  newLeft = newLeft -10;
  newTop = newTop - 5;
  img1.style.left = newLeft + 'px';
  img1.style.top = newTop + 'px';
  if (newLeft2 < 1 && newTop2 < 1) {
    clearInterval(stopWalking2);
  }
};

const stopWalking2 = setInterval(walkBack, 80);
