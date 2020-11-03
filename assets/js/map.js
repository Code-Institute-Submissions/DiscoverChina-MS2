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
      lat: 39.9042,
      lng: 116.4074,
    },
  });
// Recommended Map Two
    var recMapThree = new google.maps.Map(document.getElementById("map-rec-three"), {
    zoom: 7.5,
    center: {
      lat: 39.9042,
      lng: 116.4074,
    },
  });
}
