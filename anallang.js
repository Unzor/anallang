#!/usr/bin/node
   var fs = require('fs');
var str = fs.readFileSync(process.argv[2]).toString()
var arr = [];
str.split(' ').forEach(function(letter, index){
function countOcurrences(str, value){
   var regExp = new RegExp(value, "gi");
   return str.match(regExp) ? str.match(regExp).length : 0;  
}
var lettere = String.fromCharCode(countOcurrences(letter, "🍑🍆"))
arr.push(lettere)
if (str.split(' ').length == index + 1){
eval(arr.join(''))
}
})
