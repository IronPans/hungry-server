const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const citySchema = new Schema({
    id: Number,
    cityCode: String,
    cityName: String,
    cityNameAlphabet: String,
    cityNameInitial: String,
    selected: Boolean
});

mongoose.model('City', citySchema);