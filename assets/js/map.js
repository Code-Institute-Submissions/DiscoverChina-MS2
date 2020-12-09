let locations = [
    ["Shanghai <h1>test</h1>", 31.224361, 121.469170],
    ["Beijing", 39.916668, 116.383331],
    ["Hong Kong", 22.302711, 114.177216],
    ["Oriental Tower", 31.2397, 121.4998]
];

let map = L.map('map').setView([35.8617, 104.1954], 4);
mapLink =
    '<a href="http://openstreetmap.org">OpenStreetMap</a>';
L.tileLayer(
    'http://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: '&copy; ' + mapLink + ' Contributors',
    maxZoom: 18,
}).addTo(map);

for (let i = 0; i < locations.length; i++) {
    marker = new L.marker([locations[i][1], locations[i][2]])
        .bindPopup(locations[i][0])
        .addTo(map);
}

$(".options-btn").click(function () {
    thisLat = this.dataset.coords.split(",")[0];
    thisLng = this.dataset.coords.split(",")[1];
    thisZoom = parseInt(this.dataset.zoom);
    map.flyTo([thisLat, thisLng], thisZoom);
});