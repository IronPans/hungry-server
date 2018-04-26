const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const userSchema = new Schema({
    user_id: {type: String},
    name: String,
    phone: Number,
    password: String,
    avatar: String,
    money: Number,
    payPwd: String,
    createdBy: {type: Date, default: Date.now()}
});

mongoose.model('User', userSchema);
