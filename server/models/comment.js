/**
 * Created by ErolTokalac on 05/12/15.
 */

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var CommentSchema   = new Schema({
    name: { type: String },
    text: { type: String },
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Comment', CommentSchema);