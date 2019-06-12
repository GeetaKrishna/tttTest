var request = require('request');
var bodyParser = require('body-parser');
var cors = require('cors');
var express = require('express');
var app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors());
app.use(express.static(__dirname+'/public'))

// app.get('/', function (req, res) {
// 	res.sendFile(__dirname + '/public/index.html')
// })


app.post('/api', function (req, res) {
	console.log('in API')
	request('http://terriblytinytales.com/test.txt', function (err, response, body) {
		if (err) {
			console.log(err)
		}
		else {
			var wordsArray = splitByWords(body);
			res.send(createWordMap(parseInt(req.body.frequency), wordsArray));
		}
	})
})

app.listen(3000, function () {
	console.log('at 3000')
})

function splitByWords(text) {
	// split string by spaces (including spaces, tabs, and newlines)
	var wordsArray = text.split(/\s+/);
	return wordsArray;
}


function createWordMap(N, wordsArray) {
	// create map for word counts
	var wordsMap = {};
	countArray = [];
	wordsArray.forEach(function (key) {
			if (wordsMap.hasOwnProperty(key)) {
				wordsMap[key]++;
			} else {
				wordsMap[key] = 1;
			}
		})

		Object.keys(wordsMap).filter(function(key) {
			if(wordsMap[key] === N){
				countArray.push({
					heading: key,
					frequency: wordsMap[key]
				});
			}

		  });

	return countArray;

}