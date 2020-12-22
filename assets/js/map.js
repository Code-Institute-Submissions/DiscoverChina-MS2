let locations = [
// Three Cities 
    ["<h1>Shanghai</h1>", 31.224361, 121.469170, "city"],
    ["<h1>Beijing</h1>", 39.916668, 116.383331, "city"],
    ["<h1>Hong Kong</h1>", 22.302711, 114.177216, "city"],
//Shanghai Location Markers
    ["<h3 class=info-window-styling>Oriental Pearl Tower</h3> <a class=info-window-link target=_blank href=http://www.orientalpearltower.com/>Website</a> <p class=info-window-p>1 Century Ave, Lu Jia Zui, Pudong, Shanghai, China</P> <button class=info-window-button onclick=choosePlace('orientalPearlTower')>Find Out More</button>", 31.2397, 121.4998, "attractions"],
    ["<h3 class=info-window-styling>Nanjing Road</h3> <a class=info-window-link target=_blank href=https://www.tripadvisor.co.uk/Attraction_Review-g308272-d321173-Reviews-Nanjing_Lu_Nanjing_Road-Shanghai.html>Trip Advisor Reviews</a> <p class=info-window-p>Nan Jing Lu Bu Xing Jie, Shanghai</P> <button class=info-window-button onclick=choosePlace('nanjingRoadMarket')>Find Out More</button>", 31.2342, 121.4713, "attractions"],
    ["<h3 class=info-window-styling>The Shanghai Museum</h3> <a class=info-window-link target=_blank href=https://www.shanghaimuseum.net/mu/frontend/pg/en/index>Website</a> <p class=info-window-p>201 Renmin Avenue, People's Square, Shanghai</P> <button class=info-window-button onclick=choosePlace('theShanghaiMuseum')>Find Out More</button>", 31.2283, 121.4451 , "attractions"],
    ["<h3 class=info-window-styling>Jade Buddah Temple</h3> <a class=info-window-link target=_blank href=https://www.tripadvisor.co.uk/Attraction_Review-g308272-d311596-Reviews-Jade_Buddha_Temple-Shanghai.html>Trip Advisor Reviews</a> <p class=info-window-p>170 Anyuan Rd, Jing'an District, China</P> <button class=info-window-button onclick=choosePlace('jadeBuddhaTemple')>Find Out More</button>", 31.2413, 121.4451, "attractions"],
    ["<h3 class=info-window-styling>Hakkasan</h3> <a class=info-window-link target=_blank href=https://hakkasan.com/shanghai/>Website</a> <p class=info-window-p>18 Zhongshan East 1st Rd, Nan Jing Dong Lu, Huangpu, Shanghai, China</P> <button class=info-window-button onclick=choosePlace('hakkasan')>Find Out More</button>", 31.23697201695567, 121.48328658291878, "restaurants"],
    ["<h3 class=info-window-styling>Hiya</h3> <a class=info-window-link target=_blank href=https://www.editionhotels.com/shanghai/restaurants-and-bars/hiya/>Website</a> <p class=info-window-p>199 Nanjing Road East, Huangpu, Shanghai</P> <button class=info-window-button onclick=choosePlace('hiya')>Find Out More</button>", 31.1422, 121.2853, "restaurants"],
    ["<h3 class=info-window-styling>Mercato</h3> <a class=info-window-link target=_blank href=http://www.mercato-international.com/en/locations.php?aid=22>Website</a> <p class=info-window-p>3 Zhong Shan Dong Yi Road, Shanghai</P> <button class=info-window-button onclick=choosePlace('mercato')>Find Out More</button>", 31.1200, 121.2354, "restaurants"],
    ["<h3 class=info-window-styling>Mr and Mrs Bund</h3> <a class=info-window-link target=_blank href=http://www.mmbund.com>Website</a> <p class=info-window-p>Zhongshan East 1st Rd, Wai Tan, Huangpu, Shanghai, China</P> <button class=info-window-button onclick=choosePlace('mrAndMrsBund')>Find Out More</button>", 31.1418, 121.2922, "restaurants"],
    ["<h3 class=info-window-styling>Yu Garden</h3> <a class=info-window-link target=_blank href=https://www.tripadvisor.co.uk/Attraction_Review-g308272-d324259-Reviews-Yu_Garden_Yuyuan-Shanghai.html>Trip Advisor Reviews</a> <p class=info-window-p>279 Yuyuan Old St, Huangpu, Shanghai, China</P> <button class=info-window-button onclick=choosePlace('yuGardenShanghai')>Find Out More</button>", 31.2272, 121.4921, "parks"],
    ["<h3 class=info-window-styling>The Bund Promenade</h3> <a class=info-window-link target=_blank href=https://www.tripadvisor.co.uk/ShowUserReviews-g308272-d311595-r311515179-The_Bund_Wai_Tan-Shanghai.html>Trip Advisor Reviews</a> <p class=info-window-p>Zhongshan East 1st Rd, Wai Tan, Huangpu, Shanghai</P> <button class=info-window-button onclick=choosePlace('theBundPromenade')>Find Out More</button>", 31.2272, 121.4921, "parks"],
    ["<h3 class=info-window-styling>The People's Square</h3> <a class=info-window-link target=_blank href=https://www.tripadvisor.co.uk/Attractions-g308272-Activities-c26-zfn8277446-Shanghai.html>Great Shopping & Malls In The Peoples Square</a> <p class=info-window-p>People's Square, Huangpu, China</P> <button class=info-window-button onclick=choosePlace('thePeoplesSquare')>Find Out More</button>", 31.2297, 121.4762, "parks"],
    ["<h3 class=info-window-styling>Longhua Temple & Pagoda</h3> <a class=info-window-link target=_blank href=https://www.tripadvisor.co.uk/ShowUserReviews-g308272-d1237345-r334844238-Longhua_Temple-Shanghai.html>Trip Advisor Reviews</a> <p class=info-window-p>2853 Longhua Rd, Xuhui District, Shanghai, China</P> <button class=info-window-button onclick=choosePlace('longhuaTempleAndPagoda')>Find Out More</button>", 31.1738, 121.4519, "parks"],
// Beijing Location Markers
    ["<h3 class=info-window-styling>Temple Of Heaven</h3>  <a class=info-window-link target=_blank href=https://www.tripadvisor.co.uk/Attraction_Review-g294212-d311534-Reviews-Temple_of_Heaven-Beijing.html>Trip Advisor Reviews</a> <p class=info-window-p>1 Tiantan E Rd, Dongcheng, China, 100061</P> <button class=info-window-button onclick=choosePlace('templeOfHeaven')>Find Out More</button>", 39.8822, 116.4066, "attractions"],
    ["<h3 class=info-window-styling>Imperial Palace & The Foribdden City</h3>  <a class=info-window-link target=_blank href=https://en.dpm.org.cn>The Palace Exhibitions Website</a> <p class=info-window-p>4 Jingshan Front St, Dongcheng, Beijing, China, 100886</P> <button class=info-window-button onclick=choosePlace('theImperialPalaceAndTheForbiddenCity')>Find Out More</button>", 39.9169, 116.3907, "attractions"],
    ["<h3 class=info-window-styling>The Great Wall of China</h3>  <a class=info-window-link target=_blank href=https://www.great-wallofchina.com>More Information On the Great Wall</a> <p class=info-window-p>Huairou District, China</P> <button class=info-window-button onclick=choosePlace('theGreatWallOfChina')>Find Out More</button>", 40.4319, 116.5704, "attractions"],
    ["<h3 class=info-window-styling>Beijing Capital Museum</h3>  <a class=info-window-link target=_blank href=http://en.capitalmuseum.org.cn>Website</a> <p class=info-window-p>16 Fuxingmen Outer St, Xicheng District, China, 100035</P> <button class=info-window-button onclick=choosePlace('beijingCapitalMuseum')>Find Out More</button>", 39.9064, 116.3419, "attractions"],
    ["<h3 class=info-window-styling>Jubaoyuan</h3>  <a class=info-window-link target=_blank href=https://www.tripadvisor.co.uk/Restaurant_Review-g294212-d3351851-Reviews-Ju_BaoYuan-Beijing.html>Trip Advisor Reviews</a> <p class=info-window-p>5-2 Niujie St, Xicheng District, Beijing, China</P> <button class=info-window-button onclick=choosePlace('jubaoyuanHotPotRestaurant')>Find Out More</button>", 39.8869, 116.3632, "restaurants"],
    ["<h3 class=info-window-styling>Qing-Feng Steamed Dumpling</h3>  <a class=info-window-link target=_blank href=https://www.tripadvisor.co.uk/Restaurant_Review-g294212-d8489213-Reviews-Qingfeng_Steamed_Dumpling_Shop_Dengshikou-Beijing.html>Trip Advisor Reviews</a> <p class=info-window-p>Dongdan N St, Wangfujing, Dongcheng, Beijing, China</P> <button class=info-window-button onclick=choosePlace('qingFendSteamedDumplingShop')>Find Out More</button>", 39.5527, 116.2320, "restaurants"], 
    ["<h3 class=info-window-styling>Qianmen Quanjude</h3>  <a class=info-window-link target=_blank href=https://www.quanjude.com.cn>Website</a> <p class=info-window-p>China, Beijing, Chaoyang, Songyu S Rd</P> <button class=info-window-button onclick=choosePlace('qianmenQuanjude')>Find Out More</button>", 39.89653417557819, 116.3982514674211, "restaurants"],
    ["<h3 class=info-window-styling>Beihai Park</h3>  <a class=info-window-link target=_blank href=https://www.travelchinaguide.com/attraction/beijing/beihai.htm>Travel China Guide</a> <p class=info-window-p>1 Wenjin St, Xicheng District, China, 100034</P> <button class=info-window-button onclick=choosePlace('beihaiPark')>Find Out More</button>", 39.92401, 116.40750, "restaurants"],
    ["<h3 class=info-window-styling>Tiananmen Square</h3>  <a class=info-window-link target=_blank href=https://www.tripadvisor.co.uk/Attraction_Review-g294212-d311533-Reviews-Tiananmen_Square_Tiananmen_Guangchang-Beijing.html>Trip Advisor Reviews</a> <p class=info-window-p>Dongcheng, China</P> <button class=info-window-button onclick=choosePlace('tianmentSquare')>Find Out More</button>", 39.9254, 116.3893, "parks"],
    ["<h3 class=info-window-styling>Coal Hill Park</h3>  <a class=info-window-link target=_blank href=https://www.travelchinaguide.com/attraction/beijing/jingshan.htm>Travel China Guide</a> <p class=info-window-p>Woodstock La North, Surbiton KT6 5HN</P> <button class=info-window-button onclick=choosePlace('coalHillPark')>Find Out More</button>", 39.5525, 116.2326, "parks"],
    ["<h3 class=info-window-styling>The Old Summer Palace</h3>  <a class=info-window-link target=_blank href=http://www.yuanmingyuanpark.cn>Website</a> <p class=info-window-p>Haidian District, China, 100084</P> <button class=info-window-button onclick=choosePlace('theOldSummerPalace')>Find Out More</button>", 40.0081, 116.2982, "parks"],
// Hong Kong Location Markers
    ["<h3 class=info-window-styling>Victoria Peak</h3>  <a class=info-window-link target=_blank href=https://www.hk-victoria-peak.com>Website</a> <p class=info-window-p>The Peak, Hong Kong</P> <button class=info-window-button onclick=choosePlace('victoriaPeak')>Find Out More</button>", 22.2759, 114.1455, "attractions"],
    ["<h3 class=info-window-styling>Star Ferry</h3>  <a class=info-window-link target=_blank href=http://www.starferry.com.hk/en/Fares>Website</a> <p class=info-window-p>The Star Ferry runs along with a number of routes. However, the original and most popular route is between Tsim Sha Tsui in Kowloon and Central on Hong Kong Island.</P> <button class=info-window-button onclick=choosePlace('starFerry')>Find Out More</button>", 22.2857, 114.1567, "attraction"],
    ["<h3 class=info-window-styling>Big Buddha</h3>  <a class=info-window-link target=_blank href=http://www.plm.org.hk>Website</a> <p class=info-window-p>Ngong Ping Rd, Lantau Island, Hong Kong</P> <button class=info-window-button onclick=choosePlace('bigBuddha')>Find Out More</button>", 22.2540, 113.9050, "attractions"],
    ["<h3 class=info-window-styling>Wong Tai Sin Temple</h3>  <a class=info-window-link target=_blank href=http://www1.siksikyuen.org.hk/嗇色園-主頁>Website</a> <p class=info-window-p>2 Chuk Yuen Rd, Chuk Un, Hong Kong</P> <button class=info-window-button onclick=choosePlace('wongTaiSinTemple')>Find Out More</button>", 22.3427, 114.1933, "attractions"],
    ["<h3 class=info-window-styling>Aulis</h3>  <a class=info-window-link target=_blank href=https://www.roganic.com.hk/aulis>Website</a> <p class=info-window-p>UG08, Sino Plaza, 255 Gloucester Rd, Causeway Bay, Hong Kong</P> <button class=info-window-button onclick=choosePlace('aulis')>Find Out More</button>", 22.2815, 114.1824, "restaurants"],
    ["<h3 class=info-window-styling>Chaat</h3>  <a class=info-window-link target=_blank href=https://www.chaat.hk>Website</a> <p class=info-window-p>5/F Rosewood Hong Kong, Victoria Dockside, 18 Salisbury Rd, Tsim Sha Tsui, Hong Kong</P> <button class=info-window-button onclick=choosePlace('chaat')>Find Out More</button>", 22.2949, 114.1755, "restaurants"],
    ["<h3 class=info-window-styling>Arbor</h3>  <a class=info-window-link target=_blank href=http://arbor-hk.com/concept.html>Website</a> <p class=info-window-p>Hong Kong, Central, Queen's Road Central</P> <button class=info-window-button onclick=choosePlace('arbor')>Find Out More</button>", 22.28322, 114.15535, "restaurants"],
    ["<h3 class=info-window-styling>The Chairman</h3>  <a class=info-window-link target=_blank href=http://www.thechairmangroup.com>Website</a> <p class=info-window-p>18 Kau U Fong, Central, Hong Kong</P> <button class=info-window-button onclick=choosePlace('theChairman')>Find Out More</button>", 22.284580, 114.152672, "restaurants"],
    ["<h3 class=info-window-styling>Ocean Park</h3>  <a class=info-window-link target=_blank href=https://www.oceanpark.com.hk/en>Website</a> <p class=info-window-p>Aberdeen, Hong Kong</P> <button class=info-window-button onclick=choosePlace('oceanPark')>Find Out More</button>", 22.2467, 114.1757, "parks"],
    ["<h3 class=info-window-styling>Hong Kong Park</h3>  <a class=info-window-link target=_blank href=https://www.lcsd.gov.hk/en/parks/hkp/>Website</a> <p class=info-window-p>Central, Hong Kong</P> <button class=info-window-button onclick=choosePlace('hongKongPark')>Find Out More</button>", 22.2765, 114.1596, "parks"],
    ["<h3 class=info-window-styling>Chi Lin Nunnery and Nan</h3>  <a class=info-window-link target=_blank href=http://www.chilin.org>Website</a> <p class=info-window-p>Chi Lin Nunnery, 5 Chi Lin Dr, Sheung Yuen Leng, Hong Kong</P> <button class=info-window-button onclick=choosePlace('chiLinNunneryAndNanLianGarden')>Find Out More</button>", 22.3404, 114.2055, "parks"],
    ["<h3 class=info-window-styling>Hong Kong Skyline</h3>  <a class=info-window-link target=_blank href=https://www.tripadvisor.co.uk/Attraction_Review-g294217-d2482919-Reviews-Hong_Kong_Skyline-Hong_Kong.html>Trip Advisor Reviews</a> <p class=info-window-p>No. 1 Austin Road, West Kowloon</P> <button class=info-window-button onclick=choosePlace('hongKongSkyline')>Find Out More</button>", 22.2855, 114.1577, "parks"]
];
// Icons
var cityIcon = L.icon({
    iconUrl: 'assets/images/cityIcon.png',
    iconSize: [30,30],
    iconAnchor: [0,0],
    popupAnchor: [14,0]
});
var attractionsIcon = L.icon({
    iconUrl: 'assets/images/attractionsIcon.png',
    iconSize: [30,30],
    iconAnchor: [0,0],
    popupAnchor: [14,0]
});
var restaurantsIcon = L.icon({
    iconUrl: 'assets/images/restaurantsIcon.png',
    iconSize: [30,30],
    iconAnchor: [0,0],
    popupAnchor: [14,0]
});
var parksIcon = L.icon({
    iconUrl: 'assets/images/parksIcon.png',
    iconSize: [30,30],
    iconAnchor: [0,0],
    popupAnchor: [14,0]
});
// Map Setup 
let map = L.map('map', {
    fullscreenControl: true,
}).setView([35.8617, 104.1954], 4);
mapLink =
    '<a href="http://openstreetmap.org">OpenStreetMap</a>';
