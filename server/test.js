
			var wordsArray = splitByWords("Lorem Ipsum is simply dummy Lorem Ipsum is simply dummy Lorem Ipsum has been the industry's Lorem Ipsum is simply dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum");
			test(wordsArray)
			//console.log(createWordMap('5', wordsArray));
		
		
	function test(wordsArray){
		//console.log()
		cc=0
		f={}
		for(i in wordsArray){
			f[wordsArray[i]] = {count: 'none'}
		}
		for (i in f){
			for(j in wordsArray){
				if(i==wordsArray[j]){
					cc++
				}
			}
		console.log(i);
		}
	}
	

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
		frequency = [];
		countArray = Object.keys(wordsMap).map(function(key) {
			//if(wordsMap[key] === N){
				return {
					heading: key,
					frequency: wordsMap[key],
					fr: []
				};
			//}
		  });
  countArray.sort(function (a, b) {
    return b.frequency - a.frequency;
  });

countArray.filter((element, i, arr) => {
	arr.map(function(key){
		if(element.frequency === key.frequency){
			element.fr.push(key.heading)
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

//console.log(countArray, 'countArray')
	return getUnique(countArray, 'frequency');
}