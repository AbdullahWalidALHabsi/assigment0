console.log("Hello world");
var peg=require("pegjs");
var peg = require("pegjs");
var fs= require("fs");
var filename='grammer.pegjs';
var grammerDemo=fs.readFileSync(filename,'utf-8');
var parser = peg.generate(grammerDemo);
var input='441003836';
var output =parser.parse(input);
console.log(output);
console.log(output);

console.log(output);

