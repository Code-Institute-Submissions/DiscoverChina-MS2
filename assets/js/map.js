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
      iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
      content:'<h1>Test 1</h1>'
    },
    {
      coords:{lat:31.2272,lng:121.4921},
      content:'<h1>Test 2</h1>'
    },
    {
      coords:{lat:31.2335,lng:121.5056},
      content: '<p>Hello World</p>'
    },
    {
      coords:{lat:31.6762,lng:121.6503}
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
}