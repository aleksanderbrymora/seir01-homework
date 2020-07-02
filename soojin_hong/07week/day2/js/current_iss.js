const fetchGeo = function () {
  $.ajax('http://api.open-notify.org/iss-now.json').done(function (data) {
    const longitude = data.iss_position.longitude
    const latitude = data.iss_position.latitude
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/-${ longitude },${ latitude }.json?access_token=pk.eyJ1Ijoic29vamluaG9uZzkxIiwiYSI6ImNrYzF4cjMycDF4cmwydXAzeXJtZWN0bGMifQ.qF88XE0ugCGwPQ6msC4rOA`

    $.ajax(url).done(function (geo) {
      $('#fetch').after(`<p>Current longitude, latitude data: ${ longitude }, ${ latitude }</p>`);

    })
  })
}

$('#fetch').on('click', fetchGeo);
