const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title: { type: String, required: true }, // Walidacja [cite: 85]
    date: { type: Date, required: true },
    category: { type: String, required: true },
    description: String
});

module.exports = mongoose.model('Event', eventSchema);