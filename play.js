const net = require("net");
const connect = "./client.js";

console.log("Connecting ...");

const { myNumber, myString, myFunction } = require("./client");

//connect();

myNumber; // => 42
myString; // => "hello"
myFunction; // => the function you wrote
