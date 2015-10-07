//init Node variables
var express = require('express');
var cheerio = require('cheerio');
var request = require('request');
var fs = require('fs');

//the urls for each team's roster
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

//MLS digital media has 2 kinds of team websites right now:
//their old, shitty style and their new, less shitty but still
//bad style.
//We need 2 parsers to handle the 2 kinds of sites, so here are
//the player objects for thems.
//These will be pushed to the roster arrays for each team,
//and that will be pushed to a 'master' roster array
var NewStylePlayer = function(playerHtml) {
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

var OldStylePlayer = function(playerHtml) {
	var self = this;
	var $ = cheerio.load(playerHtml);
	self.name = $(playerHtml).children('.views-field-field-player-lname-value').text().trim();
	self.jerseyNumber = $(playerHtml).children('.views-field-field-player-jersey-no-value').text().trim();
	self.position = $(playerHtml).children('.views-field-field-player-jersey-no-value').text().trim();
	self.age = $(playerHtml).children('.views-field-field-player-birth-date-value-1').text().trim();
	self.height = $(playerHtml).children('.views-field-field-player-height-value').text().trim();
	self.weight = $(playerHtml).children('.views-field-field-player-weight-value').text().trim();
	self.birthCountry = $(playerHtml).children('.views-field-field-player-birth-country-value').text().trim();
	self.twitter = $(playerHtml).children('.views-field-field-player-twitter-username-value').children('a').attr('href');
};

//the 'master' roster array
var rosters = [];

//this will be called after the parsing is done for each team
//once all 20 teams are done, it'll do _something_ with the
//master roster list
//To implement: a timeout check, in case one of the sites is fucked
var checkComplete = function(teamRoster) {
	rosters.push(teamRoster);
	if (rosters.length == 20) {
		console.log(rosters);
	}
};

//we will be looping through the url object, so we need
//a closure to make the loop work correctly
var requestClosure = function(url, team) {
		request(url, function (error, response, body) {
			if (!error && response.statusCode == 200) {
				//cheerio is essentially serve side jquery
				//load the body in and we can use jquery selectors
				var $ = cheerio.load(body);

				//this is where we will collect our players
				var teamRoster = [];

				//we need a way to identify the team the roster belongs
				//to once it gets pushed to the master list
				teamRoster.push(team);

				//check to see which kind of website they are using,
				//then call the approriate parser!
				if ($('.player_list').length) {
					$('.player_info').each(function() {
						teamRoster.push(new NewStylePlayer(this));
					});
					checkComplete(teamRoster);
				} else if ($('.view-content').length) {
					$('.odd, .even').each(function() {
						teamRoster.push(new OldStylePlayer(this));
					});
					checkComplete(teamRoster);
				} else {
					console.log(team + ' is weird')
				}
			}
		})
	};

//Here is where we actually loop through the URLs and send the requests
for (team in urls) {
	requestClosure(urls[team], team);
}
