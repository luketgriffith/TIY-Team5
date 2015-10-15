
 var special= $.getJSON('https://json-data.herokuapp.com/restaurant/special/1');
  special.then( function(x){
    var y= x.menu_item_id;

    var promise = $.getJSON('https://json-data.herokuapp.com/restaurant/menu/3');
    promise.then( function(res){
      var items= res.entrees;
      console.log(items);
      _.each(items, function(z){
        if(z.id === y){
          
          var template= `<p class= 'specialTitle'>${z.item}</p>
         
          <p class='specialPrice'>$${z.price}</p>
           <p class='specialDesc'>${z.description}</p>
          `
          $('.special').append(template);
        }
      })
  
      
});
     });
     