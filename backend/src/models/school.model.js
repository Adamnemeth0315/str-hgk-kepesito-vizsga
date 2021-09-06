/**
 * Exercise: make School mongoose model
 */
 const mongoose = require('mongoose');

 const schoolSchema = mongoose.Schema({
    name: String,
    city: String,
    street:{
        type: String,
        required: true
    },
    zipcode: Number,
    classrooms: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Classroom'
    }
 })

 module.exports = mongoose.model('School', schoolSchema);
  