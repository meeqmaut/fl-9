const express = require('express');
const car = require('./handlers/car');
const checkAccess = require('./middlewares/delete-authorization');
const bodyParser = require('body-parser');
const router = express.Router();

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({
    extended: true
}))

router.post('/car', car.createNewCar);

router.get('/car', car.getListOfCars);

router.get('/car/:id', car.getCarById);

router.put('/car/:id', car.putCarById);

router.delete('/car/:id', checkAccess.deleteAutorization, car.deleteCarById);


module.exports = router;
