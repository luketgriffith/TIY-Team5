"use strict";

(function () {

  //api link
  var url = "https://json-data.herokuapp.com/restaurant/news/1";

  //function that does something
  $.getJSON(url).then(function (data) {

    //var with html structure
    var whatever = "<div class='newsHead'>\n        <h3> " + data.title + " </h3>\n        <h3> " + data.date_published + " </h3>\n      </div>\n      <div class='newsBody'>\n        <p> " + data.post + " </p>\n      </div>";

    //append html
    $('#newsblock').append(whatever);
  });
})();