// # Exercises: Animation
// ## The Cat Walk

// - Create a variable to store a reference to the img.

const image1 = document.getElementsByTagName('img')[0]
image1.style.left = '0px'
image1.style.top = '50%'

const catWalk = function () {
  let oldWalk = parseInt(image1.style.left)

  if (oldWalk > innerWidth - 250) {
    direction = 'left'
    image1.style.transform = 'scaleX(-1)'
  }
  if (oldWalk < 20) {
    direction = 'right'
    image1.style.transform = 'scaleX(+1)'
  }
  if (direction === 'right') {
    let newWalk = oldWalk + 10
    image1.style.left = newWalk + 'px'
    console.log(image1.style.left)
  } else if (direction === 'left') {
    let newWalk = oldWalk - 10
    image1.style.left = newWalk + 'px'
  }
}
const walking = setInterval(catWalk, 50)

// - Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever.

// - Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. They should keep walking back and forth forever and ever.

// - Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.

// - Bonus #4: Pretty much go nuts or whatever.
