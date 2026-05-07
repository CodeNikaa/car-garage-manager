import express, { json } from 'express';
import Car from '../models/Car.js';

const router = express.Router();

router.get('/', async (req, res) => {
    const autos = await Car.find();

    res.json(autos);
});

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
});

router.delete('/:id', async (req, res) => {

    try {
        const getCar = await Car.findByIdAndDelete(req.params.id);
        res.status(200).json({message: "Auto erfolgreich gelöscht"});
    } catch (err) {
        console.log('id is missing or corrupt', err);
        res.status(500).json({message: err.message});
    }
});

router.put('/:id', async (req, res) => {

    try {
        const getCar = await Car.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json({message: "Auto erfolgreich geändert", auto: getCar});
    } catch (err) {
        console.log('id is incorrect or missing');
        res.status(500).json({message: err.message});
    }
});

export default router;