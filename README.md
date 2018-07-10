# MLS Roster Scraper

It scrapes MLS rosters and returns the data in JSON format!

## Usage

```javascript
const mlsRosterScraper = require('mls-roster-scraper');

mlsRosterScraper();
```

This will write a JSON file to the current directory with the rosters.

## Sample Output

```JSON
["Atlanta United",{"name":"Miguel Almirón","jerseyNumber":"10","position":"Midfielder","age":"24","height":"5' 9\"","weight":"140","homeTown":"Asunción, Paraguay"},{"name":"Mikey Ambrose","jerseyNumber":"22","position":"Defender","age":"24","height":"5' 9\"","weight":"165","homeTown":"El Paso, TX"},{"name":"Atlanta Supporters","jerseyNumber":"17","position":"Defender","age":"1","height":"","weight":"","homeTown":"Atlanta, GA"},{"name":"Ezequiel Barco","jerseyNumber":"8","position":"Midfielder","age":"19","height":"5' 5\"","weight":"","homeTown":"Villa Gobernador Gálvez, Argentina"},{"name":"George Bello","jerseyNumber":"21","position":"Defender","age":"16","height":"5' 7\"","weight":"","homeTown":"Douglasville, Georgia"},{"name":"Andrew Carleton","jerseyNumber":"30","position":"Midfielder","age":"18","height":"5' 7\"","weight":"145","homeTown":"Powder Springs, GA"},{"name":"Franco Escobar","jerseyNumber":"2","position":"Defender","age":"23","height":"5' 9\"","weight":"159","homeTown":"Rosario, Argentina"},{"name":"Jon Gallagher","jerseyNumber":"26","position":"Forward","age":"22","height":"5' 9\"","weight":"158","homeTown":"Dundalk, Ireland"},{"name":"Greg Garza","jerseyNumber":"4","position":"Defender","age":"26","height":"5' 8\"","weight":"154","homeTown":"Grapevine, TX"},{"name":"Leandro González Pirez","jerseyNumber":"5","position":"Defender","age":"26","height":"6' 1\"","weight":"180","homeTown":"Buenos Aires, Argentina"},{"name":"Chris Goslin","jerseyNumber":"20","position":"Midfielder","age":"18","height":"5' 7\"","weight":"145","homeTown":"Locust Grove, GA"},{"name":"Julian Gressel","jerseyNumber":"24","position":"Midfielder","age":"24","height":"6' 1\"","weight":"185","homeTown":"Neustadt an der Aisch, Germany"},{"name":"Brad Guzan","jerseyNumber":"1","position":"Goalkeeper","age":"33","height":"6' 4\"","weight":"209","homeTown":"Evergreen Park, IL"},{"name":"José Hernández","jerseyNumber":"13","position":"Defender","age":"21","height":"5' 7\"","weight":"","homeTown":"Caracas, Venezuela"},{"name":"Mitch Hildebrandt","jerseyNumber":"27","position":"Goalkeeper","age":"29","height":"6' 1\"","weight":"175","homeTown":"Livonia, MI"},{"name":"Alec Kann","jerseyNumber":"25","position":"Goalkeeper","age":"27","height":"6' 4\"","weight":"190","homeTown":"Decatur, GA"},{"name":"Kevin Kratz","jerseyNumber":"32","position":"Midfielder","age":"31","height":"5' 8\"","weight":"161","homeTown":"Eschweiler, Germany"},{"name":"Lagos Kunga","jerseyNumber":"23","position":"Forward","age":"19","height":"5' 8\"","weight":"","homeTown":"Luanda, Angola"},{"name":"Jeff Larentowicz","jerseyNumber":"18","position":"Midfielder","age":"34","height":"6' 1\"","weight":"175","homeTown":"West Chester, PA"},{"name":"Josef Martinez","jerseyNumber":"7","position":"Forward","age":"25","height":"5' 7\"","weight":"154","homeTown":"Valencia, Venezuela"},{"name":"Chris McCann","jerseyNumber":"16","position":"Midfielder","age":"30","height":"6' 1\"","weight":"166","homeTown":"Dublin, Ireland"},{"name":"Darlington Nagbe","jerseyNumber":"6","position":"Midfielder","age":"27","height":"5' 9\"","weight":"","homeTown":"Monrovia, Liberia"},{"name":"Patrick Okonkwo","jerseyNumber":"","position":"Forward","age":"20","height":"","weight":"","homeTown":"Lagos, Nigeria"},{"name":"Michael Parkhurst","jerseyNumber":"3","position":"Defender","age":"34","height":"5' 11\"","weight":"159","homeTown":"Cranston, RI"},{"name":"Miles Robinson","jerseyNumber":"12","position":"Defender","age":"21","height":"6' 2\"","weight":"185","homeTown":"Arlington, MA"},{"name":"Oliver Shannon","jerseyNumber":"29","position":"Midfielder","age":"22","height":"6' 0\"","weight":"170","homeTown":"Liverpool, England"},{"name":"Brandon Vazquez","jerseyNumber":"19","position":"Forward","age":"19","height":"6' 3\"","weight":"175","homeTown":"Chula Vista, CA"},{"name":"Hector Villalba","jerseyNumber":"15","position":"Forward","age":"23","height":"5' 8\"","weight":"161","homeTown":"Buenos Aires, Argentina"},{"name":"Andrew Wheeler-Omiunu","jerseyNumber":"28","position":"Midfielder","age":"23","height":"5' 9\"","weight":"174","homeTown":"Bellingham, MA"},{"name":"Gordon Wild","jerseyNumber":"","position":"Forward","age":"22","height":"5' 10\"","weight":"172","homeTown":"Leonberg, Germany"},{"name":"Romario Williams","jerseyNumber":"9","position":"Forward","age":"23","height":"5' 11\"","weight":"170","homeTown":"Portmore, Jamaica"},{"name":"Sal Zizzo","jerseyNumber":"14","position":"Defender","age":"31","height":"5' 10\"","weight":"165","homeTown":"San Diego, California"}]
```

## Future Additions Planned

- Add options object
  - to specify file location (or stream data, or return an object)
  - to specify which teams you want included/excluded
  - to specify how much player data you want (ie exclude height/weight/whatever)

- Clean up data object
  - make it easier to grab specific teams/players easily

- Maybe add other leagues
  - USL might be easy

## Disclaimer

I am not affiliated with MLS in any way. It's probably illegal to use the scraped data for commerical applications. Don't slam their servers with requests.