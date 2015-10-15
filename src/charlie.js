(function () {

// data source
  let menuURL = 'https://json-data.herokuapp.com/restaurant/menu/3';

// templates

  let beerData = function (obj) { 

    $('.menu').append(`
    <div class="menuItemTitle">${ obj.item }</div>
    <div class="menuItemPrice">${ obj.price }</div>
    <div class="menuItemDescription">${ obj.description }</div>
    `)

    if (obj.allergies === 1) {
      $('.menu').append("<div class='menuSpecialIcons'>ALLERGY</div>");
    };

    if (obj.favorite === 1) {
      $('.menu').append("<div class='menuSpecialIcons'>FAVORITE</div>");
    };

    $('.menu').append("<br>");
  };

  let entreesData = function (obj) {
    $('.menu').append(`
    <div class="menuItemTitle">${ obj.item }</div>
    <div class="menuItemPrice">${ obj.price }</div>
    <div class="menuItemDescription">${ obj.description }</div>
    `)

    if (obj.allergies === 1) {
      $('.menu').append("<div class='menuSpecialIcons'>ALLERGY</div>");
    };

    if (obj.favorite === 1) {
      $('.menu').append("<div class='menuSpecialIcons'>FAVORITE</div>");
    };

    $('.menu').append("<br>");
  };

  let gamesData = function (obj) {
    $('.menu').append(`
    <div class="menuItemTitle">${ obj.item }</div>
    <div class="menuItemPrice">${ obj.price }</div>
    <div class="menuItemDescription">${ obj.description }</div>
    `)

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
    }).then (function(data){
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

}());