(function () {

let url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=315259924b1acacbb7bf64f20f866672&tags=pub+food&format=json&nojsoncallback=1'

let flpics = $.getJSON(url).then(function(obj){

  let pics = _.first(obj.photos.photo, [5])

  _.each(pics, function(pic){


  let imgLink  = `'https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_m.jpg'`
  let imgBlock =  
    `<div class= "flickrImg">
       <img src=${imgLink}>
     </div>`

    $('.foodPhotos').append(imgBlock)
   });
    

  });
})();