'use strict';

(function () {

  var url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=315259924b1acacbb7bf64f20f866672&tags=pub+food&format=json&nojsoncallback=1';

  var flpics = $.getJSON(url).then(function (obj) {

    var pics = _.first(obj.photos.photo, [5]);

    _.each(pics, function (pic) {

      var imgLink = '\'https://farm' + pic.farm + '.staticflickr.com/' + pic.server + '/' + pic.id + '_' + pic.secret + '.jpg\'';
      var imgBlock = '<div class= "flickrImg">\n       <img src=' + imgLink + '>\n     </div>';

      $('.foodPhotos').append(imgBlock);
    });
  });
})();