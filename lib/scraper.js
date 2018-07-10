// Node modules
const cheerio = require('cheerio');
const request = require('request');
const fs = require('fs');

// Internal modules
const teams = require('./teams');

//These will be pushed to the roster arrays for each team,
//and that will be pushed to a 'master' roster array
var Player = function(playerHtml) {
	var self = this;
	var $ = cheerio.load(playerHtml);
	self.name = $(playerHtml).find('a').text().trim();
	self.jerseyNumber = $(playerHtml).children('.jersey').text().trim();
	self.position = $(playerHtml).children('.position').text().trim();
	self.age = $(playerHtml).find('.age').text().trim();
	self.height = $(playerHtml).find('.height').text().trim();
	self.weight = $(playerHtml).find('.weight').text().trim();
	self.homeTown = $(playerHtml).children('.hometown').text().trim();
	// self.twitter = $(playerHtml).children('.views-field-field-player-twitter-username-value').children('a').attr('href');
};

//the 'master' roster array
var rosters = [];

//the file to which we will write the roster data
var rosterFile = 'rosterBackup-' + new Date().toISOString().split(':').join('').slice(0,-5) + '.json';

//this will be called after the parsing is done for each team
//To implement: a timeout check, in case one of the sites is fucked
var checkComplete = function(teamRoster) {
	rosters.push(teamRoster);
	if (rosters.length == 20) {
		fs.writeFile(rosterFile, JSON.stringify(rosters), function(err, string) {
			if (err) {
				console.log(err);
			};
			console.log('Successfully wrote rosters to ' + rosterFile)
		})
	}
};

var getRoster = function(url, team) {
		request(url, function (error, response, body) {
			let teamRoster = [];

			if (error) {
				console.log(error);
				console.log(team);
				teamRoster.push(team);
				teamRoster.push(error);
				checkComplete(teamRoster)
			};

			if (!error && response.statusCode == 200) {
				//cheerio is essentially server side jquery
				//load the body in and we can use jquery selectors
				var $ = cheerio.load(body);

				teamRoster.push(team);

				// make sure they haven't changed their html
				if ($('.player_list').length) {
					$('.player_info').each(function() {
						teamRoster.push(new Player(this));
					});
					checkComplete(teamRoster);
				} else {
					console.log(`${team} has changed their roster format`);
					checkComplete(teamRoster);
				}
			}
		})
	};

module.exports = function () {
	for (team in teams) {
		getRoster(teams[team], team);
	}
}