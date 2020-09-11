//jshint esversion:6

const superheroes = require("superheroes");
var heroName = superheroes.random();
console.log("Hero name:" + heroName);

const superVillains = require("supervillains");
var villainName = superVillains.random();
console.log("Villian name:" + villainName);
