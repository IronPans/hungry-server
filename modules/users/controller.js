const mongoose = require('mongoose');
const UserModel = mongoose.model('User');
const utils = require('../../common/utils');
const BaseRequest = require('../../common/BaseRequest');

const User = new BaseRequest(UserModel);

exports.checkUser = async (ctx) => {
    const req = ctx.request.body;
    const result = await User.find({
        name: req.username,
        password: utils.md5(req.password)
    });
    if (result.message === 'success' && result.data && result.data.length) {
        delete result.data[0].password;
        ctx.body = {
            message: 'success',
            data: result.data[0]
        };
    } else {
        ctx.body = {
            message: 'fail'
        };
    }
};