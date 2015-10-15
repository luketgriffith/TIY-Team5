//for flickr pics on right hand side
"use strict";

function foodPics(setId) {

  var URL = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=315259924b1acacbb7bf64f20f866672&tags=pub+food&format=json&nojsoncallback=1';

  $.getJSON(URL, function (data) {
    $.each(data.photoset.photo, function (i, item) {

      // '._m' below refers to pic size, see here for other size options: http://www.flickr.com/services/api/misc.urls.html

      var img_src = "http://farm" + item.farm + ".static.flickr.com/" + item.server + "/" + item.id + "_" + item.secret + "_m.jpg";

      //add to html
      $(img_src).appendTo(".foodPhotos");
    });
  });
}

//for slider div

// (function slider(){
//   $('.sliderSetup').children('div').click(function(){
//     $('.main')removeClass('main');

//   })

//   .filter(location.hash).click();

// });

(function () {

  var para = $('#storyTitle');
  para.on('click', function () {
    para.addClass('selected');
    $('.ourStoryTab').addClass('shown');
    $('#menuTitle').removeClass('selected');
    $('#reservationsTitle').removeClass('selected');
    $('.menu').removeClass('shown');
    $('.reservationTab').removeClass('shown');
  });

  var para2 = $('#menuTitle');
  para2.on('click', function () {
    para2.addClass('selected');
    $('.menu').addClass('shown');
    $('#storyTitle').removeClass('selected');
    $('#reservationsTitle').removeClass('selected');
    $('.ourStoryTab').removeClass('shown');
    $('.reservationTab').removeClass('shown');
  });

  var para3 = $('#reservationsTitle');
  para3.on('click', function () {
    para3.addClass('selected');
    $('.reservationTab').addClass('shown');
    $('#storyTitle').removeClass('selected');
    $('#menuTitle').removeClass('selected');
    $('.menu').removeClass('shown');
    $('.ourStoryTab').removeClass('shown');
  });
  console.log('meow');
})();