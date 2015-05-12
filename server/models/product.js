/**
 * Created by ErolTokalac on 05/12/15.
 */

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ProductSchema   = new Schema({
    name: { type: String },
    description: { type: String },
    price: { type: Number, min: 0 },
    stock: { type: Number, min: 0 },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    },
    comment_count: {
    	type: Number, min: 0, default: 0
    },
    comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
});

module.exports = mongoose.model('Product', ProductSchema);