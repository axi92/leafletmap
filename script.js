var map = L.map('mapid').setView([48.199421,16.385771], 9);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
	maxZoom: 18,
	attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
		'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
		'Imagery © <a href="http://mapbox.com">Mapbox</a>',
	id: 'mapbox.streets'
}).addTo(map);


L.polygon([
	[48.896763,16.027615],
	[48.636202,17.758392],
	[47.445391,17.008631],
	[47.685992,15.343163]
],
{
	color: 'orange',
	fillColor: 'orange',
	fillOpacity: 0.1
}
).addTo(map).bindPopup("NR01-FOXTROT-06");


function onLocationFound(e) {
    //L.marker(e.latlng).addTo(map).bindPopup("You are here");
}

map.on('locationfound', onLocationFound);


var lc = L.control.locate({
    position: 'topleft',
	setView: 'false',
	icon: 'fa fa-map-marker',
    strings: {
        title: "Show me where I am!"
    }
}).addTo(map);

L.marker([48.2894,16.548183]).addTo(map).bindPopup('<a href="https://maps.google.com/maps?ll=48.2894,16.548183">gMaps</a>');
L.marker([48.233334,16.193525]).addTo(map).bindPopup('<a href="https://maps.google.com/maps?ll=48.233334,16.193525">gMaps</a>');
L.marker([48.141991,16.404008]).addTo(map).bindPopup('<a href="https://maps.google.com/maps?ll=48.141991,16.404008">gMaps</a>');
L.marker([48.094662,16.661991]).addTo(map).bindPopup('<a href="https://maps.google.com/maps?ll=48.094662,16.661991">gMaps</a>');
L.marker([48.249306,16.918788]).addTo(map).bindPopup('<a href="https://maps.google.com/maps?ll=48.249306,16.918788">gMaps</a>');