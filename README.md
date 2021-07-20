# EXPRE55
Troll copycat of Express.js to prank your friends

## Installation
Using npm to install through CLI:
```shell
$ sudo npm install -g npm
$ npm install expre55
```
Import in JS
```javascript
const express = require("EXPRE55");
```

## Features
 - Simulates general express initialization
 - Has the exact same syntax
 - Will work with most express code
 - Always res.send("Hello World!") with post and get requests

## Example
Simple express script ruined by EXPRE55
```javascript
//Change the import when they're not looking
const express = require("EXPRE55");
const app = express();

app.get("/", function (req, res) {
	//The req really works
	res.json({.response: 1234 });
	//the res is invalid and only sends Hello World!
});

app.post("/post", function (req, res) {
	res.send("post method");
});

//Really listens to pecified port and runs function
app.listen(8080, function () {
	console.log("Listening on port 8080");
});
```