const fetchGhibli = function(event) {
  // const xhr = new XMLHttpRequest()
  event.preventDefault();
  $('p').html('')
  const userInput = $('#ghibli').val()
  $.ajax(`https://ghibliapi.herokuapp.com/films`).done(function(info) {
    for (let i = 0; i < info.length; i++) {
      title = info[i].title
      ghibliURL = info[i].url
      if (userInput.toLowerCase() === title.toLowerCase()) {
        $('h1').after(`<p>${title}, ${ghibliURL}</p>`)
        return
      }
    }
    message = "Sorry that is not a ghibli movie"
    $('h1').after(`<p>${message}</p>`)
  })
}

$('.requestForm').on('click', fetchGhibli)
