const mongoose = require('mongoose');
const BaseRequest = require('../common/BaseRequest');

const RestaurantModel = mongoose.model('Restaurant');
const UserModel = mongoose.model('User');
const OrderModel = mongoose.model('Order');
const CategoryModel = mongoose.model('Category');
const FoodModel = mongoose.model('Food');
const CityModel = mongoose.model('City');

const Restaurant = new BaseRequest(RestaurantModel);
const User = new BaseRequest(UserModel);
const Order = new BaseRequest(OrderModel);
const Category = new BaseRequest(CategoryModel);
const Food = new BaseRequest(FoodModel);
const City = new BaseRequest(CityModel);

// test data
const data = require('../db/data');

async function removeAndCreateData() {
    const deleteResult = await Restaurant.remove();
    if (deleteResult.message === 'success') {
        const result = await Restaurant.insertMany(data.restaurants.map((item) => item.restaurant));
        if (result.message === 'success') {
            console.log('insert success');
        }
    }

    const userDeleteResult = await User.remove();
    const userResult = await User.insertMany(data.users);

    const orderDeleteResult = await Order.remove();
    // const orderResult = await Order.insertMany(data.orders);

    const categoryDeleteResult = await Category.remove();
    const categoryResult = await Category.insertMany(data.categories);

    const foodDeleteResult = await Food.remove();
    const foodResult = await Food.insertMany(data.foods);

    const cityDeleteResult = await City.remove();
    const cityResult = await City.insertMany(data.cities);
}


removeAndCreateData();