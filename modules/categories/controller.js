const mongoose = require('mongoose');
const CategoryModel = mongoose.model('Category');
const BaseRequest = require('../../common/BaseRequest');

const Category = new BaseRequest(CategoryModel);

exports.getCategories = async (ctx) => {
    const result = await Category.find();
    if (result.message === 'success') {
        ctx.body = result;
    }
};