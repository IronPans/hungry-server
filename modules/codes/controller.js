const mongoose = require('mongoose');
const CodeModel = mongoose.model('Code');
const utils = require('../../common/utils');
const BaseRequest = require('../../common/BaseRequest');

const Code = new BaseRequest(CodeModel);

exports.getCode = async (ctx) => {
    const code = utils.getRandom(6);
    const result = await Code.save({
        code
    });
    if (result.message === 'success') {
        ctx.body = {
            data: {
                code: code
            }
        };
    }
};

exports.checkCodeIsValid = async (ctx) => {
    const req = ctx.request.body;
    let message = 'success';
    const result = await Code.find({code: req.code, createdBy: {'$lt' : Date.now() + 3600}});
    if (result.message !== 'success' || !result.data.length) {
        message = 'fail';
    }
    Code.delete({code});
    ctx.body = {
        message
    }
};