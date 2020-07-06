let pageNum = 1;
let pageLimit = 1;
let textCheck = ''

const searchFlickr = function (keywords) {
    if (textCheck != keywords) {reset()};
    textCheck = keywords;
    const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?';
    $.getJSON(flickrURL, {
        method: 'flickr.photos.search',
        api_key: '2f5ac274ecfac5a455f38745704ad084',
        text: keywords, // what we are actually searching for
        format: 'json',
        page: pageNum
    }).done(showImages).done(function (info) {
      console.log(info);
      pageLimit = info.photos.pages; //Only need to do once so might move.
    });

};

const showImages = function (results) {
    // console.log(results);
    _(results.photos.photo).each(function(photo) {
      const thumbnailURL = generateURL(photo);
      const $img = $('<img>', {src: thumbnailURL});
      const $a = $(`<a href="${thumbnailURL}">Click for image.</a>`);
      $img.appendTo('#images');
      $a.appendTo('#images')
      // console.log(thumbnailURL);
    })
};


const generateURL = function (p) {
  return [
    'http://farm',p.farm,
    '.static.flickr.com/',
    p.server,
    '/',
    p.id,
    '_',
    p.secret,
    '_m.jpg' // Change 'q' to something else for different sizes (see docs)
  ].join('');
}

const reset = function () {
  pageNum = 1;
  pageLimit = 1;
  textCheck = ''
}

$(document).ready(function() {

    $('#search').on('submit', function () {
        event.preventDefault(); // disabled the form submission
        const term = $('#query').val();
        searchFlickr(term);
    });


    $(window).on('scroll', function () {
      const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
      if (scrollBottom <= 700 && pageNum <= pageLimit) {
        const term = $('#query').val();
        searchFlickr(term);
        window.scrollTo(750, 0);
        console.log("Another Page");
        pageNum = pageNum + 1
      }
      // console.log(scrollBottom);
    });

});