L.tileLayer(
    'http://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: '&copy; ' + mapLink + ' Contributors',
    maxZoom: 18,
}).addTo(map);
// Get map marker locations and icons to display on map
for (let i = 0; i < locations.length; i++) {
    if (locations[i][3] == 'restaurants') {
        marker = new L.marker([locations[i][1], locations[i][2]],{icon:restaurantsIcon})
            .bindPopup(locations[i][0])
            .addTo(map);
    } else if (locations[i][3] == 'parks') {
        marker = new L.marker([locations[i][1], locations[i][2]],{icon:parksIcon})
            .bindPopup(locations[i][0])
            .addTo(map);
    } else if (locations[i][3] === 'attractions') {
        marker = new L.marker([locations[i][1], locations[i][2]],{icon:attractionsIcon})
            .bindPopup(locations[i][0])
            .addTo(map);
    } else if (locations[i][3] === 'city') {
        console.log('testing');
        marker = new L.marker([locations[i][1], locations[i][2]],{icon:cityIcon})
            .bindPopup(locations[i][0])
            .addTo(map);
    }
};
// options button zoom to location when clicked
$(".options-btn").click(function () {
    thisLat = this.dataset.coords.split(",")[0];
    thisLng = this.dataset.coords.split(",")[1];
    thisZoom = parseInt(this.dataset.zoom);
    map.flyTo([thisLat, thisLng], thisZoom);
});