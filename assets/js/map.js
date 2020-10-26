function initMap(){
    var options = {
        zoom: 4,
        center: {lat: 35.8617, lng:104.1954}
    }

    var map = new google.maps.Map(document.getElementById('map'), options);
}
