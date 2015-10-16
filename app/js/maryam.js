
//for flickr pics on right hand side
"use strict";

function foodPics(setId) {

  var getPics = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=315259924b1acacbb7bf64f20f866672&tags=pub+food&format=json&nojsoncallback=1';

  $.getJSON(getPics, function (data) {
    $.each(data.photos, function (i, item) {

      // '._m' below refers to pic size, see here for other size options: http://www.flickr.com/services/api/misc.urls.html

      var img_src = "http://farm" + item.farm + ".static.flickr.com/" + item.server + "/" + item.id + "_" + item.secret + "_m.jpg";
      console.log(foodPics);

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

// (function (){

var para = $('#storyTitle');
para.on('click', function () {
  para.addClass('selected');
  $('.ourStoryTab').addClass('shown');
  $('#menuTitle').removeClass('selected');
  $('#reservationsTitle').removeClass('selected');
  $('#commentsTitle').removeClass('selected');
  $('.menu').removeClass('shown');
  $('.reservationTab').removeClass('shown');
  $('.comments').removeClass('shown');
});

var para2 = $('#menuTitle');
para2.on('click', function () {
  para2.addClass('selected');
  $('.menu').addClass('shown');
  $('#storyTitle').removeClass('selected');
  $('#reservationsTitle').removeClass('selected');
  $('#commentsTitle').removeClass('selected');
  $('.ourStoryTab').removeClass('shown');
  $('.reservationTab').removeClass('shown');
  $('.comments').removeClass('shown');
});

var para3 = $('#reservationsTitle');
para3.on('click', function () {
  para3.addClass('selected');
  $('.reservationTab').addClass('shown');
  $('#storyTitle').removeClass('selected');
  $('#menuTitle').removeClass('selected');
  $('#commentsTitle').removeClass('selected');
  $('.menu').removeClass('shown');
  $('.ourStoryTab').removeClass('shown');
  $('.comments').removeClass('shown');
});
var para4 = $('#commentsTitle');
para4.on('click', function () {
  $('.comments').addClass('shown');
  $('#commentsTitle').addClass('selected');
  $('#storyTitle').removeClass('selected');
  $('#reservationsTitle').removeClass('selected');
  $('#menuTitle').removeClass('selected');
  $('.ourStoryTab').removeClass('shown');
  $('.reservationTab').removeClass('shown');
  $('.menu').removeClass('shown');
});

var message = $('.submitBtn');
message.on('click', function () {
  $('.message').toggleClass('appear');
  $('.submitBtn').text('Un-submit');
});
// })();