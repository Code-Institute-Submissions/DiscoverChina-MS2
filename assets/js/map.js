// Initialize and add the map
function initMap() {
    const china = { lat: 35.8593, lng: 104.1361 };
  
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 3,
      center: china,
    });

    const chinaFlag =
    "https://img.icons8.com/color/48/000000/china-circular.png";

    const tourist =
    "https://img.icons8.com/cotton/100/000000/tourist-backpack--v2.png";

  var markers = [
    {
      coords: { lat: 31.224361, lng: 121.469170 },
      content:
        "<h2>Shanghai</h2>",
      iconImage: chinaFlag,
    },
    {
      coords: { lat: 39.916668, lng: 116.383331 },
      content:
        "<h2>Beijing</h2>",
      iconImage: chinaFlag,
    },
    {
      coords: { lat:  22.302711, lng: 114.177216 },
      content:
        "<h2>Hong Kong</h2>",
      iconImage: chinaFlag,
    }
  ];

  for (var i = 0; i < markers.length; i++) {
    // Add marker
    addMarker(markers[i]);
  }

  function addMarker(props) {
    let marker = new google.maps.Marker({
      position: props.coords,
      map: map,
    });

    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }

    if (props.content) {
      var infoWindow = new google.maps.InfoWindow({
        content: props.content,
      });
    }

    marker.addListener("click", function () {
      map.setZoom(5);
      infoWindow.open(map, marker);
    });

    map.addListener("click", function () {
      if (infoWindow) infoWindow.close();
    });
  }

  $(".options-btn").click(function () {
    map.setCenter(new google.maps.LatLng(this.dataset.lat, this.dataset.lng));
    map.setZoom(13);
  });

  const locations = [
    ["shanghai-test", 39.31361, 3.121398]
  ];
}