$(document).ready(function () {
  const catchPokemon = function () {
    const pokemon_name = $('#pokemon_name').val();
    const url = `https://pokeapi.co/api/v2/pokemon/${ pokemon_name }`;

    $.ajax(url).done(function (data) {
      console.log(data);
      pokemon_image = data.sprites.front_default;
      result_name = data.name;
      if (data.types.lenght > 1) {
        result_type = `${ data.types[0].type.name }, ${ data.types[1].type.name }`;
      } else {
        result_type = `${ data.types[0].type.name }`;
      }
      result_height = `${ data.height*10 } cm.`
      result_weight = `${ data.weight/10 } kg.`

      $('#pokemon_image').attr('src', pokemon_image).css('visibility', 'visible');
      $('#result_name').text(result_name)
      $('#result_type').text(result_type)
      $('#result_height').text(result_height)
      $('#result_weight').text(result_weight)
    });

    result_species_url = `https://pokeapi.co/api/v2/pokemon-species/${ pokemon_name }`
    $.ajax(result_species_url).done( function (data) {
      console.log(data)

      const flavour_text = `${ data.flavor_text_entries[10].flavor_text}`

      $('#result_flavour_text').text(flavour_text)
    });

  };
  const $pokemon_search = $('#pokemon_search');
  $pokemon_search.on('click', catchPokemon)
});
