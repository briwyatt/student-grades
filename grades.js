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

// .forEach() method syntax from https://developer.mozilla.org 
// arr.forEach(function callback(currentValue, index, array) {
//     //your iterator
// }[, thisArg]);
scores.forEach(function(score){
	if (score > 90) {
	howManyAs.push(score);
} else if ((score > 80) && (score < 91)) {
	howManyBs.push(score);
} else if ((score > 70) && (score < 81)) {
	howManyCs.push(score);
} else if ((score > 60) && (score < 71)) {
	howManyDs.push(score);
} else if ((score > 49) && (score < 61)) {
	howManyFs.push(score);
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