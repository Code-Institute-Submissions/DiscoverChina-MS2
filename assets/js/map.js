function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 3,
    center: { lat: 35.8617, lng: 104.1954 },
  });

  var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  var markers = locations.map((location, i) => {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length],
    });
  });
// Clusters
  new MarkerClusterer(map, markers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });
}
// Locations
var locations = [
  {lat:31.2403,lng:121.4906},
  {lat:31.2272,lng:121.4921},
  {lat:31.2335,lng:121.5056},
  {lat:31.6762,lng:121.6503}

];