$(document).ready(function () {
	$("#map").width($(window).width()-5);
	$("#map").height($(window).height()-30);

	var map = L.map('map').setView([38.847391,-77.1452181], 12);

	// alternative themes: 'terrain' and 'watercolor'
	var layer = new L.StamenTileLayer("toner");

	map.addLayer(layer);

	// Overlay with big loop and arlington triangle
	/*var kmlLayer = new L.KML("data/arlington-triangle.kml", {async: true});
	var kmlLayer2 = new L.KML("data/big-loop.kml", {async: true});

	map.addLayer(kmlLayer);
	map.addLayer(kmlLayer2);*/

	var pairs = [];

	// Add a circle to the map for each race in the data
    $.each(data.races, function (index, race) {
        race.lat = parseFloat(race.location.split(",")[0]),
	 	race.lon = parseFloat(race.location.split(",")[1]);

	 	// Color the circles by race type
	 	var fill = "#FFF";
	 	if (race.tags.indexOf("snowball") !== -1) {
	 		fill = "#2980B9";
	 	} else if (race.tags.indexOf("bunion") !== -1) {
	 		fill = "#27AE60";
	 	} else if (race.tags.indexOf("dcrr") !== -1) {
	 		fill = "#2C3E50";
	 	} else {
	 		fill = "#8E44AD";
	 	}

	 	// Randomly offset circles at the same exact location
	 	var p = race.lat + "," + race.lon;
	 	while (pairs.indexOf(p) !== -1) {
	 		if (Math.random() > 0.5) {
	 			race.lat += 0.005;
	 		} else {
	 			race.lat -= 0.005;
	 		}
	 		if (Math.random() > 0.5) {
	 			race.lon += 0.005;
	 		} else {
	 			race.lat -= 0.005;
	 		}

	 		p = race.lat + "," + race.lon;
	 	} 
	 		
	 	pairs.push(p);	 	

	 	// Size the circles by race size
	 	var size = 0;
	 	if (race.size > 1000) {
	 		size = Math.min(race.size, 3000);
	 	} else {
	 		size = Math.max(Math.min(race.size*3, 2000), 300);
	 	}

		circle = L.circle([race.lat, race.lon], size, {
			fillColor: "#2ECC71",
			fillOpacity: 0.4,
			stroke: false
		}).addTo(map);

		// Show race name on click
		circle.bindPopup(race.name);
    }); 
});