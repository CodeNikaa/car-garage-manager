import mongoose from 'mongoose';

const carSchema = new mongoose.Schema ({
    marke: String,
    modell: String,
    baujahr: Number,
    motorcode: String,
});

const Car = mongoose.model('Car', carSchema);
export default Car;