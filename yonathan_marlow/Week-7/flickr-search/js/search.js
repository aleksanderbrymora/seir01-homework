let pageNumber = 0;
let scrollLock = false;
let reachLastPage = false;

const searchFlickr = function (keywords) {
  if (reachLastPage) {
    return
  }
  if (scrollLock === false) {
    scrollLock = true;
    pageNumber++
  } else {
    console.log(`file is still retrieving`);
    return
  }
  console.log('searching flickr for', keywords);

  const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?'; // JSONP
  $.getJSON(flickrURL, {
    method: 'flickr.photos.search', // not to be confused with method="POST"
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    text: keywords, //what we are searching for
    format: 'json',
    page: pageNumber,
    per_page: 50
  }).done(showImages).done(function(info){
    console.log(info);
    console.log(pageNumber);
    scrollLock = false;
  })
};

const generateURL = function (p) {
  return [
    'http://farm',
    p.farm,
    '.static.flickr.com/',
    p.server,
    '/',
    p.id,
    '_',
    p.secret,
    '_q.jpg' // change the 'q' to something else for different sizes (see docs)
  ].join('');
}

const showImages = function (results) { //results can be called anythign
    console.log(results.photos.pages);
    console.log(results.photos.pages === pageNumber);
    console.log(pageNumber);
    if (results.photos.pages < pageNumber) {
      reachLastPage = true;
      return
    }
  _(results.photos.photo).each(function(photo){
    const thumbnailURL = generateURL(photo);
    console.log(thumbnailURL);
    let $a = $('<a>', {href:thumbnailURL});
    const $img = $('<img>', {src:thumbnailURL});
    $img.appendTo($a)
    $a.appendTo('#images');
  });
};

$(document).ready(function (){
  //select the form
  $('#search').on('submit', function (event) {
    event.preventDefault(); //disabled the form submission
    $('#images').text('')
    pageNumber = 1
    const term = $('#query').val();
    searchFlickr(term);
  });

  $(window).on('scroll', function() {
    const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
    if (scrollBottom <= 500) {//can experiment with the value
      const term = $('#query').val();
      searchFlickr(term);
    }
  })
})
  // attach and submit handler
    // prevent default
    // find the user input
    //search flickr for those terms


// Big O Notation :
// 1 - O(n)
// 2 - O(n^2)
// 3 - 0(n)
// 4 - O(1)
// 5 - 0(n)
// 6 - 0(n)
// 7 - 0(n)
// 8 - 0(n)
