(function () {

  //api link
  let url="https://json-data.herokuapp.com/restaurant/news/1"

  //function that does something
  $.getJSON(url).then(function(data){

    //var with html structure
     var whatever = `<div class='newsHead'>
        <h3> ${ data.title } </h3>
        <h3> ${ data.date_published} </h3>
      </div>
      <div class='newsBody'>
        <p> ${ data.post } </p>
      </div>`;

      //append html
      $('#newsblock').append(whatever);
  });
}());
