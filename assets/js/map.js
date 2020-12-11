let locations = [
    ["<h1>Shanghai</h1>", 31.224361, 121.469170],
    ["<h1>Beijing</h1>", 39.916668, 116.383331],
    ["<h1>Hong Kong</h1>", 22.302711, 114.177216],
//Shanghai Location Markers
    ["<h3 class=info-window-styling>Oriental Pearl Tower</h3> <p class=info-window-p>1 Century Ave, Lu Jia Zui, Pudong, Shanghai, China</P> <button class=info-window-button onclick=choosePlace('starFerry')>test</button>", 31.2397, 121.4998],
    ["<h3 class=info-window-styling>Nanjing Road</h3> <p class=info-window-p>1 Century Ave, Lu Jia Zui, Pudong, Shanghai, China</P> <button class=info-window-button onclick=choosePlace('starFerry')>test</button>", 31.2342, 121.4713],
    ["<h3 class=info-window-styling>The Shanghai Museum</h3> <p class=info-window-p>1 Century Ave, Lu Jia Zui, Pudong, Shanghai, China</P> <button class=info-window-button onclick=choosePlace('starFerry')>test</button>", 31.2283, 121.4451],
    ["<h3 class=info-window-styling>Jade Buddah Temple</h3> <p class=info-window-p>1 Century Ave, Lu Jia Zui, Pudong, Shanghai, China</P> <button class=info-window-button onclick=choosePlace('starFerry')>test</button>", 31.2413, 121.4451],
    ["<h3 class=info-window-styling>Hakkasan</h3> <p class=info-window-p>1 Century Ave, Lu Jia Zui, Pudong, Shanghai, China</P> <button class=info-window-button onclick=choosePlace('starFerry')>test</button>", 31.23863, 121.48971],
    ["<h3 class=info-window-styling>Hiya</h3> <p class=info-window-p>1 Century Ave, Lu Jia Zui, Pudong, Shanghai, China</P> <button class=info-window-button onclick=choosePlace('starFerry')>test</button>", 31.1422, 121.2853],
    ["<h3 class=info-window-styling>Mercato</h3> <p class=info-window-p>1 Century Ave, Lu Jia Zui, Pudong, Shanghai, China</P> <button class=info-window-button onclick=choosePlace('starFerry')>test</button>", 31.1200, 121.2354],
    ["<h3 class=info-window-styling>Mr and Mrs Bund</h3> <p class=info-window-p>1 Century Ave, Lu Jia Zui, Pudong, Shanghai, China</P> <button class=info-window-button onclick=choosePlace('starFerry')>test</button>", 31.1418, 121.2922],
    ["<h3 class=info-window-styling>Yu Garden</h3> <p class=info-window-p>1 Century Ave, Lu Jia Zui, Pudong, Shanghai, China</P> <button class=info-window-button onclick=choosePlace('starFerry')>test</button>", 31.2272, 121.4921],
    ["<h3 class=info-window-styling>The Bund Promenade</h3> <p class=info-window-p>1 Century Ave, Lu Jia Zui, Pudong, Shanghai, China</P> <button class=info-window-button onclick=choosePlace('starFerry')>test</button>", 31.2272, 121.4921],
    ["<h3 class=info-window-styling>The People's Square</h3> <p class=info-window-p>1 Century Ave, Lu Jia Zui, Pudong, Shanghai, China</P> <button class=info-window-button onclick=choosePlace('starFerry')>test</button>", 31.2297, 121.4762],
    ["<h3 class=info-window-styling>Longhua Temple & Pagoda</h3> <p class=info-window-p>1 Century Ave, Lu Jia Zui, Pudong, Shanghai, China</P> <button class=info-window-button onclick=choosePlace('starFerry')>test</button>", 31.1738, 121.4519],
// Beijing Location Markers
    ["<h3 class=info-window-styling>Temple Of Heaven</h3> <p class=info-window-p>1 Century Ave, Lu Jia Zui, Pudong, Shanghai, China</P> <button class=info-window-button onclick=choosePlace('starFerry')>test</button>", 39.8822, 116.4066],
    ["<h3 class=info-window-styling>Imperial Palace & The Foribdden City</h3> <p class=info-window-p>1 Century Ave, Lu Jia Zui, Pudong, Shanghai, China</P> <button class=info-window-button onclick=choosePlace('starFerry')>test</button>", 39.9169, 116.3907],
    ["<h3 class=info-window-styling>The Great Wall of China</h3> <p class=info-window-p>1 Century Ave, Lu Jia Zui, Pudong, Shanghai, China</P> <button class=info-window-button onclick=choosePlace('starFerry')>test</button>", 40.4319, 116.5704],
    ["<h3 class=info-window-styling>Beijing Capital Museum</h3> <p class=info-window-p>1 Century Ave, Lu Jia Zui, Pudong, Shanghai, China</P> <button class=info-window-button onclick=choosePlace('starFerry')>test</button>", 39.9064, 116.3419],
    ["<h3 class=info-window-styling>Jubaoyuan</h3> <p class=info-window-p>1 Century Ave, Lu Jia Zui, Pudong, Shanghai, China</P> <button class=info-window-button onclick=choosePlace('starFerry')>test</button>", 39.8869, 116.3632],
    ["<h3 class=info-window-styling>Qing-Feng Steamed Dumpling</h3> <p class=info-window-p>1 Century Ave, Lu Jia Zui, Pudong, Shanghai, China</P> <button class=info-window-button onclick=choosePlace('starFerry')>test</button>", 39.5527, 116.2320], 
    ["<h3 class=info-window-styling>Haiwanju</h3> <p class=info-window-p>1 Century Ave, Lu Jia Zui, Pudong, Shanghai, China</P> <button class=info-window-button onclick=choosePlace('starFerry')>test</button>", 39.87126, 116.47508],
    ["<h3 class=info-window-styling>Beihai Park</h3> <p class=info-window-p>1 Century Ave, Lu Jia Zui, Pudong, Shanghai, China</P> <button class=info-window-button onclick=choosePlace('starFerry')>test</button>", 39.92401, 116.40750],
    ["<h3 class=info-window-styling>Tiananmen Square</h3> <p class=info-window-p>1 Century Ave, Lu Jia Zui, Pudong, Shanghai, China</P> <button class=info-window-button onclick=choosePlace('starFerry')>test</button>", 39.9254, 116.3893],
    ["<h3 class=info-window-styling>Coal Hill Park</h3> <p class=info-window-p>1 Century Ave, Lu Jia Zui, Pudong, Shanghai, China</P> <button class=info-window-button onclick=choosePlace('starFerry')>test</button>", 39.5525, 116.2326],
    ["<h3 class=info-window-styling>The Old Summer Palace</h3> <p class=info-window-p>1 Century Ave, Lu Jia Zui, Pudong, Shanghai, China</P> <button class=info-window-button onclick=choosePlace('starFerry')>test</button>", 40.0081, 116.2982],
// Hong Kong Location Markers
    ["<h3 class=info-window-styling>Victoria Peak</h3> <p class=info-window-p>1 Century Ave, Lu Jia Zui, Pudong, Shanghai, China</P> <button class=info-window-button onclick=choosePlace('starFerry')>test</button>", 22.2759, 114.1455],
    ["<h3 class=info-window-styling>Star Ferry</h3> <p class=info-window-p>1 Century Ave, Lu Jia Zui, Pudong, Shanghai, China</P> <button class=info-window-button onclick=choosePlace('starFerry')>test</button>", 22.2857, 114.1567],
    ["<h3 class=info-window-styling>Big Buddha</h3> <p class=info-window-p>1 Century Ave, Lu Jia Zui, Pudong, Shanghai, China</P> <button class=info-window-button onclick=choosePlace('starFerry')>test</button>", 22.2540, 113.9050],
    ["<h3 class=info-window-styling>Wong Tai Sin Temple</h3> <p class=info-window-p>1 Century Ave, Lu Jia Zui, Pudong, Shanghai, China</P> <button class=info-window-button onclick=choosePlace('starFerry')>test</button>", 22.3427, 114.1933],
    ["<h3 class=info-window-styling>Aulis</h3> <p class=info-window-p>1 Century Ave, Lu Jia Zui, Pudong, Shanghai, China</P> <button class=info-window-button onclick=choosePlace('starFerry')>test</button>", 22.2815, 114.1824],
    ["<h3 class=info-window-styling>Chaat</h3> <p class=info-window-p>1 Century Ave, Lu Jia Zui, Pudong, Shanghai, China</P> <button class=info-window-button onclick=choosePlace('starFerry')>test</button>", 22.2949, 114.1755],
    ["<h3 class=info-window-styling>Arbor</h3> <p class=info-window-p>1 Century Ave, Lu Jia Zui, Pudong, Shanghai, China</P> <button class=info-window-button onclick=choosePlace('starFerry')>test</button>", 22.28322, 114.15535],
    ["<h3 class=info-window-styling>The Chairman</h3> <p class=info-window-p>1 Century Ave, Lu Jia Zui, Pudong, Shanghai, China</P> <button class=info-window-button onclick=choosePlace('starFerry')>test</button>", 22.284580, 114.152672],
    ["<h3 class=info-window-styling>Ocean Park</h3> <p class=info-window-p>1 Century Ave, Lu Jia Zui, Pudong, Shanghai, China</P> <button class=info-window-button onclick=choosePlace('starFerry')>test</button>", 22.2467, 114.1757],
    ["<h3 class=info-window-styling>Hong Kong Park</h3> <p class=info-window-p>1 Century Ave, Lu Jia Zui, Pudong, Shanghai, China</P> <button class=info-window-button onclick=choosePlace('starFerry')>test</button>", 22.2765, 114.1596],
    ["<h3 class=info-window-styling>Chi Lin Nunnery and Nan</h3> <p class=info-window-p>1 Century Ave, Lu Jia Zui, Pudong, Shanghai, China</P> <button class=info-window-button onclick=choosePlace('starFerry')>test</button>", 22.3404, 114.2055],
    ["<h3 class=info-window-styling>Hong Kong Skyline</h3> <p class=info-window-p>1 Century Ave, Lu Jia Zui, Pudong, Shanghai, China</P> <button class=info-window-button onclick=choosePlace('starFerry')>test</button>", 22.2855, 114.1577]
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