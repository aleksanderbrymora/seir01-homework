//
// $('#getFortune').click(function(event) {
$(document).ready(function(event) {
  const info = {
    url: "https://api.forismatic.com/api/1.0/",
    jsonp: "jsonp",
    dataType: "jsonp",
    data: {
      method: "getQuote",
      lang: "en",
      format: "jsonp"
      }
    };
  $.ajax(info).done(function (data) {
    // const quote = data.quoteText;
    $('#quoteText').text(data.quoteText);
  }).done(function(response) {
    console.log(response);
  }).fail(function() {
    alert('something went wrong');
  });
});

// const fetchFortune = function (event) {
//   const url = "https://api.forismatic.com/api/1.0";
//
//   // New style jQuery: Deferreds
//   $.ajax(url).done(function (data) {
//     const cover = data.items[0].volumeInfo.imageLinks.thumbnail;
//     $('#cover').attr('src', cover);
//   }).done(function (response) {
//     console.log(response);
//   }).fail(function () {
//     alert('Something bad happen');
//   });
// //
//   // Classic jQuery:
//   // $.ajax(url, {
//   //   success: function (data) {
//   //     const cover = data.items[0].volumeInfo.imageLinks.thumbnail;
//   //     $('#cover').attr('src', cover);
//   //   },
//   // });
// };
//
// const $form = $('#search_form');
// $form.on('submit', fetchCover);
