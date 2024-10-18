import { response } from "express";

let cars = [];

// GET /cars
export const getAllCars = (request, response) => {
    response.status(200).json(cars);
};

// GET /cars/:id
export const getCarById = (request, response) => {
    const { id } = request.params;

    // loop through array and find the item with same id as params
    const car = cars.filter((car) => car.id == id);

    // Error
    if (!car.length) {
        response.status(404).json({
            message: "Car not found"
        });
    }

    response.status(200).json(car)
};

//POST/cars
export const createCar = (request, response) => {
    const { model, series, year } = request.body;

    const id = cars.length > 0 ? cars.length + 1 : 1;

    cars.push({
        id,
        model,
        series,
        year,
    });

    response.status(201).json(car);
};