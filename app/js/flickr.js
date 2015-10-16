'use strict';

(function () {
  //flickr api link
  var url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=315259924b1acacbb7bf64f20f866672&tags=pub+food&format=json&nojsoncallback=1';
  // function to do something
  var flpics = $.getJSON(url).then(function (obj) {
    //narrows down api array to first five pictures
    var pics = _.first(obj.photos.photo, [5]);
    //iterate over pictures
    _.each(pics, function (pic) {

      // sets up link to static jpg and not just the whole site
      var imgLink = '\'https://farm' + pic.farm + '.staticflickr.com/' + pic.server + '/' + pic.id + '_' + pic.secret + '_m.jpg\'';
      var imgBlock = '<div class= "flickrImg">\n       <img src=' + imgLink + '>\n     </div>';
      //on da page
      $('.foodPhotos').append(imgBlock);
    });
  });
})();