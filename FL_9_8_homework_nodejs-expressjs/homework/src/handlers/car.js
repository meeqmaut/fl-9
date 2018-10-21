const data = require('../../db/data');


const createNewCar = (id, brand, model, engineVolume, year) => {
    let car;
    const carObject = {
        id: id,
        brand: brand,
        model: model,
        engineVolume: engineVolume,
        year: year
    };

    car = data.find((car) => {
        return car.id === carObject.id;
    });

    if (car) {
        return {
            status: 409,
            body: {
                message: 'Car already exists'
            }
        };
    } else {
        data.push(carObject);
        return {
            status: 201,
            body: carObject
        };
    }
}

const getListOfCars = () => {
    return {
        message: data,
        status: 200
    }
}

const getCarById = (id) => {
    let car;
    car = data.find((car) => {
        return car.id === Number(id);
    });
    if (car) {
        return {
            status: 200,
            body: car
        };
    } else {
        return {
            status: 404,
            body: 'Car is not found'
        };
    }
}

const putCarById = (id, brand, model, engineVolume, year) => {
    let car;
    car = data.find((car) => {
        return car.id === Number(id);
    });
    if (car) {
        car.brand = brand;
        car.model = model;
        car.engineVolume = engineVolume;
        car.year = year;
        return {
            status: 200,
            body: car
        };
    } else {
        return {
            status: 404,
            body: 'Car with such id is not found'
        };
    }
}

const deleteCarById = (id) => {
    let car;
    car = data.find((car) => {
        return car.id === Number(id);
    });
    if (car) {
        data = data.filter((cars) => {
            return cars.id !== Number(id);
        });
        return {
            status: 200,
            body: {
                message: 'The car has been successfully removed'
            }
        };
    } else {
        return {
            status: 404,
            body: {
                message: 'Car with such id is not found'
            }
        };
    }
}


module.exports = {
    createNewCar,
    getListOfCars,
    getCarById,
    putCarById,
    deleteCarById
};
