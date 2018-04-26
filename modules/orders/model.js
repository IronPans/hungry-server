const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const orderSchama = new Schema({
    "id": Number,
    "food_id": Number,
    "user_id": Number,
    "restaurant_id": Number,
    "name": String,
    "price": Number,
    "image_path": String,
    "selectNum": Number
});

mongoose.model('Order', orderSchama);