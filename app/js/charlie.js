'use strict';

(function () {

  // data source
  var menuURL = 'https://json-data.herokuapp.com/restaurant/menu/3';

  // templates

  var beerData = function beerData(obj) {

    $('.beer').append('\n    <div class="menuItemTitle">' + obj.item + '</div>\n    <div class="menuItemPrice">' + obj.price + '</div>\n    <div class="menuItemDescription">' + obj.description + '</div>\n    ');

    if (obj.allergies === 1) {
      $('.beer').append("<div class='allergyContainer'>ALLERGY</div>");
    };

    if (obj.favorite === 1) {
      $('.beer').append("<div class='favoriteContainer'>FAVORITE</div>");
    };

    $('.beer').append("<br>");
  };

  var entreesData = function entreesData(obj) {
    $('.entrees').append('\n    <div class="menuItemTitle">' + obj.item + '</div>\n    <div class="menuItemPrice">' + obj.price + '</div>\n    <div class="menuItemDescripti;on">' + obj.description + '</div>\n    ');

    if (obj.allergies === 1) {
      $('.entrees').append("<div class='allergyContainer'>ALLERGY</div>");
    };

    if (obj.favorite === 1) {
      $('.entrees').append("<div class='favoriteContainer'>FAVORITE</div>");
    };

    $('.entrees').append("<br>");
  };

  var gamesData = function gamesData(obj) {
    $('.games').append('\n    <div class="menuItemTitle">' + obj.item + '</div>\n    <div class="menuItemPrice">' + obj.price + '</div>\n    <div class="menuItemDescripti;on">' + obj.description + '</div>\n    ');

    if (obj.favorite === 1) {
      $('.games').append("<div class='favoriteContainer'>FAVORITE</div>");
    };

    $('.games').append("<br>");
  };

  // function to put menu items on page
  $.ajax({
    url: menuURL,
    dataType: 'json',
    method: 'get'
  }).then(function (data) {
    _.each(data.Beer, function (item) {
      var beerHTML = beerData(item);
      $('.beer').append(beerHTML);
    });
    _.each(data.entrees, function (item) {
      var entreesHTML = entreesData(item);
      $('.entrees').append(entreesHTML);
    });
    _.each(data.games, function (item) {
      var gamesHTML = gamesData(item);
      $('.games').append(gamesHTML);
    });
  });
})();