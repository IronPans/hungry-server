const mongoose = require('mongoose'),
    CityModel = mongoose.model('City');

const BaseRequest = require('../../common/BaseRequest');

const city = new BaseRequest(CityModel);

exports.getCityList = async (ctx) => {
    const result = await city.find();
    if (result.message === 'success') {
        ctx.body = result;
    }
};