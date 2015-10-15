"use strict";

function foodPics(setId) {

  var URL = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=315259924b1acacbb7bf64f20f866672&tags=pub+food&format=json&nojsoncallback=1&api_sig=7c5b7e3f6b301862923aeffd08799421';

  $.getJSON(URL, function (data) {
    $.each(data.photoset.photo, function (i, item) {

      // '._m' below refers to pic size, see here for other size options: http://www.flickr.com/services/api/misc.urls.html

      var img_src = "http://farm" + item.farm + ".static.flickr.com/" + item.server + "/" + item.id + "_" + item.secret + "_m.jpg";

      //add to html
      $(img_src).appendTo(".foodPhotos");
    });
  });
}

// $(document).ready(function() {

//fill in a set number here if needed

//   foodPics('');
// });

//let foodPicturesURL='https://api.flickr.com/services/rest       [fill in apiKEY here] '

//"https://api.flickr.com/services/rest/" +

// "?method=flickr.photosets.getPhotos" + 

//apiKey

// "&api_key={{315259924b1acacbb7bf64f20f866672}}" + 

//take another look @the setID below
// "&photoset_id=" + 21277725634 +

//1 is for all public photos

// "&privacy_filter=1" +

//increase '20' if more pics are needed

// "&per_page=20" +

// "&format=json&nojsoncallback=1";

//   var apiKEY='';
// }

// $.getJSON('http://api.flickr.com/services/rest/'
//     {
//       method: 'flick.'
//     }

//   )

// "http://api.flickr.com/services/rest/",
//         {
//             method: 'flickr.people.getPublicPhotos',
//             api_key: apiKey,
//             user_id: the_user_id,
//             format: 'json',
//             nojsoncallback: 1,
//             per_page: 10 // you can increase this to get a bigger array
//         },