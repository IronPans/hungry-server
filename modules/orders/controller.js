const mongoose = require('mongoose');
const OrderModel = mongoose.model('Order');
const BaseRequest = require('../../common/BaseRequest');

const Order = new BaseRequest(OrderModel);

exports.getOrderList = async (ctx) => {
    const req = ctx.request.body;
    const result = await Order.find({'user_id': req.userId});
    if (result.message === 'success') {
        ctx.body = result;
    }
};