var navHeight = 52;
var latitude;
var longitude;


$(document).on("ready page:load", function(){

  // find users location
  geoFindMe();

  // show loading image
  if ($('body.events.index').length) {
    $('#loading').removeClass("display-none");
  }

  // make flash messages disappear
  setTimeout(function removeFlash(){
    $( "#flash_error" ).fadeOut( "slow", function() {
      $('#flash_error').remove();
    });
  }, 3000);

});


// Sets Users Latitude and Longitude on Event Create
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

    // Set Users Lat + Long in Event Create
    if ($('body.events.new').length || $('body.events.edit').length) {
      console.log("about to set coordinates");
      setCoordinates();
    }

    // Initialize Map
    if ($('body.events.index').length) {
      console.log("about to InitMap");
      initMap();
    }
  }

  function error() {
    alert("Unable to retrieve your location");
  }

  navigator.geolocation.getCurrentPosition(success, error);
}

function initMap(){
  /////// MAP STYLES ////////
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
  /////// END MAP STYLES ////////


  // Build Google Map
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

    // Set last Event
    var lastEvent = eventhash[eventhash.length-1];

    // Grab current User ID from Navbar
    var currentUserId = parseInt($('#current_user').attr('data'));

    var lat = lastEvent.lat;
    var lng = lastEvent.lng;


    if (!isNaN(currentUserId)){   // If User is logged in

      // If the current User also made the last event, set Lat & Long to that events coordinates and send them there
      if (lastEvent.user_id === currentUserId){
        lat = lastEvent.lat;
        lng = lastEvent.lng;

        // if not, send them to their current location
      } else {
        lat = latitude;
        lng = longitude;
      }
    } else {
      lat = latitude;
      lng = longitude;
    }

    //to center on a marker
    handler.getMap().panTo({lat: lat, lng: lng});

    // Set zoom
    handler.getMap().setZoom(15);
    //to set the map zoom
    // handler.fitMapToBounds();

    // Resize map to the browser window
    setMapHeight();

    // Remove loading icon
    $('#loading').addClass("display-none");
    }
  );
}
