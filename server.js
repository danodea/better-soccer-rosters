var express = require('express');
var cheerio = require('cheerio');
var request = require('request');

var urls = {
	"Chicago Fire": "http://www.chicago-fire.com/players",
	"Colorado Rapids": "http://www.coloradorapids.com/players",
	"Columbus Crew": "http://www.columbuscrewsc.com/players",
	"DC United": "http://www.dcunited.com/players",
	"FC Dallas": "http://www.fcdallas.com/players",
	"Houston Dynamo": "http://www.houstondynamo.com/players",
	"LA Galaxy": "http://www.lagalaxy.com/players",
	"Montreal Impact": "http://www.impactmontreal.com/players",
	"New England Revolution": "http://www.revolutionsoccer.net/players",
	"NYCFC": "http://www.nycfc.com/players",
	"New York Red Bulls": "http://www.newyorkredbulls.com/players",
	"Orlando City SC": "http://www.orlandocitysoccer.com/players",
	"Philadelpia Union": "http://www.philadelphiaunion.com/players",
	"Portland Timbers": "http://www.timbers.com/players",
	"Real Salt Lake": "http://www.realsaltlake.com/players",
	"San Jose Earthquakes": "http://www.sjearthquakes.com/players",
	"Seattle Sounders": "http://www.soundersfc.com/players",
	"Sporting KC": "http://www.sportingkc.com/players",
	"Toronto FC": "http://www.torontofc.ca/players",
	"Vancouver Whitecaps": "http://www.whitecapsfc.com/players"
};

var app = express();

app.get('/', function(req, res) {
	// var rosters = {};

	var requestClosure = function(url, team) {
		request(url, function (error, response, body) {
			if (!error && response.statusCode == 200) {
				var $ = cheerio.load(body);
				// var players = [];
				if ($('.player_list').length) {
					console.log(team + ' is new school')
				} else if ($('.view-content').length) {
					console.log(team + ' is old school')
				} else {
					console.log(team + ' is weird')
				}
			}
		})
	}

	for (team in urls) {
		requestClosure(urls[team], team);
	}

})	;

app.listen(3000);

// request('http://www.mlssoccer.com', function (error, response, body) {

// 		// if it doesn't screw up, do stuff
//   		if (!error && response.statusCode == 200) {
//   			// cheerio loads the response body to access it like a regular DOM node
//     		var $ = cheerio.load(body);
//     		var links = [];
//     		$('a', '#mls_network').each(function(i, elem) {
//     			links[i] = $(this).attr('href') + 'players';
//     		});
//     		// send the
//     		res.send(links)
//     	}
//     })