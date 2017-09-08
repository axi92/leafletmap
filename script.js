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


L.marker([48.143696,16.612995]).addTo(map);
L.marker([48.168955,16.219458]).addTo(map);
L.marker([48.233334,16.193525]).addTo(map);
L.marker([48.302866,16.564087]).addTo(map);
L.marker([48.148564,16.483594]).addTo(map);

