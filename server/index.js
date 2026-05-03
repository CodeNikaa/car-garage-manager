import dotenv from 'dotenv';
dotenv.config();
import './db.js';
import router from './routes/cars.js';
import express from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(express.static('../'))
app.use('/api/cars', router);

app.get('/', (req, res) => {

    res.sendFile('index.html');
})

app.listen(PORT, () => {
    console.log(`The Server is listening on port ${PORT}`)
});