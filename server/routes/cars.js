import express from 'express';
import Car from '../models/Car.js';

const router = express.Router();

router.get('/', async (req, res) => {
    const autos = await Car.find();

    res.json(autos);
})

router.post('/', async (req, res) => {
    try {
        const createCar = {
            marke: req.body.marke,
            modell: req.body.modell,
            baujahr: req.body.baujahr,
            motorcode: req.body.motorcode
    };

        const car = new Car(createCar);
        await car.save();

        res.status(201).json(car);
    } catch(error) {
        console.log(error);
        res.status(500).json({message: error.message});
    }
})

export default router;