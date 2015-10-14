(function () {

// data source
  let menuURL = 'https://json-data.herokuapp.com/restaurant/menu/3';

// templates
  let beerData = function (obj) {
    return `
    <div class="menuItemTitle">${ obj.item }</div>
    <div class="menuItemPrice">${ obj.price }</div>
    <div class="menuItemDescription">${ obj.description }</div>`
  };

  let entreesData = function (obj) {
    return `
    <div class="menuItemTitle">${ obj.item }</div>
    <div class="menuItemPrice">${ obj.price }</div>
    <div class="menuItemDescription">${ obj.description }</div>`
  };

  let gamesData = function (obj) {
    return `
    <div class="menuItemTitle">${ obj.item }</div>
    <div class="menuItemPrice">${ obj.price }</div>
    <div class="menuItemDescription">${ obj.description }</div>`
  };

// function to put menu items on page
  $.ajax({
      url: menuURL,
      dataType: 'json',
      method: 'get'
    }).then (function(data){
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

}());