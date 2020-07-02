let term = '';
let page = 1;
let pages;

const searchFlickr = function (searchString, page=1) {
    console.log('searching flickr for: '+ `'${searchString}', page: ${page}`)

    const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?';
    $.getJSON(flickrURL, {
        method: 'flickr.photos.search',
        api_key: '2f5ac274ecfac5a455f38745704ad084',
        text: searchString,
        format: 'json',
        page: page
    }).done(showImages);
};

const showImages = function (results) {
    console.log(results);
    pages = results.photos.pages;
    _(results.photos.photo).each(function (photo) {
        thumbnailURL = generateURL(photo);
        const $img = $('<img>', {src: thumbnailURL});
        const $a = $("<a>").attr("href", `https://www.flickr.com/photos/${photo.owner}/${photo.id}`);
        $a.append($img);
        $('#images').append($a);
    });
};

const  generateURL = function (p) {
    return ['http://farm', p.farm, '.static.flickr.com/', p.server, '/', p.id, '_', p.secret, '_q.jpg'].join('');
};

const throttleLoad  = function () {
    const scrollBottom  = $(document).height() - $(window).height() - $(window).scrollTop();
    if (scrollBottom < 100 && page < pages) {
        page += 1; 
        searchFlickr(term, page);
    }
};

$('document').ready( function () {
    
    $('#search').on('submit', function (event) {
        event.preventDefault();

        term = $('#query').val();
        page = 1;
        pages = 0;
        $('#images').empty();
        searchFlickr(term);

    });

    $(window).on('scroll', _.throttle(throttleLoad, 700));

});