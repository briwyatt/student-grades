// console.log("hello console");

// Start with array of random scores in your JavaScript

var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

// scores.map()
var sortedNumbers = scores.sort(function(first, second) {
    return first - second; //returns in ascending order
});
// console.log("sortedNumbers", sortedNumbers);

// How many of each grade?

var howManyAs = [];
var howManyBs = [];
var howManyCs = [];
var howManyDs = [];
var howManyFs = [];

// A score of 50-60 is an F
// A score of 61-70 is a D
// A score of 71-80 is a C
// A score of 81-90 is a B
// A score of 91-100 is an A

scores.forEach(function(scores){
	if (scores > 90) {
	howManyAs.push(scores);
} else if ((scores > 80) && (scores < 91)) {
	howManyBs.push(scores);
} else if ((scores > 70) && (scores < 81)) {
	howManyCs.push(scores);
} else if ((scores > 60) && (scores < 71)) {
	howManyDs.push(scores);
} else if ((scores > 49) && (scores < 61)) {
	howManyFs.push(scores);
}
});

// Loop over an array of student grades (values from 50-100) and output how many of each grades there are.
console.log("how many As:", howManyAs);
console.log("how many Bs:", howManyBs);
console.log("how many Cs:", howManyCs);
console.log("how many Ds:", howManyDs);
console.log("how many Fs:", howManyFs);


// Use console.log to output the following criteria:
var highestGrade = sortedNumbers.pop();
console.log("What is the highest grade?", highestGrade);

var lowestGrade = sortedNumbers.shift();
console.log("What is the lowest grade?", lowestGrade);