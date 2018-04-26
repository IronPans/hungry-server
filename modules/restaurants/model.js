const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

const restaurantSchema = new Schema({
    "activities": [],
    "address": String,
    "authentic_id": Number,
    "description": String,
    "distance": Number,
    "favored": Boolean,
    "flavors": [],
    "float_delivery_fee": Number,
    "float_minimum_order_amount": Number,
    "has_story": Boolean,
    "id": Number,
    "image_path": String,
    "is_new": Boolean,
    "is_premium": Boolean,
    "is_stock_empty": Number,
    "is_valid": Number,
    "latitude": Number,
    "longitude": Number,
    "max_applied_quantity_per_order": Number,
    "name": String,
    "next_business_time": String,
    "only_use_poi": Boolean,
    "opening_hours": [String],
    "order_lead_time": Number,
    "phone": String,
    "piecewise_agent_fee": {
        "description": String,
        "extra_fee": Number,
        "is_extra": Boolean,
        "rules": [{
            "fee": Number,
            "price": Number
        }],
        "tips": String
    },
    "platform": Number,
    "posters": [],
    "promotion_info":String,
    "rating": Number,
    "rating_count": Number,
    "recent_order_num": Number,
    "recommend": {
        "is_ad": Boolean,
        "reason": String
    },
    "recommend_reasons": [],
    "regular_customer_count": Number,
    "scheme": String,
    "status": Number,
    "support_tags": [],
    "supports": [],
    "type": Number
});

mongoose.model('Restaurant', restaurantSchema);