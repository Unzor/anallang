#!/usr/bin/node
  var argOutPos = process.argv.indexOf('-o') + 1 | process.argv.indexOf('--output') + 1;
var argFile = process.argv.indexOf('-o') + 2 | process.argv.indexOf('--output') + 2;
var fs = require('fs');
var str = fs.readFileSync(process.argv[argFile - 1]).toString().split('');
var result = [];
var out = process.argv[argFile - 1];
console.log(out);
require('fs').readFileSync(out).toString().split('').forEach(function(letter, index){
var alphNum = letter.charCodeAt(0)
result.push(Array(alphNum + 1).join("🍑🍆"))
if (str.length == index + 1){
 require('fs').writeFileSync(process.argv[argOutPos], result.join(' '))
}
})
