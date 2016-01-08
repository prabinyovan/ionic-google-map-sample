// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
	var map;
	var div = document.getElementById("map_canvas");

	// Initialize the map view
	map = plugin.google.maps.Map.getMap(div, {
        'camera': {
            'latLng': setPosition(-19.9178713, -43.9603117),
            'zoom': 10
        }
    });

	// Wait until the map is ready status.
	map.addEventListener(plugin.google.maps.event.MAP_READY, function(){
        
        // Defining markers for demo
        var markers = [{
            position: setPosition(-19.9178713, -43.9603117),
            title: "Wallmart, \nOak Park,\nCA\n",
            snippet: "Prabin Yovan"
        }, 
        {
            position: setPosition(-19.8363826, -43.9787167),
            title: "Rite Aid,\nCallabas,\nCA\n",
            snippet: "Suresh Mohan"
        },
        {
            position: setPosition(-19.8263826, -43.9787167),
            title: "Rite Aid,\nCallabas,\nCA\n",
            snippet: "Senthil Kumaran"
        }];
        
        // Bind markers
        for (var i = 0; i < markers.length; i++) {
            map.addMarker({
                'marker': markers[i],
                'position': markers[i].position,
                'icon' : 'http://rinsoft.com/cmnh/cmnh-map-pin.png',
				'title': markers[i].title,
                'snippet': markers[i].snippet,
                'url' : 'http://rinsoft.com/cmnh/cmnh-map-pin.png',
            }, function(marker) {
                
                marker.on("click", function() {
                    marker.showInfoWindow();
                    
                });
                
                marker.addEventListener(plugin.google.maps.event.INFO_CLICK, function() {
                    alert('URL: ' + marker.get('url'));
                });
                
            });
        }
    });
	
    function onMapCameraChanged(position) {
        var map = this;
        //console.log(JSON.stringify(position));
        alert(position.target.lat + ", " + position.target.lng);
    }
    map.on(plugin.google.maps.event.CAMERA_CHANGE, onMapCameraChanged);
    
	function setPosition(lat, lng) {
        return new plugin.google.maps.LatLng(lat, lng);
    }
  });
})
