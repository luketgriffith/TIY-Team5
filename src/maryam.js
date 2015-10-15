 //for flickr pics on right hand side 
function foodPics(setId) {
  
  var URL = 

    'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=315259924b1acacbb7bf64f20f866672&tags=pub+food&format=json&nojsoncallback=1';


  $.getJSON(URL, function(data){
    $.each(data.photoset.photo, function(i, item){
      
      // '._m' below refers to pic size, see here for other size options: http://www.flickr.com/services/api/misc.urls.html

      var img_src = "http://farm" + item.farm + ".static.flickr.com/" + item.server + "/" + item.id + "_" + item.secret + "_m.jpg";
      
      
      //add to html
      $(img_src).appendTo(".foodPhotos");
    });
  });
}


//for slider div

(function slider(){
  $('.sliderSetup').children('div').click(function(){
    $('.main')removeClass('main');

  })
});























