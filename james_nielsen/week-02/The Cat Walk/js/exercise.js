//Q1 and Bonus 1
// ********* CAT WALKING LEFT TO RIGHT CONTINUOUSLY ****************////////
// const img = document.getElementsByTagName('img')[0];
// img.style.left = '0px';
// img.style.top='300px';
//
// const watchCatWalk = function() {
//   let oldPos = parseInt(img.style.left); //pos = position
//   let newPos = oldPos + 10;
//   img.style.left = newPos + 'px';
//   if(newPos > (window.innerWidth)){
//     img.style.left = "0px"
//   }
// };
// window.setInterval(watchCatWalk, 100);
//

// Bonus 2
// ************** CAT BACK AND FORWARD ********************////
const image1 = document.getElementsByTagName('img')[0];
      image1.style.left = "0px";
      image1.style.top = '50%';


const catWalk = function () {
let oldWalk = parseInt(image1.style.left);
if (oldWalk > innerWidth) {
  direction = 'left'
}
if (oldWalk < 20) {
  direction = 'right'
}
if (direction === 'right') {
  let newWalk = oldWalk + 10;
  image1.style.left = newWalk + 'px';
  // console.log(image1.style.left);
} else if (direction === 'left') {

  let newWalk = oldWalk - 10;
  image1.style.left = newWalk + 'px';

  // console.log(image1.style.left);
}
}
//************* Bonus 2 Complicated **********************//
// const img = document.getElementsByTagName('img')[0];
// img.style.left = '0px';
// img.style.top='300px';
// let walkForwards = true;
// 
// const watchCatWalk = function() {
//   let oldPos = parseInt(img.style.left); //pos = position
//   let currentPosRight = oldPos + 10;  //current position moving to the right
//   img.style.left = currentPosRight + 'px';
//
//   if (walkForwards && (oldPos > (window.innerWidth-img.width))) {
//     walkForwards = false;
//   }
//   if (!walkForwards && (oldPos <= 0)) {
//     walkForwards = true;
//   }
//   if (walkForwards) {
//     img.style.left = (currentPosRight)+'px';
//   } else {
//     img.style.left = (((currentPosRight - 10)-10)+'px'); //could use just oldPos
//
//   }
// }
// window.setInterval(watchCatWalk, 100);
