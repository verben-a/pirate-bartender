
var Cocktail = function(taste, mood) {
    this.taste = taste;
    this.mood = mood;
}

Cocktail.prototype.mixing = function(rand) {
    return '<p>If you like ' + this.taste + ' drinks and have a ' + this.mood + ' mood you will like ' + rand + '</p>'
}

function showTaste() {
    $('.dropdown-content-taste').toggle('show');
}

function showMood() {
    $('.dropdown-content-mood').toggle('show');
}


    $(document).ready(function() {

        $('#content-taste p').on('click', function(e) {
            e.preventDefault();
            $('.taste-form').val($(this).text());
            $('#content-taste').hide();
        });

        $('#content-mood p').on('click', function(e) {
            e.preventDefault();
            $('.mood-form').val($(this).text());
            $('#content-mood').hide();
        });

        $('.submit-mix').on('click', function(e) {
            e.preventDefault();

            var taste = $('.taste-form').val();
            var mood = $('.mood-form').val();

            var pirateCocktail = new Cocktail(taste, mood);


            if (taste == 'Strong') {
                var strongDrink = ['Vodka', 'Whiskey'];
                var strong = strongDrink[Math.floor(Math.random() * strongDrink.length)];
                $('.ingredient').append(strong);

            } else if (taste == 'Salty') {
                var saltyDrink = ['Tequila', 'Gin'];
                var salty = saltyDrink[Math.floor(Math.random() * saltyDrink.length)];
                $('.ingredient').append(salty);

            } else if (taste == 'Bitter') {
                var bitterDrink = ['Campari', 'Grenadine'];
                var bitter = bitterDrink[Math.floor(Math.random() * bitterDrink.length)];
                $('.ingredient').append(bitter);

            } else if (taste == 'Sweet') {
                var sweetDrink = ['Vermouth', 'Cointreau'];
                var sweet = sweetDrink[Math.floor(Math.random() * sweetDrink.length)];
                $('.ingredient').append(bitter);

            } else if (taste == 'Fruity') {
                var fruityDrink = ['Cherry Liquer', 'Rum'];
                var fruity = fruityDrink[Math.floor(Math.random() * fruityDrink.length)];
                $('.ingredient').append(fruity);
            }

            var randomDrink = ['The Old Man and the Sea', 'Treasure Island', 'Moby-Dick', 'Twenty Thousand Leagues under the Sea', 'The Odyssey'];
            var rand = randomDrink[Math.floor(Math.random() * randomDrink.length)];
            console.log(rand);

            $('.results').append(pirateCocktail.mixing(rand));
            // alert('$('.results').append(pirateCocktail.mixing(rand))');

        })

    });
