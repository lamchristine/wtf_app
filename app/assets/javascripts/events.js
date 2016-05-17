
var navHeight = 52;

function setMapHeight(){
  $("#map").css("height", $( window ).height() - navHeight);
}

$(document).ready(function(){
  setMapHeight();
  // googleMapBuild();
  geoFindMe();

  $('.like').click( function() {
    console.log("liked!");
  });
});

$(document).on("page:load", function(){
  setMapHeight();
  geoFindMe();
});

// resets Google Map height on change of screen size
$(window).resize(function(){
  setMapHeight();
  // geoFindMe();
});


function geoFindMe() {

  function success(position) {
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;
    $('#coordinates').val(latitude + ',' + longitude);
    var coordinates = latitude + ',' + longitude;
    $('#map').data("latitude", latitude);
    $('#map').data("longitude", longitude);
    alert(coordinates);
  }

  function error() {
    alert("Unable to retrieve your location");
  }

  navigator.geolocation.getCurrentPosition(success, error);
}
