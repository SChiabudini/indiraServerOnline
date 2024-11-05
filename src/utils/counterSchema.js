const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const counterSchema = new Schema({
    name: { type: String, required: true, unique: true },
    value: { type: Number, default: 0 }
});

const Counter = model('Counter', counterSchema);

module.exports = Counter;