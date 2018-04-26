const mongoose = require('mongoose'),
    FoodModel = mongoose.model('Food');

const BaseRequest = require('../../common/BaseRequest');

const Food = new BaseRequest(FoodModel);

exports.getFoodsList = async (ctx) => {
    const req = ctx.request.body;

    const result = await Food.queryPage({});
    if (result.message === 'success') {
        ctx.body = result;
    }
};