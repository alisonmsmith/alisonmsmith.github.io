$(document).ready(function () {
	
	var width = 1000,
		height = 1000,
		margin = 50;

	// load the race data
	var minlat = 100, minlon = 0, maxlat = 0, maxlon = -100;
	 $.each(data.races, function (index, race) {


	 	race.lat = race.location.split(",")[0],
	 	race.lon = race.location.split(",")[1];

	 	if (race.lat > maxlat) {
	 		maxlat = race.lat;
	 	}
	 	if (race.lat < minlat) {
	 		minlat = race.lat;
	 	}
	 	if (race.lon > maxlon) {
	 		maxlon = race.lon;
	 	}
	 	if (race.lon < minlon) {
	 		minlon = race.lon;
	 	}
	 });

	var x = d3.scale.linear()
			.domain([maxlat, minlat])
			.range([margin, width-margin]);

	var y = d3.scale.linear()
			.domain([maxlon, minlon])
			.range([margin, height-margin]);
 
	var svg = d3.select("#map").append("svg")
	    .attr("width", width)
	    .attr("height", height);
	
	var node = svg.selectAll("g.node")
	    .data(data.races)
	    .enter().append("g")
	    .attr("class", function (d) { 
	    	if (d.tags.indexOf("snowball") !== -1) {
	    		return "node snowball";
	    	} else if (d.tags.indexOf("bunion") !== -1) {
	    		return "node bunion";
	    	} else if (d.tags.indexOf("dcrr") !== -1) {
	    		return "node dcrr";
	    	} else {
	    		return "node contract";
	    	}
		})
		.attr("x", function (d) { return y(d.lon); })
		.attr("y", function (d) { return x(d.lat); })
	    .attr("transform", function (d) { return "translate(" + [y(d.lon), x(d.lat) ] + ")"; });

	var circle = node.append("circle")
	    .attr("class", "circle")
	    .attr("r", function (d) { return Math.max(Math.min(Math.sqrt(d.size), 60), 20) + "px"; });

	    		var label = node.append("text")
	    	.attr("class", "name")
	    	.text(function(d) { return d.name})
	    	.attr("text-anchor", "middle");

	    	  node.append("title")
	      .text(function(d) { return d.name; });

});