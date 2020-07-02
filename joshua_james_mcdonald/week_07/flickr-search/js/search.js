var flag = false;
var page =1;
const searchFlickr = function(keywords){
    const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?';
    $.getJSON(flickrURL, {
        method: 'flickr.photos.search', // what function is running on flickr
        api_key: '2f5ac274ecfac5a455f38745704ad084',
        text: keywords,
        format: 'json',
        page: page
    }).done(showImages).done(function(info){
        console.log(info);
    });
};

const showImages = function (results){
    _(results.photos.photo).each(function(photo){
        const thumbnailURL = generateURL(photo);
        $('#images').append(`<img src="${thumbnailURL}"></img><a href="${thumbnailURL}">Visit</a> `)
    })
    flag = false;

}

const generateURL = function(p){
    return [
        'http://farm',
        p.farm,
        '.static.flickr.com/',
        p.server,
        '/',
        p.id,
        '_',
        p.secret,
        '.jpg' // change q to something else, you get different sizes
    ].join('');
}
    
$(document).ready(function(){
    //select the form element
    let term;
    $('form#search').on('submit', function(event) {
        event.preventDefault();
        $('div#images img').remove();
        term = $('#query').val();
        page = 1;
        searchFlickr(term);

    });
    $(window).on('scroll', function(){
        percentageLeft = 100*($(document).height() - $(window).height() - $(window).scrollTop())/$(document).height();
        if ((flag == false) && (percentageLeft <10)){
            console.log("close to bottom");
            page+=1;
            flag = true;
            searchFlickr(term);
        } 
    })
})