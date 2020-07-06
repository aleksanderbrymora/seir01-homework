const cat = document.querySelector('img');
cat.style.left = 0;
let reverse = false;

const walkRight = function () {
  cat.style.left = ( parseInt( cat.style.left )  + 10 ) + 'px';
}

const walkLeft = function () {
  cat.style.left = ( parseInt( cat.style.left )  - 10 ) + 'px';
}

const catWalk = function () {
  if ( reverse === false ) {
    walkRight()
    cat.style.transform = 'scaleX(1)'
    if ( parseInt( cat.style.left ) === 1080) {
      reverse = true
    }
  }

  if ( reverse === true ) {
    walkLeft()
    cat.style.transform = 'scaleX(-1)'
    if ( parseInt( cat.style.left ) === 0) {
      reverse = false
    }
  }
}

setInterval(catWalk, 50);
