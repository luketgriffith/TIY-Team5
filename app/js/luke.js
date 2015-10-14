
var promise = $.getJSON('https://json-data.herokuapp.com/restaurant/special/1');
  promise.then( function(res){
    
      var special= res.id;
      var promise2= $.getJSON('https://json-data.herokuapp.com/restaurant/menu/2');
        promise2.then(function(x){
          var menu=x.breakfast;
          var item= menu[special];
          var template= `<p class= 'specialTitle'>${item.item}</p>
          <p class='specialDesc'>${item.description}</p>
          <p class='specialPrice'>$${item.price}</p>
          `
          $('.special').append(template);

        })
   }); 