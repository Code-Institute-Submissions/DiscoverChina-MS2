// array of lat and lng locations
let locations = [
    // Location China
    {
      lat:35.8593,
      lng:104.1361
    },
    // Location Beijing
    {
    lat:39.916668,
    lng:116.383331
    },
    // Location Shanghai
    {
    lat:31.224361,
    lng:121.469170
    },
    // Location Hong Kong
    {
    lat:22.302711,
    lng:114.177216
    }
];
let elements = ['maps', 'map-rec-one', 'map-rec-two', 'map-rec-three']; // array of html element ids


window.addEventListener('load', 
function() {
for (i = 0; i < elements.length; i++) {
    initMap(locations[i], elements[i]);
    console.log(elements[i]);
    console.log(locations[i])}
}, false);

function initMap(location, element) {
    console.log(location)
    console.log(element)
    map = new google.maps.Map(document.getElementById(element), {zoom:4, center: location});

    // Listen for click on map
  google.maps.event.addListener(map, 'click', function(event){
  });
  // Array of markers
  var markers = [
    {
      coords:{lat:31.2403,lng:121.4906},
      iconImage:'assets/images/marker.png',
      content:'<h2>Shanghai</h2>'
    },
    {
      coords:{lat:39.9042,lng:116.4074},
      iconImage:'assets/images/marker.png',
      content:'<h2>Beijing</h2>'
    },
    {
      coords:{lat:22.3193,lng:114.1694},
      iconImage:'assets/images/marker.png',
      content: '<h2>Hong Kong</h2>'
    }
  ];


    var markerPush = [];
    markerPush.push();

  // Loop through markers
  for(var i = 0;i < markersContent.length;i++){
    // Add marker
    addMarker(markersContent[i]);
  }

  // Add Marker Function
  function addMarker(props){
    var marker = new google.maps.Marker({
      position:props.coords,
      map:map,
      //icon:props.iconImage
    });

    // Check for customicon
    if(props.iconImage){
      // Set icon image 
      marker.setIcon(props.iconImage);
    }

    // Check content
    if(props.content){
      var infoWindow = new google.maps.InfoWindow({
        content:props.content
      });

      marker.addListener('click', function(){
        infoWindow.open(map, marker);
      });
    }
  }
}

// window.addEventListener('load', initMap())

// function initMap(){
//     console.log(elements.length)

//     for (element in elements) {
//         console.log(element)
//         map = new google.maps.Map(document.getElementById(element), {
//         center: { lat: -34.397, lng: 150.644 },
//         zoom: 8,
//         });
//     }
// }

/*
function initMap(){
  // Map options
  var options = {
    zoom:4, 
    center: { lat: 35.8617, lng: 104.1954 }
  }

  // New map
  var map = new google.maps.Map(document.getElementById('map'), options);

  // Listen for click on map
  google.maps.event.addListener(map, 'click', function(event){
  });
  // Array of markers
  var markers = [
    {
      coords:{lat:31.2403,lng:121.4906},
      iconImage:'assets/images/marker.png',
      content:'<h2>Shanghai</h2>'
    },
    {
      coords:{lat:39.9042,lng:116.4074},
      iconImage:'assets/images/marker.png',
      content:'<h2>Beijing</h2>'
    },
    {
      coords:{lat:22.3193,lng:114.1694},
      iconImage:'assets/images/marker.png',
      content: '<h2>Hong Kong</h2>'
    }
  ];

  // Loop through markers
  for(var i = 0;i < markers.length;i++){
    // Add marker
    addMarker(markers[i]);
  }

  // Add Marker Function
  function addMarker(props){
    var marker = new google.maps.Marker({
      position:props.coords,
      map:map,
      //icon:props.iconImage
    });

    // Check for customicon
    if(props.iconImage){
      // Set icon image 
      marker.setIcon(props.iconImage);
    }

    // Check content
    if(props.content){
      var infoWindow = new google.maps.InfoWindow({
        content:props.content
      });

      marker.addListener('click', function(){
        infoWindow.open(map, marker);
      });
    }
  }
// Recommended Map One
    var recMapOne = new google.maps.Map(document.getElementById("map-rec-one"), {
    zoom: 7.5,
    center: {
      lat: 39.9042,
      lng: 116.4074,
    },
  });
// Recommended Map Two
    var recMapTwo = new google.maps.Map(document.getElementById("map-rec-two"), {
    zoom: 7.5,
    center: {
      lat: 31.2304,
      lng: 121.4737,
    },
  });
// Recommended Map Three 
    var recMapThree = new google.maps.Map(document.getElementById("map-rec-three"), {
    zoom: 7.5,
    center: {
      lat: 22.3193,
      lng: 114.1694,
    },
  });
}
*/
