

(function (){
  
var para = $('#storyTitle');
para.on('click', function(){
    para.addClass('selected');
   $('.ourStoryTab').addClass('shown');
   $('#menuTitle').removeClass('selected');
   $('#reservationsTitle').removeClass('selected');
   $('.menu').removeClass('shown');
   $('.reservationTab').removeClass('shown');
});

var para2 = $('#menuTitle');
para2.on('click', function(){
  para2.addClass('selected');
  $('.menu').addClass('shown');
  $('#storyTitle').removeClass('selected');
  $('#reservationsTitle').removeClass('selected');
   $('.ourStoryTab').removeClass('shown');
   $('.reservationTab').removeClass('shown');
});

var para3 = $('#reservationsTitle');
para3.on('click', function(){
  para3.addClass('selected');
  $('.reservationTab').addClass('shown');
  $('#storyTitle').removeClass('selected');
  $('#menuTitle').removeClass('selected');
   $('.menu').removeClass('shown');
   $('.ourStoryTab').removeClass('shown');
});
console.log('meow')
})();














