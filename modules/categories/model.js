const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const categoriesSchema = new Schema({
    id: Number,
    name: String,
    image_path: String,
    order: Number
});

mongoose.model('Category', categoriesSchema);