const mongoose = require('mongoose'),
    Schema = mongoose.Schema;
const utils = require('../../common/utils');

const foodsSchema = new Schema({
    id: {type: Number, default: utils.getRandom()},
    name: String,
    description: String,
    restaurant_id: Number,
    price: Number,
    order_lead_time: Number,
    image_path: [String] | String
});

mongoose.model('Food', foodsSchema);