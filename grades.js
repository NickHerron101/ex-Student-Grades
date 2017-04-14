console.log("hello", 5);

var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

var scoreCount = 12;

	var numberOfFs = 0;
	var numberOfDs = 0;
	var numberOfCs = 0;
	var numberOfBs = 0;
	var numberOfAs = 0;

for (var i = 0; i < scoreCount; i++) {
	if (scores[i] >= 0 && scores[i] <= 60) {
		numberOfFs++;
	} else if (scores[i] >= 61 && scores[i] <= 70) {
		numberOfDs++;
	} else if (scores[i] >= 71 && scores[i] <= 80) {
		numberOfCs++;
	} else if (scores[i] >= 81 && scores[i] <= 90) {
		numberOfBs++;
	} else if (scores[i] >= 91 && scores[i] <= 100) {
		numberOfAs++;
	}
	console.log("there are " + numberOfFs + " Fs", "there are " + numberOfDs + " Ds", "there are " + numberOfCs + " Cs", "there are " + numberOfCs + " Cs", "there are " + numberOfBs + " Bs", "there are " + numberOfAs + " As");
}

for (var i = 0; i < scoreCount; i++) {
	if (scores[i] <= 55) {
	console.log(scores[i] + " is the lowest grade");
	}
}

for (var i = 0; i < scoreCount; i++) {
	if (scores[i] >= 98) {
	console.log(scores[i] + " is the highest grade");
	}
}



// Loop over an array of student grades (values from 50-100) and output how many of each grades there are.

// A score of 50-60 is an F
// A score of 61-70 is a D
// A score of 71-80 is a C
// A score of 81-90 is a B
// A score of 91-100 is an A
// Start with array of random scores in your JavaScript

// var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
// Use console.log() to output the following criteria:

// How many of each grade?
// What is the lowest grade?
// What is the highest grade?