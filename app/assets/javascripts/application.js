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

var navHeight = 52;
var latitude;
var longitude;

function setMapHeight(){
  $("#map").css("height", $( window ).height() - navHeight);
}

$(document).ready(function(){
  // setMapHeight();
  // googleMapBuild();
  // geoFindMe();
  setMapHeight();
  geoFindMe();
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
            "url": "http://maps.google.com/intl/en_us/mapfiles/ms/micons/purple.png",
            "width":  32,
            "height": 32
          },
          "infowindow": "hello!"
        },

        {
          "lat": 37.8044,
          "lng": -122.2711,
          "picture": {
          "url": "http://maps.google.com/intl/en_us/mapfiles/ms/micons/purple.png",
          "width":  32,
          "height": 32
          },
          "infowindow": "Awesome city!"
        },

        {
          "lat": 32.7495,
          "lng": -117.2470,
          "picture": {
          "url": "http://maps.google.com/intl/en_us/mapfiles/ms/micons/purple.png",
          "width":  32,
          "height": 32
          },
          "infowindow": "Beautiful beach!"
        },

        {
          "lat": 37.7594,
          "lng": -122.5107,
          "picture": {
          "url": "http://maps.google.com/intl/en_us/mapfiles/ms/micons/purple.png",
          "width":  32,
          "height": 32
          },
          "infowindow": "The fog is rolling in!"
        },

        {
          "lat": 39.5296,
          "lng": -119.8138,
          "picture": {
          "url": "http://maps.google.com/intl/en_us/mapfiles/ms/micons/purple.png",
          "width":  32,
          "height": 32
          },
          "infowindow": "Great pancakes!"
        },

        {
          "lat": 40.7608,
          "lng": -111.8910,
          "picture": {
          "url": "http://maps.google.com/intl/en_us/mapfiles/ms/micons/purple.png",
          "width":  32,
          "height": 32
          },
          "infowindow": "I love the skiing!"
        }

      ]);
      handler.bounds.extendWith(markers);
      handler.fitMapToBounds();
      handler.getMap().setZoom(10);
    });
}


function geoFindMe() {
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
    googleMapBuild();
  }

  function error() {
    console.log("Unable to retrieve your location");
  }

  console.log("Locating…");
  navigator.geolocation.getCurrentPosition(success, error);
}

function initAutocomplete() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: "latitude", lng: "longitude"},
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  // Create the search box and link it to the UI element.
  var input = document.getElementById('pac-input');
  var searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  // Bias the SearchBox results towards current map's viewport.
  map.addListener('bounds_changed', function() {
    searchBox.setBounds(map.getBounds());
  });

  var markers = [];
  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener('places_changed', function() {
    var places = searchBox.getPlaces();

    if (places.length === 0) {
      return;
    }

    // Clear out the old markers.
    markers.forEach(function(marker) {
      marker.setMap(null);
    });
    markers = [];

    // For each place, get the icon, name and location.
    var bounds = new google.maps.LatLngBounds();
    places.forEach(function(place) {
      var icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };

      // Create a marker for each place.
      markers.push(new google.maps.Marker({
        map: map,
        icon: icon,
        title: place.name,
        position: place.geometry.location
      }));

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });

}
