

var navHeight = 52;
var latitude;
var longitude;

function setMapHeight(){
  $("#map").css("height", $( window ).height() - navHeight);
}

$(document).on("ready page:load", function(){

  geoFindMe();
  initMap();
  setMapHeight();

  console.log('ready page:load');


});

// resets Google Map height on change of screen size
$(window).resize(function(){
  setMapHeight();
  // geoFindMe();
});

function setCoordinates() {
  $('#coordinates').val(latitude+","+longitude);
  var val = $('#coordinates').val();
  console.log("coordinates set to: ", val);
}

function geoFindMe() {
  console.log('geoFindMe');
  function success(position) {
    latitude  = position.coords.latitude;
    longitude = position.coords.longitude;
    console.log("latitude= "+latitude);
    console.log("longitude= "+longitude);
    // $('#coordinates').val(latitude + ',' + longitude);
    setCoordinates();
  }

  function error() {
    alert("Unable to retrieve your location");
  }

  navigator.geolocation.getCurrentPosition(success, error);
}

function initMap(){

  var mapStyle = [
    {
        "featureType": "landscape.natural",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#e0efef"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "hue": "#1900ff"
            },
            {
                "color": "#c0e8e8"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": 100
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": 700
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#7dcdcd"
            }
        ]
    }
  ];




  handler = Gmaps.build('Google');
  handler.buildMap({
    provider: {
      scrollwheel: false,
      styles: mapStyle
    },
    internal: {
      id: 'map'
    }
  }, function onBuildMapSuccess(){
    var eventhash = window.eventhash;
    markers = handler.addMarkers(eventhash);

    //<% if current_user %>
    var lat = eventhash[eventhash.length-1].lat;
    var lng = eventhash[eventhash.length-1].lng;
    console.log("lat: " + lat + ", long: ", + long);
    // <% else %>
      // var coordinates = geoFindMe();
      // console.log(coordinates);
      // var coord_arr = coordinates.split(',');
      // console.log(coord_arr);
      // var lat = parseFloat(coord_arr[0]);
      // var lng = parseFloat(coord_arr[1]);
    //<% end %>



    //to center the map AND adjust zoom to see ALL markers
    // handler.fitMapToBounds(); // BREAKS ALL THE THINGS

    //to center on a marker
    handler.getMap().panTo({lat: lat, lng: lng})
    //to set the map zoom
    handler.getMap().setZoom(15);



    }
  );
}
