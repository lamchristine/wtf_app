
var navHeight = 52;
var latitude;
var longitude;
function setMapHeight(){
  $("#map").css("height", $( window ).height() - navHeight);
  console.log("setMapHeight");
}


$(document).ready(function(){
  // setMapHeight();
  // googleMapBuild();
  // geoFindMe();
  setMapHeight();
  geoFindMe();
  // console.log(window.location.search);

  $('.event-btn').click(function(){
    console.log("hi");

    // push something to the btn css class via jquery

    // function setParams() {
    //   var queryString = "&latitude="+latitude+"&longitude="+longitude;
    //   window.location.search = queryString;
    //
    // }
    // setParams();
    // return;


  });

});

$(document).on("page:load", function(){
  // sets Google Map height on load
  setMapHeight();
  geoFindMe();

  // googleMapBuild();
});

// resets Google Map height on change of screen size
$(window).resize(function(){
  setMapHeight();
  // geoFindMe();
});

function googleMapBuild() {
  console.log("googleMapBuild");
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
          "lat": latitude,
          "lng": longitude,
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
      handler.getMap().setZoom(19);
    });

}



function geoFindMe() {
  console.log("geoFindMe");
  var output = document.getElementById("out");

  if (!navigator.geolocation){
    console.log( "Geolocation is not supported by your browser");
    return;
  }

  function success(position) {
    latitude  = position.coords.latitude;
    longitude = position.coords.longitude;
    console.log('Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°');
    var img = new Image();
    img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false";

    console.log("geoFindMe:success");
    // console.log(queryString);

    googleMapBuild();

  }

  function error() {
    console.log("Unable to retrieve your location");
  }

  console.log("Locating…");
  navigator.geolocation.getCurrentPosition(success, error);
}
