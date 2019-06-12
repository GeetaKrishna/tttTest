var request = require('request');
var bodyParser = require('body-parser');
var cors = require('cors');
var express = require('express');
var app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors());
app.use(express.static(__dirname+'/public'))

var port = process.env.PORT || 3000;

app.get('/test', function(req, res){
	res.send('testing API')
})

app.post('/api', function (req, res) {
	console.log('in API')
	if(parseInt(req.body.frequency)>0){
	request('http://terriblytinytales.com/test.txt', function (err, response, body) {
		if (err) {
			console.log(err)
		}
		else {
			var wordsArray = splitByWords(body);
			res.send(createWordMap(parseInt(req.body.frequency), wordsArray));
		}
	})
}
else{
	res.send([{words: 'We cannot find words with this frequency, change the input'}])
}
})

app.listen(port, function () {
	console.log('server at port ', port)
})

function splitByWords(text) {
	// split string by spaces (including spaces, tabs, and newlines)
	var wordsArray = text.split(/[ ,]+/);
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

		countArray = Object.keys(wordsMap).map(function(key) {
				return {
					heading: key,
					frequency: wordsMap[key],
					fr: []
				};
		  });
  countArray.sort(function (a, b) {
    return b.frequency - a.frequency;
  });

countArray.filter((element, i, arr) => {
	arr.map(function(key){
		if(element.frequency === key.frequency){
			element.fr.push(key.heading)
			delete element.heading;
		}
	})
})

function getUnique(arr, comp) {

	const unique = arr
		 .map(e => e[comp])
  
	   // store the keys of the unique objects
	  .map((e, i, final) => final.indexOf(e) === i && i)
  
	  // eliminate the dead keys & store unique objects
	  .filter(e => arr[e]).map(e => arr[e]);
  
	 return unique;
  }

	return getUnique(countArray, 'frequency').slice(0, N);
}