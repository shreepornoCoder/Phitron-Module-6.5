// removing duplicate number
var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
var uniqueNumbers = [...new Set(numbers)];

console.log(uniqueNumbers);

//getting the biggest number
uniqueNumbers.sort(function(a, b){return b-a})
console.log(uniqueNumbers[0]);