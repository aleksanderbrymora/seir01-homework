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
// - Bonus #4: Pretty much go nuts or whatever.



//  ORIGINAL PROBLEM
// console.log('hello');
//
// const cat = document.querySelector('img');
// cat.style.position = 'left';
// cat.style.left = '0px';
//
//
// const catWalk = function(){
//   let oldPosition = parseInt(cat.style.left);
//   let newPosition = oldPosition + 10;
//   cat.style.left = newPosition + 'px';
//   if (newPosition > 900){
//     clearInterval(catWalkTimer);
//   }
// };
//
//
// const catWalkTimer = setInterval(catWalk, 50);

// setInterval(catWalk, 50);

    // cat.style = "transform: scaleX(-1);"
// style="transform: scaleX(-1);"








// FIRST BONUS SORTA DONE
//
// const cat = document.querySelector('img');
// cat.style.position = 'left';
// cat.style.left = '0px';
// const w = window.innerWidth;
//
// const catWalk = function(){
//   let oldPosition = parseInt(cat.style.left);
//   let newPosition = oldPosition + 10;
//   cat.style.left = newPosition + 'px';
//   if (newPosition > w){
//     cat.style.left = '0px';
//   }
// };
//
//
// const catWalkTimer = setInterval(catWalk, 50);






//second shitty attampt at goal #2 using 2 functions

const cat = document.querySelector('img');
const w = window.innerWidth;
const wInt = parseInt(w);
cat.style.position = 'left';
cat.style.left = '0px';
let check = true;
// let counter

const catWalk = function(){
  let oldPosition = parseInt(cat.style.left);
  if (check){
    cat.style.transform = "scaleX(+1)"
    let newPosition = oldPosition + 10;
    let negativePosition = oldPosition - 10;
    if (newPosition < (w-296) && oldPosition >= -10){     // not yet reached wall
      cat.style.left = newPosition + 'px';
    } else {
      negativePosition = oldPosition - 10;
      cat.style.left = negativePosition + 'px';
      check = false;
    }
  } else if (oldPosition > 0){
    negativePosition = oldPosition - 10;
    cat.style.left = negativePosition + 'px';
    cat.style.transform = "scaleX(-1)"
  } else {
    check = true;
  }
};


const catWalkTimer = setInterval(catWalk, 50);










//First shitty attampt at Bonus 2

// const cat = document.querySelector('img');
// cat.style.position = 'left';
// cat.style.left = '0px';
// const w = window.innerWidth;
// const wInt = parseInt(w);
//
//
//
// const catWalk = function(){
//   let oldPosition = parseInt(cat.style.left);
//   let newPosition = oldPosition + 10;
//   cat.style.left = newPosition + 'px';
//   if (newPosition > w - 296){
//     // cat.style = "transform: scaleX(-1);"
//     // cat.style.left = w - 296 + 'px';
//     clearInterval(catWalkTimer);
//     return catRetreat();
//     // const catRetreatTimer = setInterval(catRetreat, 60);
//   }
// };
//
//
// const catWalkTimer = setInterval(catWalk, 50);
//
// const catRetreat = function(){
//   let oldPosition = w-296;
//   let newPosition = oldPosition - 10;
//   cat.style.left = newPosition + 'px';
//   if (newPosition < 1){
//     cat.style.left = 0;
//     clearInterval(catRetreatTimer);
//     // return catWalk();
//   }
// };
//
// const catRetreatTimer = setInterval(catRetreat, 60);

// setInterval(catWalk, 50);
// clearInterval(catWalkTimer);

//     cat.style = "transform: scaleX(-1);"
// style="transform: scaleX(-1);"


//I need to create a position 1 and a position 2 variable
//if position 1 then proceed with the first half of the function
//else proceed with the second half of the function;
