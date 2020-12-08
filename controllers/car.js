
const Car = require("../models/car") //Added the model


exports.getCar = async (req, res) => {
    try {
        const getCar = await Car.findOne({ _id: req.params.id })
        res.send(getCar);
    } catch {
        res.status(404);
        res.send({ error: "Car does not exist: " + req.params.id })
    }
};


//Get all the cars
exports.getCars = async (req, res) => {
    const cars = await Car.find()
    res.send(cars)
};

//Create a car
exports.createCar = async (req, res) => {

    try {
        const newCar = new Car({
            name: req.body.name,
            make: req.body.make,
            model: req.body.model,
            year: req.body.year
        });
        await newCar.save();
        res.send(newCar);
    } catch {
        res.status(500);
        res.send({ error: "Could not create car" })
    }
    
}

exports.deleteCar = async(req, res) => {
    console.log("delete car was called on: " + req.params.id);
    try {
        const getCar = await Car.deleteOne({ _id: req.params.id })
        res.send(getCar);
    } catch {
        res.status(500);
        res.send({ error: "Could not delete car: " + req.params.id })
    }
}

exports.getCar = async(req, res, next) =>  {
    console.log("get car was called on: " + req.params.id);
    try {
        const getCar = await Car.findOne({ _id: req.params.id })
        res.send(getCar);
    } catch {
        res.status(404);
        res.send({ error: "Could not find car: " + req.params.id })
    }
}