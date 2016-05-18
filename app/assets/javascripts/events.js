

var navHeight = 52;
var latitude;
var longitude;

function setMapHeight(){
  $("#map").css("height", $( window ).height() - navHeight);
}

$(document).on("ready page:load", function(){

  geoFindMe();

});

// resets Google Map height on change of screen size
$(window).resize(function(){
  setMapHeight();
  // geoFindMe();
});


function setCoordinates() {
  $('#coordinates').val(latitude+","+longitude);
  var val = $('#coordinates').val();
  console.log("setCoordinates: coordinates set to: ", val, " if on new event page");
}


function geoFindMe() {

  function success(position) {
    latitude  = position.coords.latitude;
    longitude = position.coords.longitude;
    console.log("GeoSuccess: latitude = "+latitude);
    console.log("GeoSuccess: longitude = "+longitude);

    setCoordinates();
    initMap();
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


    var lastEvent = eventhash[eventhash.length-1];
    var currentUserId = parseInt($('#current_user').attr('data'));


    console.log(eventhash);
    var lat = lastEvent.lat;
    var lng = lastEvent.lng;
    console.log("Initmap: lat: " + lat + ", lng: " + lng);

    console.log('Initmap: lastEvent.user_id = ', lastEvent.user_id);
    console.log('Initmap: current_user data = ', currentUserId);

    // SEND LAT AND LONG AND USERID TO HIDDEN ATTRIBUTE IN POPUP
    // SEND USERID TO ATTRIBUTE IN HASH
    // IF NAV == ATTR SEND TO NEW EVENT
    // ELSE SEND TO CURRENT LOCATION

    if (!isNaN(currentUserId)){
      if (lastEvent.user_id === currentUserId){
        lat = lastEvent.lat;
        lng = lastEvent.lng;
        console.log("Initmap: User === lastUser?");
        console.log(lastEvent.user_id === currentUserId);
      } else {
        lat = latitude;
        lng = longitude;
      }
    } else {
      lat = latitude;
      lng = longitude;
      console.log("Initmap: this should be your location: ",lat,",",lng);
    }




    //to center on a marker
    handler.getMap().panTo({lat: lat, lng: lng});
    console.log ("Initmap: pan to: ", lat, lng);
    handler.getMap().setZoom(15);
    //to set the map zoom
    // handler.fitMapToBounds();
    // handler.getMap().setZoom(15);

    setMapHeight();

    }
  );
}
