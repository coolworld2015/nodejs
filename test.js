var fs = require("fs");
var myJson = require("./test.json");
	//myJson = JSON.stringify(myJson);
	//myJson = JSON.parse(myJson);
	//console.log(myJson);
//fs.writeFile( "test.json", JSON.stringify(myJson), "utf8", function(){} );
 
var Test = {
	getAll: getAll,
    findById: findById,
	findByName: findByName
};

module.exports.Test = Test;

function getAll(req, res) {
	console.log(myJson);
	res.send(myJson);
};

function findById(req, res) {
	var id = req.params.id;
	var results = [];
	for (var i = 0; i < myJson.length; i++) {
		if (myJson[i].id == id) {
			results.push(myJson[i]);
		}
	}
	return res.send(results);
};

function findByName(req, res) {
	var name = req.params.name;
	var results = [];
	for (var i = 0; i < myJson.length; i++) {
		if (myJson[i].name.indexOf(name) > -1) {
			results.push(myJson[i]);
		}
	}
	return res.send(results);
};