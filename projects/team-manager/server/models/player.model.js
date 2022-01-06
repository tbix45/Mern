const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required!"],
        minlength: [2, "Must be at least 2 characters!"]
    },
    position: {
        type: String,
        required: [true, "Pick a position!"]
    }
});

const Player = mongoose.model('Player', PlayerSchema);

module.exports = Player;
