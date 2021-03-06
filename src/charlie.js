(function () {

// data source
  let menuURL = 'https://json-data.herokuapp.com/restaurant/menu/3';

// templates
  let beerData = function (obj) { 

    $('.beer').append(`
      <div class="menuLeft">
        <div class="menuItemTitle">${ obj.item }</div>
        <div class="menuItemPrice">${ obj.price }</div>
        <div class="menuItemDescription">${ obj.description }</div>
      </div>
    `)

    if (obj.allergies === 1) {
      $('.beer').append(`
        <div class='menuRight'>
          <div class='menuSpecialIcons'>
            <div class='entypo-attention'></div>
            <div class='hoverAttn'>Allergy Info
              <hr>
              <p>Bacon ipsum dolor amet veniam in tail chuck in corned beef mollit, enim turkey.</p>
            </div>
          </div>
        </div>`);
    };

    if (obj.favorite === 1) {
      $('.beer').append(`
        <div class='menuRight'>
          <div class='menuSpecialIcons'>
            <span class='entypo-star'></span>
          </div>
        </div>`);
    };

    $('.beer').append("<br>");
  };

  let entreesData = function (obj) {
    $('.entrees').append(`
      <div class="menuLeft">
        <div class="menuItemTitle">${ obj.item }</div>
        <div class="menuItemPrice">${ obj.price }</div>
        <div class="menuItemDescription">${ obj.description }</div>
      </div>
    `)

    if (obj.allergies === 1) {
      $('.entrees').append(`
        <div class='menuRight'>
          <div class='menuSpecialIcons'>
            <span class='entypo-attention'></span>
            <div class='hoverAttn'>Allergy Info
              <hr>
              <p>Bacon ipsum dolor amet veniam in tail chuck in corned beef mollit, enim turkey.</p>
            </div>
          </div>
        </div>`);
    };

    if (obj.favorite === 1) {
      $('.entrees').append("<div class='menuRight'><div class='menuSpecialIcons'><span class='entypo-star'></span></div></div>");
    };

    $('.entrees').append("<br>");
  };

  let gamesData = function (obj) {
    $('.games').append(`
      <div class="menuLeft">
        <div class="menuItemTitle">${ obj.item }</div>
        <div class="menuItemPrice">${ obj.price }</div>
        <div class="menuItemDescription">${ obj.description }</div>
      </div>
    `)

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