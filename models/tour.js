const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tourSchema = new Schema({
    title: {
        type: String, 
        required: true
    },
    location: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
    },
    userId: {
        type: Schema.Types.ObjectId, 
        ref: 'User'
    },

}, {
  timestamps: true,
});

module.exports = mongoose.model('Tour', tourSchema);