const mongoose = require('mongoose');
const RestaurantModel = mongoose.model('Restaurant');
const BaseRequest = require('../../common/BaseRequest');

const Restaurant = new BaseRequest(RestaurantModel);

exports.getRestaurantLists = async (ctx) => {
    const req = ctx.request.body;
    const condition = req.condition || {};
    const page = req.page || 1;
    const limit = req.limit || 10;
    const result = await Restaurant.queryPage(condition, {
        page,
        limit
    });
    if (result.message === 'success') {
        ctx.body = {
            ...result
        };
    }
};