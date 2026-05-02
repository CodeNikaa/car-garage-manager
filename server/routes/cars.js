import express from 'express';
import Car from '../models/Car.js';

const router = express.Router();

router.get('/', async (req, res) => {
    const autos = await Car.find();

    console.log(autos);
})

export default router;