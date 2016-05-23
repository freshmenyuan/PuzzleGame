"use strict";

require("../style.css");
document.write(require("./content.js"));

var angular = require('angular');
var app = angular.module('app', []);
var a = 1;

console.log(app);