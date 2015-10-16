'use strict';

(function () {

  // data source
  var menuURL = 'https://json-data.herokuapp.com/restaurant/menu/3';

  // templates
  var beerData = function beerData(obj) {

    $('.beer').append('\n      <div class="menuLeft">\n        <div class="menuItemTitle">' + obj.item + '</div>\n        <div class="menuItemPrice">' + obj.price + '</div>\n        <div class="menuItemDescription">' + obj.description + '</div>\n      </div>\n    ');

    if (obj.allergies === 1) {
      $('.beer').append('\n        <div class=\'menuRight\'>\n          <div class=\'menuSpecialIcons\'>\n            <div class=\'entypo-attention\'></div>\n            <div class=\'hoverAttn\'>Allergy Info\n              <hr>\n              <p>Bacon ipsum dolor amet veniam in tail chuck in corned beef mollit, enim turkey.</p>\n            </div>\n          </div>\n        </div>');
    };

    if (obj.favorite === 1) {
      $('.beer').append('\n        <div class=\'menuRight\'>\n          <div class=\'menuSpecialIcons\'>\n            <span class=\'entypo-star\'></span>\n          </div>\n        </div>');
    };

    $('.beer').append("<br>");
  };

  var entreesData = function entreesData(obj) {
    $('.entrees').append('\n      <div class="menuLeft">\n        <div class="menuItemTitle">' + obj.item + '</div>\n        <div class="menuItemPrice">' + obj.price + '</div>\n        <div class="menuItemDescription">' + obj.description + '</div>\n      </div>\n    ');

    if (obj.allergies === 1) {
      $('.entrees').append('\n        <div class=\'menuRight\'>\n          <div class=\'menuSpecialIcons\'>\n            <span class=\'entypo-attention\'></span>\n            <div class=\'hoverAttn\'>Allergy Info\n              <hr>\n              <p>Bacon ipsum dolor amet veniam in tail chuck in corned beef mollit, enim turkey.</p>\n            </div>\n          </div>\n        </div>');
    };

    if (obj.favorite === 1) {
      $('.entrees').append("<div class='menuRight'><div class='menuSpecialIcons'><span class='entypo-star'></span></div></div>");
    };

    $('.entrees').append("<br>");
  };

  var gamesData = function gamesData(obj) {
    $('.games').append('\n      <div class="menuLeft">\n        <div class="menuItemTitle">' + obj.item + '</div>\n        <div class="menuItemPrice">' + obj.price + '</div>\n        <div class="menuItemDescription">' + obj.description + '</div>\n      </div>\n    ');

    if (obj.favorite === 1) {
      $('.games').append("<div class='menuRight'><div class='menuSpecialIcons'><span class='entypo-star'></span></div></div>");
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