'use strict';

(function () {

  // data source
  var menuURL = 'https://json-data.herokuapp.com/restaurant/menu/3';

  // templates

  var beerData = function beerData(obj) {

    $('.menu').append('\n    <div class="menuItemTitle">' + obj.item + '</div>\n    <div class="menuItemPrice">' + obj.price + '</div>\n    <div class="menuItemDescription">' + obj.description + '</div>\n    ');

    if (obj.allergies === 1) {
      $('.menu').append("<div class='menuSpecialIcons'>ALLERGY</div>");
    };

    if (obj.favorite === 1) {
      $('.menu').append("<div class='menuSpecialIcons'>FAVORITE</div>");
    };

    $('.menu').append("<br>");
  };

  var entreesData = function entreesData(obj) {
    $('.menu').append('\n    <div class="menuItemTitle">' + obj.item + '</div>\n    <div class="menuItemPrice">' + obj.price + '</div>\n    <div class="menuItemDescription">' + obj.description + '</div>\n    ');

    if (obj.allergies === 1) {
      $('.menu').append("<div class='menuSpecialIcons'>ALLERGY</div>");
    };

    if (obj.favorite === 1) {
      $('.menu').append("<div class='menuSpecialIcons'>FAVORITE</div>");
    };

    $('.menu').append("<br>");
  };

  var gamesData = function gamesData(obj) {
    $('.menu').append('\n    <div class="menuItemTitle">' + obj.item + '</div>\n    <div class="menuItemPrice">' + obj.price + '</div>\n    <div class="menuItemDescription">' + obj.description + '</div>\n    ');

    if (obj.favorite === 1) {
      $('.menu').append("<div class='menuSpecialIcons'>FAVORITE</div>");
    };

    $('.menu').append("<br>");
  };

  // function to put menu items on page
  $.ajax({
    url: menuURL,
    dataType: 'json',
    method: 'get'
  }).then(function (data) {
    _.each(data.Beer, function (item) {
      var beerHTML = beerData(item);
      $('.menu').append(beerHTML);
    });
    _.each(data.entrees, function (item) {
      var entreesHTML = entreesData(item);
      $('.menu').append(entreesHTML);
    });
    _.each(data.games, function (item) {
      var gamesHTML = gamesData(item);
      $('.menu').append(gamesHTML);
    });
  });
})();