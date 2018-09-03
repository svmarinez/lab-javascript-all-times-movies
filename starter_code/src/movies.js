///* eslint no-restricted-globals: 'off' */

function turnHoursToMinutes(movies) {
	var arrayDuration = [];
	for (var i = 0; i < movies.length; i++) {
		var total = movies[i].duration.split(' ');
		var hours = parseInt(total[0]) * 60;
		var minutes = parseInt(total[1]);
		var duration = hours + minutes;
		arrayDuration.push({
			title: movies[i].title,
			year: movies[i].year,
			director: movies[i].director,
			duration: movies[i].duration,
			genre: movies[i].genre,
			rate: movies[i].rate
		});
		return arrayDuration;
	}
}
//// Turn duration of the movies from hours to minutes
var turnHoursToMinutes = function(arr) {
	var arrMod = arr.map(function(f) {
		return { duration: durationInMinutes(f.duration) };
	});
	return arrMod;
};

var durationInMinutes = function(s) {
	var h = 0;
	var m = 0;
	var hPos = s.indexOf('h');
	var mPos = s.indexOf('min');

	if (hPos != -1) {
		h = parseInt(s[hPos - 1]);
	}
	if (mPos != -1) {
		m = parseInt(s.slice(s.indexOf(' ') + 1, mPos));
	}
	return h * 60 + m;
};

//// Get the average of all rates with 2 decimals

function ratesAverage(arr) {
	var sumRates = arr.reduce(function(acc, elem) {
		if (elem.hasOwnProperty('rate')) {
			if (!elem.rate) {
				return acc;
			}
			if (typeof elem.rate == 'string') {
				return acc + parseFloat(elem.rate);
			} else if (typeof elem.rate == 'number') {
				return acc + elem.rate;
			}
		} else {
			return acc;
		}
	}, 0);
	return Math.round(sumRates / arr.length * 100) / 100;
};

// Get the average of Drama Movies

function dramaMoviesRate(arr) {
	var arr2 = arr.filter(function(movie) {
		if (typeof movie.rate == 'string' && movie.rate.length == 0) {
			movie.rate = 0;
		}

		return movie.genre.includes('Drama');
	});
	if (arr2.length == 0) return undefined;
	return ratesAverage(arr2);
}

// Order by time duration, in growing order

function orderByDuration(movies) {
	var durationMin = turnHoursToMinutes(movies);

	var orderedMovies = durationMin.sort(function(a, b) {
		if (a.duration == b.duration) {
			var mov = [ a.title, b.title ].sort();

			if (mov[0] == a.title) {
				return -1;
			} else {
				return 1;
			}
		}
		return [ a.duration - b.duration ];
	});
	return orderedMovies;
}

//// How many movies did STEVEN SPIELBERG

function howManyMovies(arr) {
	var arr2 = arr.filter((e) => e.genre.includes('Drama') && e.director == 'Steven Spielberg');

	if (arr.length == 0) return undefined;

	return 'Steven Spielberg directed ' + arr2.length + ' drama movies!';
}

//// Order by title and print the first 20 titles
function orderAlphabetically(movies) {
	var topTwenty = [];
 	var orderedTitles = movies.map(function(movies) {
		return movies.title;
	});
	orderedTitles.sort();
 	if (orderedTitles.length <= 20) {
		topTwenty = orderedTitles;
	} else {
		for (var i = 0; i < 20; i++) {
			topTwenty.push(orderedTitles[i]);
		}
		return topTwenty;
	}
 	return orderedTitles;
}
  
//// Best yearly rate average
function bestYearAvg(){}
