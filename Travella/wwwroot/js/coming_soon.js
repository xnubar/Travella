$(function () {
    var images = [
        'url(../images/ispaniya.jpg)',
        'url(../images/baku.jpg)',
        'url(../images/london.jpg)',
        'url(../images/paris.jpg)',
        'url(../images/Untitled-1.jpg)',


    ]    
    var slide_count = 0;
        setInterval(function () {
            if (slide_count > images.length) {
                slide_count = 0;
            }
            console.log(images[slide_count]);
            $('.bg').css('background-image', images[slide_count]);
            slide_count++;
            
        }, 4000);



});

// Custom map
function custom_map() {

    var var_location = new google.maps.LatLng(40.4036948, 49.8507153);

    var var_mapoptions = {
        center: var_location,
        zoom: 14,
        styles: [
            {
                "featureType": "administrative",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#5f94ff"
                    },
                    {
                        "lightness": 26
                    },
                    {
                        "gamma": 5.86
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [
                    {
                        "weight": 0.6
                    },
                    {
                        "saturation": -85
                    },
                    {
                        "lightness": 61
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#0066ff"
                    },
                    {
                        "saturation": 74
                    },
                    {
                        "lightness": 100
                    }
                ]
            }
        ]
    };

    var var_map = new google.maps.Map(document.getElementById("map-container"),
        var_mapoptions);

    var var_marker = new google.maps.Marker({
        position: var_location,
        map: var_map,
        title: "TRAVELLA"
    });
}

// Initialize maps
google.maps.event.addDomListener(window, 'load', custom_map);




