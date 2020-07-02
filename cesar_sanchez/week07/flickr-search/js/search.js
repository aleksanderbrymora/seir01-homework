// searchFlickr() is outside the document-ready becuase i want to use it in the console.
// Also, we are not going to use it outside the document-ready.
let i = 1;
const searchFlickr = function (keywords) {
  console.log('Searching Flickr for', keywords);
  // TODO: all AJAX stuff

  const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?'
  $.getJSON(flickrURL, {
    method: 'flickr.photos.search', //not to be confused with GET or POST etc etc
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    text: keywords, // what we are actually search for
    format: 'json',
    page: i
  }).done(showImages).done(getReady).done(function (info) {
    console.log('last', info); // debugging
  });
};

const showImages = function (results) {
  if (results.photos.page === 1) {
    _( results.photos.photo ).each(function (photo) {
      const thumbnailURL = generateURL(photo);
      const $img = $('<img>', {src: thumbnailURL}); // <img src="http://...."
      $img.appendTo('#images'); //$('images').append($img)
    });
  } else if (results.photos.page <= results.photos.pages) {
    console.log('page', results.photos.page)
    _( results.photos.photo ).each(function (photo) {
      const thumbnailURL = generateURL(photo);
      const $img = $('<img>', {src: thumbnailURL}); // <img src="http://...."
      $img.appendTo('#images'); //$('images').append($img)
    });
  } else {
    $(window).data('ajaxready', false);
  }
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
    '_q.jpg' // Change 'q' to something else for different sizes (see docs)
  ].join('');
};

const getReady = function () {
  $(window).data('ajaxready', true);
  i += 1;
  // after we have loaded all the images, we'll make possible to make another request.
};

$(document).ready(function () {
  //select the form
  //attach the submit handler
  $('#search').on('submit', function (event) {
    i = 1
    $('#images').empty()
    event.preventDefault(); //disabled the form submission
    const term = $('#query').val();
    searchFlickr(term);
  });

  $(window).on('scroll', function () {
    if ($(window).data('ajaxready') === false) { //making it false prevents making multiple requests
      return
    }

    const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
    if (scrollBottom <= 700) {
      $(window).data('ajaxready', false);
      const term = $('#query').val();
      searchFlickr(term);
    }

  });

});
