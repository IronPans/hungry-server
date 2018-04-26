const mongoose = require('mongoose'),
    Schema = mongoose.Schema;
const utils = require('../../common/utils');

const codeSchema = new Schema({
    code: Number,
    createdBy: {type: Date, default: utils.now()}
});

mongoose.model('Code', codeSchema);