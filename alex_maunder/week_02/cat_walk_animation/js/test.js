let strHTML = '';

let begintop=730;
let beginleft=730;

let secondtop=730;
let secondleft=730;

let vbottom=730;
let vright=730;

let secondbottom=730;
let secondright=730;


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



// set random Joels
let joels = function () {
  document.createElement('div','id="j1";')
  let vtop= (Math.random()*1300);
  let vleft= (Math.random()*1300);
  console.log(vtop);
  console.log(vleft);

  for (let i = 0; i < 10; i++) {
    vtop += 5;
    vleft += 5;
    strHTML += "<span class='imgbg imgpos' style='top:" + vtop + "px" + ";left:" + vleft + "px" + ";'></span>";

    sleep(5000).then(() => {
      joels();
    });

  };
  document.getElementById("divOutput").innerHTML = strHTML;
};

//
function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
};
joels();

//
// vtop = Math.random();
// vleft = Math.random();

//
// unmuteButton.addEventListener('click', function() {
//   audio.muted = false;
//   const sound = new Audio('audio/TheBladeCena.mp3');
//   sound.play();
// });
