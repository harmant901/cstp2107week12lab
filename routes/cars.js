const { Router } = require('express');
var express = require('express');
var route = express.Router();

var controller = require('../controllers/car');

//Get all the cars
route.get("/cars/:id", controller.getCar);
route.get("/cars", controller.getCars);
route.post("/cars", controller.createCar);
route.delete("/cars/:id", controller.deleteCar)

//Export the updated router
module.exports = route;