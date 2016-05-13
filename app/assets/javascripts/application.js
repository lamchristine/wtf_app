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
//= require bootstrap-3.3.6.min
//= require underscore
//= require gmaps/google
//= require turbolinks
//= require_tree .



$(document).ready(function(){

  handler = Gmaps.build('Google');
  handler.buildMap({
      provider: {
        disableDefaultUI: true
        // pass in other Google Maps API options here
      },
      internal: {
        id: 'map'
      }
    },
    function(){
      markers = handler.addMarkers([
        {
          "lat": 37.7749,
          "lng": -122.4194,
          "picture": {
            "url": "http://people.mozilla.com/~faaborg/files/shiretoko/firefoxIcon/firefox-32.png",
            "width":  32,
            "height": 32
          },
          "infowindow": "hello!"
        }
      ]);
      handler.bounds.extendWith(markers);
      handler.fitMapToBounds();
    });

  // sets Google Map height on load
  $("#map").css("height", $( window ).height());

});




function geoFindMe() {
  var output = document.getElementById("out");

  if (!navigator.geolocation){
    output.innerHTML = "Geolocation is not supported by your browser";
    return;
  }

  function success(position) {
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;

    output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';

    var img = new Image();
    img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false";

    output.appendChild(img);
  }

  function error() {
    output.innerHTML = "Unable to retrieve your location";
  }

  output.innerHTML = "<p>Locating…</p>";

  navigator.geolocation.getCurrentPosition(success, error);
}

// resets Google Map height on change of screen size
$(window).resize(function(){
  $("#map").css("height", $( window ).height());
});
