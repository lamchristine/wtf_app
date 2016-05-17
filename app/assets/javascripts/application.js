// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap-3.3.6.min
//= require underscore
//= require gmaps/google
//= require_tree .

// var navHeight = 52;
//
// function setMapHeight(){
//   $("#map").css("height", $( window ).height() - navHeight);
// }
//
// $(document).ready(function(){
//   setMapHeight();
//   // googleMapBuild();
//   geoFindMe();
//
//   $('.like').click( function() {
//     console.log("liked!");
//   });
// });
//
// $(document).on("page:load", function(){
//   setMapHeight();
//   geoFindMe();
// });
//
// // resets Google Map height on change of screen size
// $(window).resize(function(){
//   setMapHeight();
//   // geoFindMe();
// });
//
//
// function geoFindMe() {
//
//   function success(position) {
//     var latitude  = position.coords.latitude;
//     var longitude = position.coords.longitude;
//     $('#coordinates').val(latitude + ',' + longitude);
//     console.log(latitude);
//   }
//
//   function error() {
//     alert("Unable to retrieve your location");
//   }
//
//   navigator.geolocation.getCurrentPosition(success, error);
// }
