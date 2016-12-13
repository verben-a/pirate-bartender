var $ = require('jquery');
var displayOptions = require('./displayoptions.js')
var choosing = require('./choosing.js');

var Cocktail = function(taste, mood) {
    this.taste = taste;
    this.mood = mood;
}


Cocktail.prototype.mixing = function(rand) {
    return '<p>If you like ' + this.taste + ' drinks and have a ' + this.mood + ' mood you will like ' + rand + '</p>'
}


$(document).ready(function() {

    $('.dropdown-taste').on('click', function(e){
        e.preventDefault();
        displayOptions('.dropdown-content-taste');
    });

    $('.dropdown-mood').on('click', function(e) {
        e.preventDefault();
        displayOptions('.dropdown-content-mood');
    })


    $('#content-taste p').on('click', function(e) {
        e.preventDefault();
        choosing($(this).text(), '.taste-form', '#content-taste');

    });

    $('#content-mood p').on('click', function(e) {
        e.preventDefault();
        choosing($(this).text(), '.mood-form', '#content-mood');
    });


    $('.submit-mix').on('click', function(e) {
        e.preventDefault();


        var taste = $('.taste-form').val();
        var mood = $('.mood-form').val();


        if (taste == '' && mood == '') {
            alert('Choose the taste and mood!');
            return
        }


        var pirateCocktail = new Cocktail(taste, mood);


        if (taste == 'Strong') {
            var strongDrink = ['Vodka', 'Whiskey'];
            var strong = strongDrink[Math.floor(Math.random() * strongDrink.length)];
            console.log(strong);
            $('.ingredient').append(strong);


        } else if (taste == 'Salty') {
            var saltyDrink = ['Tequila', 'Gin'];
            var salty = saltyDrink[Math.floor(Math.random() * saltyDrink.length)];
            console.log(salty);
            $('.ingredient').append(salty);


        } else if (taste == 'Bitter') {
            var bitterDrink = ['Campari', 'Grenadine'];
            var bitter = bitterDrink[Math.floor(Math.random() * bitterDrink.length)];
            console.log(bitter);
            $('.ingredient').append(bitter);


        } else if (taste == 'Sweet') {
            var sweetDrink = ['Vermouth', 'Cointreau'];
            var sweet = sweetDrink[Math.floor(Math.random() * sweetDrink.length)];
            console.log(sweet);
            $('.ingredient').append(bitter);


        } else if (taste == 'Fruity') {
            var fruityDrink = ['Cherry Liquer', 'Rum'];
            var fruity = fruityDrink[Math.floor(Math.random() * fruityDrink.length)];
            console.log(fruity);
            $('.ingredient').append(fruity);
        }


        var randomDrink = ['The Old Man and the Sea', 'Treasure Island', 'Moby-Dick', 'Twenty Thousand Leagues under the Sea', 'The Odyssey'];
        var rand = randomDrink[Math.floor(Math.random() * randomDrink.length)];
        console.log(rand);


        $('.results').append(pirateCocktail.mixing(rand));


    })


});
