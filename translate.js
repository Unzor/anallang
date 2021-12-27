#!/usr/bin/node
var parser = require("cli2json");
var cli = parser.parse(process.argv.slice(2).join(" "), {
  readCommandAfter: ["-o", "--output"]
})
  var argOutPos = cli.flags[0].split(" ").pop()
var argFile = cli.commands[0]
var fs = require('fs');
var str = fs.readFileSync(argFile).toString().split('');
var result = [];
var out = argOutPos
console.log(out);
require('fs').readFileSync(out).toString().split('').forEach(function(letter, index){
var alphNum = letter.charCodeAt(0)
result.push(Array(alphNum + 1).join("🍑🍆"))
if (str.length == index + 1){
 require('fs').writeFileSync(argOutPos, result.join(' '))
}
})
