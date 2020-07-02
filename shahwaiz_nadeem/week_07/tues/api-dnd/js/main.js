const races = [];
const classes = [];


$.ajax('https://www.dnd5eapi.co/api/races').done(function (data) {
    
    data.results.forEach(element => {
        races.push(element);
    });

    races.forEach(race => {
        $button = $('<button>');
        $button.html(race.name);
        $button.on('click', function () {
            $('#player-race').html(race.name);

            // UPDATE PLAYER RACE DATA ///////////////////////////////
            $.ajax('https://www.dnd5eapi.co' + race.url).done(function (info) {
                $('#player-speed').html(info.speed);
                $('#player-size').html(info.size);
                const languages = [];
                info.languages.forEach(element => {
                    languages.push(element.name);
                });
                $('#player-languages').html(languages.join(', '));
                const traits = [];
                info.traits.forEach(element => {
                    traits.push(element.name);
                });
                $('#player-traits').html(traits.join(', '));
            });


        });
        $('#race').append($button);
    });
});

$.ajax('https://www.dnd5eapi.co/api/classes').done(function (data) {
    
    data.results.forEach(element => {
        classes.push(element);
    });

    classes.forEach(dndclass => {
        $button = $('<button>');
        $button.html(dndclass.name);
        $button.on('click', function () {
            $('#player-class').html(dndclass.name);

            // UPDATE PLAYER CLASS DATA ///////////////////////////////
            $.ajax('https://www.dnd5eapi.co' + dndclass.url).done(function (info) {
                const proficiencies = [];
                info.proficiencies.forEach(element => {
                    proficiencies.push(element.name);
                });
                $('#player-proficiencies').html(proficiencies.join(', '));
            });

            
        });
        $('#class').append($button);
    });
});