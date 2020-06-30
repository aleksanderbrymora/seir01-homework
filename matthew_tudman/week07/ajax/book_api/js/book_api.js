const fetchCover = function(event) {
  event.preventDefault();
  const name = $('#book_title').val();
  const url = `http://openlibrary.org/search.json?title=${name}`



  $.ajax(url).done(function (data) {


    // const info = data.docs[0] used to find info

    const publish = data.docs[0].first_publish_year
    $('#publish').text(`Published: ${publish}`)

    const author = data.docs[0].author_name
    $('#author').text(author)

    const cover_id = data.docs[0].cover_i
    const cover = `https://covers.openlibrary.org/b/id/${cover_id}-M.jpg`
    // http://covers.openlibrary.org/b/$key/$value-$size.jpg
    $('#cover').attr('src', cover)

    // console.log(info);
  });
};





const $form = $('#search_form')

$form.on('submit', fetchCover)
